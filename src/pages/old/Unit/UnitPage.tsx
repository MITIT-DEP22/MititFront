import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {PageHead} from "../../../widgets/PageHead";
import {Unit} from "../../../entities/old/unit";
import {UnitBlock} from "../../../widgets/old/UnitBlock";

 const UnitPage = () => {
    //
    // const {id} = useParams()
    // const [unit, setUnit] = useState<Unit>({} as Unit)
    //
    // useEffect(() => {
    //     setUnit(units.filter(item => item.id === Number(id))[0])
    //     console.log(unit)
    // }, [id]);

    return (
        <>
            {/*/!*<PageHead title={"Підрозділи"} imgId={unit?.headerImg?.id}/>*!/*/}
            {/*<UnitBlock unit={unit}/>*/}
        </>
    );
};
 export default UnitPage
