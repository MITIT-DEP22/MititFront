import React from 'react';
import css from "./HomeBlock.module.scss"
import SectionTitle from "shared/ui/SectionTitle/SectionTitle";
import {NewsHome} from "./NewsHome";
import {Specialities} from "./Specialities";
import {AdditionalLinks} from "./AdditionalLinks";
import BlockContainer from "shared/ui/BlockContainer/BlockContainer";

export const HomeBlock = () => {
    return (
        <>
            <BlockContainer className={css.container}>
                <SectionTitle title={"Хроніка"}/>
                <NewsHome/>
                <SectionTitle title={"Спеціальності підготовки"}/>
                <Specialities/>
            </BlockContainer>
            <AdditionalLinks/>
        </>
    );
};
