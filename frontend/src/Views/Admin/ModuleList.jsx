import React, {useEffect} from 'react'
import { SortableTable } from '../../Components/SortableTable'
import Navbar from '../../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import {getModules, clearErrors} from '../../Actions/modulesActions'
const ModuleList = () => {
  const dispatch = useDispatch()
  const { modules, loading, error } = useSelector(state => state.modules)
  
  useEffect(()=>{
    if (error){
      dispatch(clearErrors())
    }
   
    dispatch(getModules())
  },[dispatch, ])

  
  return (
    <>
        {/* <Navbar /> */}
        <div className="container mx-auto mt-5">
        <SortableTable modules={modules}/>
        </div>
        
    </>
  )
}

export default ModuleList