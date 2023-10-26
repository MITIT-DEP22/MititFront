import React from 'react';
import InfoCard from "./InfoCard/InfoCard";
import css from "./InstituteBlock.module.scss"
import {InstituteInfoCards} from "../../../entities/institute-info/api/InstituteInfoApi";
import SectionTitle from "shared/ui/SectionTitle/SectionTitle";
import BlockContainer from "shared/ui/BlockContainer/BlockContainer";

export const InstituteBlock = () => {
    return (
        <BlockContainer className={css.container}>
            <SectionTitle  title={"Інститут"}/>
            <div className={css.cardContainer}>
                {InstituteInfoCards.map(item => (
                    <InfoCard key={`${item.title}_${item.link}`} info={item}/>
                ))}
            </div>
        </BlockContainer>
    );
};
