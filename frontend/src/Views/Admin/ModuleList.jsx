import React, { useEffect, useState } from 'react'
import { SortableTable } from '../../Components/SortableTable'
import Navbar from '../../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminModules, clearErrors } from '../../Actions/modulesActions'
const ModuleList = () => {
  const dispatch = useDispatch()
  const [keyword, setKeyword] = useState('')
  const [category, setCategory] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const { modules, loading, error, modulesCount, resPerPage, filteredModulesCount } = useSelector(state => state.modules)
  useEffect(() => {
    if (error) {
      dispatch(clearErrors())
    }
    if (keyword === '') {
      dispatch(getAdminModules(currentPage, keyword, category))
    }
    else{
      setCurrentPage(1)
      dispatch(getAdminModules(currentPage, keyword,category))
    }
    
  }, [dispatch, error, keyword, currentPage, category])
  useEffect(()=>{
    console.log(category)
  },[category])
  let count = modulesCount
  if (keyword){
      count = filteredModulesCount
  }
  return (
    <>
      <div className="container mx-auto mt-5 p-10 flex justify-center items-center">
        <SortableTable header="Module List" loading={loading} modules={modules} modulesCount={count} resPerPage={resPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} keyword={keyword} setKeyword={setKeyword} setCategory={setCategory} category={category} /> 
        
      </div>
    </>
  )
}

export default ModuleList