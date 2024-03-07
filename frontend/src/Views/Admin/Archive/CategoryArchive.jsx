import React, { useEffect, useState } from 'react'
import { CategoryTable } from '../../../Components/CategoryTable'
import { useDispatch, useSelector } from 'react-redux'
import { getArchivedCategories, clearErrors } from '../../../Actions/categoryActions'
const CategoryArchive = () => {
  const dispatch = useDispatch()
  const [keyword, setKeyword] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const { archivedCategories, loading, error, archivedCategoryCount, resPerPage, filteredArchivedCategoriesCount } = useSelector(state => state.archiveCategory)
  useEffect(() => {
    if (error) {
      dispatch(clearErrors())
    }
    if (keyword === '') {
      dispatch(getArchivedCategories(currentPage))
    }
    else{
      setCurrentPage(1)
      dispatch(getArchivedCategories(1, keyword))
    }
    
  }, [dispatch, error, keyword, currentPage])
useEffect(()=>{
    if (archivedCategories){
        console.log(archivedCategories)
    }
},[archivedCategories])
  let count = archivedCategoryCount
  if (keyword){
      count = filteredArchivedCategoriesCount
  }
  return (
    <>
      <div className="container mx-auto mt-5 p-10 flex justify-center items-center">
        <CategoryTable header="Category Archive List" loading={loading} category={archivedCategories} categoryCount={count} resPerPage={resPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} keyword={keyword} setKeyword={setKeyword} /> 
        
      </div>
    </>
  )
}

export default CategoryArchive