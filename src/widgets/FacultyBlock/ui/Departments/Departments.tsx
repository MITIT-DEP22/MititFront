import React, {FC} from 'react';
import {Department} from "entities/department";
import SuperiorCard from "../../../../shared/ui/TextBlockComponent/ui/SuperiorCard/SuperiorCard";
import css from "./Departments.module.scss"
import DepartmentCard from "./ui/DepartmentCard";

interface DepartmentsProps {
    departments: Department[];
}

const Departments: FC<DepartmentsProps> = ({departments}) => {
    return (
        <div className={css.container}>
            <p>ДО СКЛАДУ ФАКУЛЬТЕТУ ОРГАНІЗАЦІЙНО ВХОДЯТЬ {departments?.length} КАФЕДРИ:</p>
            <div className={css.departmentsContainer}>
                {departments?.map((department, index) => (
                    index % 2 ?
                        <DepartmentCard department={department}/>
                        :
                        <DepartmentCard department={department} right/>
                ))}
            </div>
        </div>
    );
};

export default Departments;