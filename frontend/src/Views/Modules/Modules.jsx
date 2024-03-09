import React, { useEffect, useState } from 'react'
import {
  Input,
  Tabs,
  Tab,
  TabsHeader,
  IconButton, Typography

} from '@material-tailwind/react'
import ModuleCard from '../../Components/ModuleCard'
import { useDispatch, useSelector } from 'react-redux'
import { getModules, clearErrors, getAdminModules } from '../../Actions/modulesActions'
import { getCategory, clearErrors as clearCategoryError } from '../../Actions/categoryActions'
import Loader from '../../Components/Loader'
import { MagnifyingGlassIcon, ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/20/solid'
import EmptyPage from '../../EmptyPage'
const Modules = () => {
  const dispatch = useDispatch()
  const { modules, loading, error, modulesCount, resPerPage, filteredModulesCount } = useSelector(state => state.modules)
  const [active, setActive] = useState(1);
  const { categories, error: categoryError } = useSelector(state => state.categories)
  const [category, setCategory] = useState('all')
  const [keyword, setKeyword] = useState('')
  const [input, setInput] = useState('')
  const performSearch = () => {
    setCategory('all')
    setKeyword(input)
    setActive(1)
  }
  useEffect(() => {

    if (error) {
      dispatch(clearErrors())
    }
    if (categoryError) {
      dispatch(clearCategoryError())
    }
    dispatch(getCategory())
    dispatch(getModules(active, keyword, category))


  }, [dispatch, error, categoryError, category, keyword, active])
  let count = (modulesCount > 0 ? modulesCount : resPerPage)
  if (keyword) {
    if (filteredModulesCount > 0) {
      count = filteredModulesCount
    }
    else {
      count = resPerPage
    }
  }
  if (category) {
    if (filteredModulesCount > 0) {
      count = filteredModulesCount
    }
    else {
      count = resPerPage
    }

  }

  const totalPage = Math.ceil(count / resPerPage);
  const next = () => {
    if (active === totalPage) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };
  return (
    <>
      <div className="sm:container sm:mx-auto sm:text-left  p-10 mt-10">
        <> 
        <div className="text-center sm:text-left">
        <h1 className="mb-5 font-bold text-3xl md:text-4xl lg:text-3xl font-[Poppins]">Read our downloadable modules!</h1>
          <p className='mb-5 italic'>If the PDF failed to load, please check your internet connection and try again</p>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="overflow-x-auto whitespace-nowrap w-full">
              <Tabs value={category} className="w-max">
                <TabsHeader className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                  indicatorProps={{
                    className:
                      "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",

                  }}>
                  <Tab value="all" className="h-12 text-center z-10" onClick={() => { setCategory('all'); setKeyword(''); setInput(''); setActive(1) }}>All</Tab>
                  {categories.map(({ _id, name }) => (
                    <Tab key={_id} value={_id} className="h-12 text-center z-10" onClick={() => { setCategory(_id); setInput(''); setKeyword(''); setActive(1) }}>
                      &nbsp;&nbsp;{name}&nbsp;&nbsp;
                    </Tab>
                  ))}
                </TabsHeader>
              </Tabs>
            </div>

            <div className="w-full md:w-72 flex">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5 hover:cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-yellow-700" onClick={performSearch} />}
                onChange={(e) => setInput(e.target.value.trim())}
                value={input}
              />

            </div>
          </div>
          {/* Pagination */}
          <div className="flex items-center justify-center gap-8 mt-10">
            <IconButton
              size="sm"
              variant="outlined"
              onClick={prev}
              disabled={active === 1}
            >
              <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
            <Typography color="gray" className="font-normal">
              Page <strong className="text-gray-900">{active}</strong> of{" "}
              <strong className="text-gray-900">{totalPage}</strong>
            </Typography>
            <IconButton
              size="sm"
              variant="outlined"
              onClick={next}
              disabled={active === 10}
            >
              <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
          </div>
          {loading ? <div className="min-h-screen mt-20"><Loader /></div> :
            modules && modules.length > 0 ?
              <div className="grid justify-items-center justify-center gap-10 md:grid-cols-2 lg:grid-cols-6 mb-20">
                {modules.map(m => <div key={m._id} className="col-span-full lg:col-span-3 2xl:col-span-2 ">
                  <ModuleCard img={m.img.url} link={m.file.url} title={m.title} id={m._id} description={m.description} shortDesc={m.shortDesc} category={m.category ? m.category : 'None'} />
                </div>)}
              </div> : <EmptyPage />}
          {/* Pagination */}
          <div className="flex items-center justify-center gap-8">
            <IconButton
              size="sm"
              variant="outlined"
              onClick={prev}
              disabled={active === 1}
            >
              <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
            <Typography color="gray" className="font-normal">
              Page <strong className="text-gray-900">{active}</strong> of{" "}
              <strong className="text-gray-900">{totalPage}</strong>
            </Typography>
            <IconButton
              size="sm"
              variant="outlined"
              onClick={next}
              disabled={active === 10}
            >
              <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
          </div></>


      </div>

    </>

  )
}

export default Modules