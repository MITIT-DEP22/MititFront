import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {PageHead} from "widgets/PageHead";
import {units} from "shared/enums/Data";
import {Unit} from "entities/unit";
import {UnitBlock} from "widgets/UnitBlock";

const UnitPage = () => {

    const {id} = useParams()
    const [unit, setUnit] = useState<Unit>({} as Unit)

    useEffect(() => {
        setUnit(units.filter(item => item.id === Number(id))[0])
        console.log(unit)
    }, []);

    return (
        <div>
            <PageHead title={"Підрозділи"} img={unit?.headerImg}/>
            <UnitBlock unit={unit}/>
            <button onClick={()=>console.log(unit)}>log</button>
        </div>
    );
};

export default UnitPage;