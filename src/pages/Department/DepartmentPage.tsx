import React, {useEffect, useState} from 'react';
import {PageHead} from "../../widgets/PageHead";
import {useParams} from "react-router";
import {Department} from "../../entities/department";
import {departments} from "../../shared/enums/Data";
import DepartmentBlock from "../../widgets/DepartmentBlock/DepartmentBlock";

const DepartmentPage = () => {

    const {id} = useParams()
    const [department, setDepartment] = useState<Department>({} as Department)

    useEffect(() => {
        setDepartment(departments.filter(item => item.id === Number(id))[0])
    }, [id]);
    return (
        <>
            <PageHead title={"Кафедри"} img={department?.headerImg}/>
            <DepartmentBlock department={department}/>
        </>
    );
};

export default DepartmentPage;