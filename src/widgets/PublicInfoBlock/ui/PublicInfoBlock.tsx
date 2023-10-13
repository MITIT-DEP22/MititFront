import React from 'react';
import css from './PublicInfoBlock.module.scss'
import SectionTitle from "shared/ui/SectionTitle/SectionTitle";
import TextBlocks from "shared/ui/TextBlocks/TextBlocks";
import {publicInfo} from "../../../shared/enums/Data";

export const PublicInfoBlock = () => {
    return (
        <div className={css.container}>
            <SectionTitle title={"Публічна інформація"}/>
            <TextBlocks textBlocks={publicInfo}/>
        </div>
    );
};
