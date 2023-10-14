import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {PageHead} from "../../widgets/PageHead";
import {FacultyBlock} from "widgets/FacultyBlock";
import {Faculty} from "entities/faculty";
import {faculties} from "shared/enums/Data"

const FacultyPage = () => {

    const {id} = useParams()
    const [faculty, setFaculty] = useState<Faculty>({} as Faculty)

    useEffect(() => {
        setFaculty(faculties.filter(item => item.id === Number(id))[0])
    }, [id]);

    return (
        <>
            <PageHead title={"Факультети"} imgId={faculty?.headerImg?.id}/>
            <FacultyBlock faculty={faculty}/>
        </>
    );
};

export default FacultyPage;