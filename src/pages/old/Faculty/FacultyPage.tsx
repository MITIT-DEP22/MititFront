import React from 'react';
import {useParams} from "react-router";
import {PageHead} from "../../../shared/ui/PageHead";
import {FacultyBlock} from "../../../widgets/old/FacultyBlock";
import {observer} from "mobx-react";
import LoadingSpinner from "../../../shared/ui/LoadingSpinner/LoadingSpinner";
import {Navigate} from "react-router-dom";
import {RouterNames} from "../../../shared/enums/RouterNames";

const FacultyPage = observer(() => {

    // const {id} = useParams()
    // const {faculties, isLoading} = facultyStore
    // const faculty = faculties.filter(item => item.id === Number(id))[0]

    return (<>
            {/*// isLoading ?*/}
            {/*// <LoadingSpinner/> : (*/}
            {/*// faculty ?*/}
            {/*// <>*/}
            {/*// <PageHead title={"Факультети"} imgId={faculty?.headerImage?.id}/>*/}
            {/*// <FacultyBlock faculty={faculty}/>*/}
            {/*// </>*/}
            {/*// : <Navigate to={RouterNames.NOT_FOUND.to}/>)*/}
        </>
    );
});

export default FacultyPage
