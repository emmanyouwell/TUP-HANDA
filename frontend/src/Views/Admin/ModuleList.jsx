import React, { useEffect, useState } from 'react'
import { SortableTable } from '../../Components/SortableTable'
import Navbar from '../../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminModules, clearErrors } from '../../Actions/modulesActions'
import Loader from '../../Components/Loader'
const ModuleList = () => {
  const dispatch = useDispatch()
  const [keyword, setKeyword] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const { modules, loading, error, modulesCount, resPerPage, filteredModulesCount } = useSelector(state => state.modules)
  useEffect(() => {
    if (error) {
      dispatch(clearErrors())
    }
    if (keyword === '') {
      dispatch(getAdminModules(currentPage))
    }
    else{
      setCurrentPage(1)
      dispatch(getAdminModules(1, keyword))
    }
    
  }, [dispatch, error, keyword, currentPage])
  let count = modulesCount
  if (keyword){
      count = filteredModulesCount
  }
  return (
    <>
      <div className="container mx-auto mt-5 p-10 flex justify-center items-center">
        <SortableTable loading={loading} modules={modules} modulesCount={count} resPerPage={resPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} keyword={keyword} setKeyword={setKeyword} /> 
        
      </div>
    </>
  )
}

export default ModuleList