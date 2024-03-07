import React, { useEffect, useState } from 'react'
import { SortableTable } from '../../../Components/SortableTable'
import { useDispatch, useSelector } from 'react-redux'
import { getArchivedModules, clearErrors } from '../../../Actions/modulesActions'
const ModuleArchive = () => {
    const dispatch = useDispatch()
    const [keyword, setKeyword] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [category, setCategory] = useState('')
    const { archivedModules, loading, error, archivedModulesCount, resPerPage, filteredArchivedModulesCount } = useSelector(state => state.archiveModule)
    useEffect(() => {
        if (error) {
            dispatch(clearErrors())
        }

        setCurrentPage(1)
        dispatch(getArchivedModules(currentPage, keyword, category))


    }, [dispatch, error, keyword, currentPage, category])
   
    let count = archivedModulesCount
    if (keyword) {
        count = filteredArchivedModulesCount
    }
    return (
        <>
            <div className="container mx-auto mt-5 p-10 flex justify-center items-center">
                <SortableTable header="Module Archive List" loading={loading} modules={archivedModules} modulesCount={count} resPerPage={resPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} keyword={keyword} setKeyword={setKeyword} category={category} setCategory={setCategory} />

            </div>
        </>
    )
}

export default ModuleArchive