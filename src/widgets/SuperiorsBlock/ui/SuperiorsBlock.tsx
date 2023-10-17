import React from 'react';
import SectionTitle from "shared/ui/SectionTitle/SectionTitle";
import {CompositionOfSuperiors} from "../../../shared/ui/TextBlockComponent/ui/CompositionOfSuperiors";
import BlockContainer from "shared/ui/BlockContainer/BlockContainer";
import superiorStore from "entities/superior/store/superior-store";
import LoadingSpinner from "shared/ui/LoadingSpinner/LoadingSpinner";
import {observer} from "mobx-react";

export const SuperiorsBlock = observer(() => {
    const {superiors, isLoading} = superiorStore

    return (
        <BlockContainer>
            {isLoading ? <LoadingSpinner/>
                :
                <>
                    <SectionTitle title={"Керівний склад"}/>
                    <CompositionOfSuperiors superiors={superiors}/>
                </>
            }
        </BlockContainer>
    );
});
