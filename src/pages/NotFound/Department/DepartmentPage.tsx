import React, {useEffect, useState} from 'react';
import {PageHead} from "../../../widgets/PageHead";
import {useParams} from "react-router";
import {Department} from "../../../entities/old/department";
import DepartmentBlock from "../../../widgets/old/DepartmentBlock/DepartmentBlock";

 const DepartmentPage = () => {

    // const {id} = useParams()
    // const [department, setDepartment] = useState<Department>({} as Department)
    //
    // useEffect(() => {
    //     setDepartment(departments.filter(item => item.id === Number(id))[0])
    // }, [id]);
    //
    // return (
    //     <>
    //         <PageHead title={"Кафедри"} imgId={department?.headerImg?.id}/>
    //         <DepartmentBlock department={department}/>
    //     </>
    // );
};

export default DepartmentPage