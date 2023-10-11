import React, {FC, useEffect, useState} from 'react';
import {Department} from "entities/department";
import SuperiorCard from "shared/ui/SuperiorCard/SuperiorCard";
import css from "./DepartmentCard.module.scss"

interface DepartmentCardProps {
    department: Department;
    right?: boolean
}

const DepartmentCard: FC<DepartmentCardProps> = ({department, right}) => {

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", resize)
        return () => {
            window.removeEventListener("resize", resize)
        }
    }, []);

    const resize = () => {
        setInnerWidth(window.innerWidth)
    }

    if (innerWidth < 1050 || !right) {
        return (<div className={css.container}>
                <SuperiorCard superior={department.superior} positionRight={true}/>
                <div className={css.about}>
                    <p className={css.title}> {department.title}</p>
                    <p className={css.description}>{department.description}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className={css.container}>
                <div className={css.about}>
                    <p className={css.title}> {department.title}</p>
                    <p className={css.description}>{department.description}</p>
                </div>
                <SuperiorCard superior={department.superior} positionRight={false}/>
            </div>
        );
    }

};

export default DepartmentCard;