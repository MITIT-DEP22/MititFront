import React, {useEffect} from 'react';
import {PageHead} from "widgets/PageHead";
import TextBlocks from "shared/ui/TextBlocks/TextBlocks";
import LoadingSpinner from "shared/ui/LoadingSpinner/LoadingSpinner";
import {observer} from "mobx-react";
import BlockContainer from "shared/ui/BlockContainer/BlockContainer";
import InfoAccordion from "shared/ui/InfoAccordion/InfoAccordion";
import {useParams} from "react-router";
import pageStore from "../../entities/page/store/pageStore";
import {cooperationPage} from "../../shared/data/dump-data/cooperationPage";

const UniversalPage = observer(() => {

    const {currentPage, isLoading} = pageStore;
    const {name} = useParams()


    useEffect(() => {
        if (!isLoading && name) {
            pageStore.changeCurrentPage(name)
        }
    }, [isLoading, name]);


    return (
        <>
            {isLoading ?
                <LoadingSpinner spinnerWidth={"100px"} spinnerHeight={"100px"} padding={"30%"}/>
                :
                <>
                    {currentPage?.titleImage?.id &&
                        <PageHead title={currentPage?.title} imgId={currentPage?.titleImage?.id}/>
                    }
                    <BlockContainer>
                        {currentPage?.textBlocks &&
                            <TextBlocks textBlocks={currentPage?.textBlocks}/>
                        }
                        {currentPage?.accordionElements &&
                            currentPage?.accordionElements.map(item => (
                                <InfoAccordion key={`accordion_item_${item.id}`} item={item}/>
                            ))
                        }
                    </BlockContainer>
                </>
            }
        </>
    );
});

export default UniversalPage;