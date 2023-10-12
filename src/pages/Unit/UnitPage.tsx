import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {PageHead} from "../../widgets/PageHead";

const UnitPage = () => {

    const {id} = useParams()
    const [unit, setUnit] = useState()

    useEffect(() => {

    }, []);

    return (
        <div>
            <PageHead title={"Підрозділи"} img={""}/>
            Unit page {id}
        </div>
    );
};

export default UnitPage;