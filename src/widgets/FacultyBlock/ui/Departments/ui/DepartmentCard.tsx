import React, {FC, useEffect, useState} from 'react';
import {Department} from "entities/department";
import SuperiorCard from "shared/ui/SuperiorCard/SuperiorCard";
import css from "./DepartmentCard.module.scss"
import TextBlocks from "../../../../../shared/ui/TextBlocks/TextBlocks";
import textBlocks from "../../../../../shared/ui/TextBlocks/TextBlocks";

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

    return (<>
            {innerWidth < 1050 || !right ?
                <div className={css.container}>
                    <SuperiorCard superior={department.superior} positionRight={true}/>
                    <div className={css.about}>
                        <p className={css.title}> {department.title}</p>
                        <p className={css.description}>{department.description}</p>
                    </div>
                </div>
                :
                <div className={css.container}>
                    <div className={css.about}>
                        <p className={css.title}> {department.title}</p>
                        <p className={css.description}>{department.description}</p>
                    </div>
                    <SuperiorCard superior={department.superior} positionRight={false}/>
                </div>
            }
            {department.textBlocks &&
                <TextBlocks textBlocks={department.textBlocks}/>
            }
        </>

    )
};

export default DepartmentCard;