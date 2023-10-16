import React from 'react';
import InfoCard from "./InfoCard/InfoCard";
import css from "./InstituteBlock.module.scss"
import {InstituteInfoCards} from "entities/institute-info/api/InstituteInfoApi";
import SectionTitle from "shared/ui/SectionTitle/SectionTitle";
import BlockContainer from "shared/ui/BlockContainer/BlockContainer";


export const InstituteBlock = () => {
    return (
        <BlockContainer>
            <SectionTitle  title={"Інститут"}/>
            <div className={css.container}>
                {InstituteInfoCards.map(item => (
                    <InfoCard info={item}/>
                ))}
            </div>
        </BlockContainer>
    );
};
