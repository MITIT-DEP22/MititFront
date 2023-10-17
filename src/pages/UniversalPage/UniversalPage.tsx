import React, {useEffect} from 'react';
import {PageHead} from "shared/ui/PageHead";
import TextBlocks from "shared/ui/TextBlocks/TextBlocks";
import pageStore from "./model/pageStore";
import LoadingSpinner from "shared/ui/LoadingSpinner/LoadingSpinner";
import {observer} from "mobx-react";
import BlockContainer from "shared/ui/BlockContainer/BlockContainer";
import InfoAccordion from "shared/ui/InfoAccordion/InfoAccordion";
import {useLocation} from "react-router-dom";

const UniversalPage = observer(() => {
    const {pathname} = useLocation()
    const {isLoading, page} = pageStore;
    useEffect(() => {
        pageStore.getPageLocal(pathname)
    }, [pathname]);


    return (
        <>
            {isLoading ? <LoadingSpinner/> :
                <>
                    <PageHead title={page.title} imgId={0}/>
                    <BlockContainer>
                        {page.textBlocks &&
                            <TextBlocks textBlocks={page.textBlocks}/>
                        }

                        {page.accordionElements &&
                            page.accordionElements.map(item => (
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