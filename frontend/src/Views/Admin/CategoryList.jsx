import React, { useEffect, useState } from 'react'
import { CategoryTable } from '../../Components/CategoryTable'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminCategory, clearErrors } from '../../Actions/categoryActions'
const CategoryList = () => {
  const dispatch = useDispatch()
  const [keyword, setKeyword] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const { categories, loading, error, categoryCount, resPerPage, filteredCategoriesCount } = useSelector(state => state.categories)
  useEffect(() => {
    if (error) {
      dispatch(clearErrors())
    }
    if (keyword === '') {
      dispatch(getAdminCategory(currentPage))
    }
    else{
      setCurrentPage(1)
      dispatch(getAdminCategory(1, keyword))
    }
    
  }, [dispatch, error, keyword, currentPage])
  useEffect(()=>{
    if (categories){
        console.log(categories)
    }
  }, [categories])
  let count = categoryCount
  if (keyword){
      count = filteredCategoriesCount
  }
  return (
    <>
      <div className="sm:container sm:mx-auto mt-5 p-10 flex justify-center items-center">
        <CategoryTable header="Category List" loading={loading} category={categories} categoryCount={count} resPerPage={resPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} keyword={keyword} setKeyword={setKeyword} /> 
        
      </div>
    </>
  )
}

export default CategoryList