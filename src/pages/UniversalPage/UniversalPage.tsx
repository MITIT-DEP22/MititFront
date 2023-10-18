import React, {useEffect} from 'react';
import {PageHead} from "shared/ui/PageHead";
import TextBlocks from "shared/ui/TextBlocks/TextBlocks";
import LoadingSpinner from "shared/ui/LoadingSpinner/LoadingSpinner";
import {observer} from "mobx-react";
import BlockContainer from "shared/ui/BlockContainer/BlockContainer";
import InfoAccordion from "shared/ui/InfoAccordion/InfoAccordion";
import {useParams} from "react-router";
import pageStore from "entities/page/store/pageStore";

const UniversalPage = observer(() => {

    const {currentPage, isLoading} = pageStore;
    const {name} = useParams()

    useEffect(() => {
        if (!isLoading && name) {
            pageStore.changeCurrentPage(name)
            console.log(JSON.stringify(pageStore.currentPage))
        }
    }, [isLoading, name]);


    return (
        <>
            {isLoading ?
                <LoadingSpinner spinnerWidth={"100px"} spinnerHeight={"100px"} padding={"30%"}/>
                :
                <>
                    <PageHead title={currentPage?.title} imgId={currentPage?.titleImage?.id}/>
                    <BlockContainer>
                        {currentPage?.textBlocks &&
                            <TextBlocks textBlocks={currentPage?.textBlocks}/>
                        }

                        {currentPage?.accordionElements &&
                            currentPage?.accordionElements.map(item => (
                                <InfoAccordion item={item}/>
                            ))
                        }
                    </BlockContainer>
                </>
            }
        </>
    );
});

export default UniversalPage;