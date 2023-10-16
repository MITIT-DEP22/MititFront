import React from 'react';
import SectionTitle from "shared/ui/SectionTitle/SectionTitle";
import TextBlocks from "shared/ui/TextBlocks/TextBlocks";
import {publicInfo} from "shared/enums/Data";
import BlockContainer from "shared/ui/BlockContainer/BlockContainer";

export const PublicInfoBlock = () => {
    return (
        <BlockContainer>
            <SectionTitle title={"Публічна інформація"}/>
            <TextBlocks textBlocks={publicInfo}/>
        </BlockContainer>
    );
};
