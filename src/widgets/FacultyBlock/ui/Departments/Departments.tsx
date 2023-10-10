import React, {FC} from 'react';
import {Department} from "entities/department";
import SuperiorCard from "../../../../shared/ui/SuperiorCard/SuperiorCard";

interface DepartmentsProps {
    departments: Department[];
}

const Departments: FC<DepartmentsProps> = ({departments}) => {
    return (
        <>
            {departments?.map(department => (
                <div style={{display:"flex"}}>
                    <p> {department.title}</p>
                    <p>{department.description}</p>
                    <SuperiorCard superior={department.superior} positionRight={false}/>
                </div>
            ))}
        </>
    );
};

export default Departments;