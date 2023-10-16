import React from 'react';
import BlockContainer from "shared/ui/BlockContainer/BlockContainer";
import {faculties} from "shared/enums/Data";

export const NewsBlock = () => {
    return (
        <BlockContainer>
            NewsBlock
            <button onClick={() => {
                console.log(JSON.stringify(faculties[0]))
            }}>asd</button>
        </BlockContainer>
    );
};
