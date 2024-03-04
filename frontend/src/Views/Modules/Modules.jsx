import React, {useEffect} from 'react'
import Navbar from '../../Components/Navbar'
import ModuleCard from '../../Components/ModuleCard'
import { useDispatch, useSelector } from 'react-redux'
import { getModules, clearErrors } from '../../Actions/modulesActions'
import Loader from '../../Components/Loader'
const Modules = () => {
  const dispatch = useDispatch()
  const { modules, loading, error } = useSelector(state => state.modules)
  useEffect(()=>{
  
    if (error){
      dispatch(clearErrors())
    }
    dispatch(getModules())
  },[dispatch, error])
  return (
    <>
      <div className="container mx-auto  p-10 mt-10">
        {loading ? <div className="min-h-screen"><Loader/></div> : <> <h1 className="mb-20 font-bold text-3xl md:text-4xl lg:text-5xl font-[Poppins]">Read our downloadable modules!</h1>
          {modules && modules.length > 0 ? <div className="grid justify-items-center items-center justify-center gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">{modules.map(m=> <ModuleCard key={m._id} img={m.img.url} link={m.file.url} title={m.title} description={m.description} shortDesc={m.shortDesc} /> )}</div>: <p>No modules yet</p>}</>}
       
      </div>

    </>

  )
}

export default Modules