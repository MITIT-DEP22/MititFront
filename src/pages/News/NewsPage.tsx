import React from 'react';
import {PageHead} from "shared/ui/PageHead";
import {NewsBlock} from "widgets/NewsBlock";
import {observer} from "mobx-react";
import $api from "shared/api";
import {TextBlock} from "entities/text-block";
import {AccordionElement} from "entities/entrance";
import {Page} from "entities/page";
import {superiorsPage} from "../../shared/data/institute/superiorsPage";
import {entrancesPage} from "../../shared/data/entrancePage";
import {educationsPage} from "../../shared/data/educationPage";
import {publicInfoPage} from "../../shared/data/institute/publicInfoPage";
import {sciencesPage} from "../../shared/data/sciencePage";
import {contactsPage} from "../../shared/data/contactsPage";
import {heroesPage} from "../../shared/data/institute/heroesPage";
import {historyPage} from "../../shared/data/institute/historyPage";
import {whyMITITPage} from "../../shared/data/institute/whyMITITPage";
import {unit1Page} from "../../shared/data/units/unit1";
import {unit2Page} from "../../shared/data/units/unit2";
import {unit3Page} from "../../shared/data/units/unit3";
import {faculty1Page} from "../../shared/data/faculties/faculty1Page";
import {faculty2Page} from "../../shared/data/faculties/faculty2Page";
import {faculty3Page} from "../../shared/data/faculties/faculty3Page";
import {department1Page} from "../../shared/data/departments/department1Page";
import {department6Page} from "../../shared/data/departments/department6Page";
import {department5Page} from "../../shared/data/departments/department5Page";
import {department4Page} from "../../shared/data/departments/department4Page";
import {department3Page} from "../../shared/data/departments/department3Page";
import {department2Page} from "../../shared/data/departments/department2Page";
import {cooperationPage} from "../../shared/data/cooperationPage";
import {homeSliders} from "../../shared/data/homeSliders";

const NewsPage = observer(() => {

    const sendAllPages = () => {
        sendPage(superiorsPage).then(() => {
            sendPage(entrancesPage).then(() => {
                sendPage(educationsPage).then(() => {
                    sendPage(publicInfoPage).then(() => {
                        sendPage(sciencesPage).then(() => {
                            sendPage(contactsPage).then(() => {
                                sendPage(heroesPage).then(() => {
                                    sendPage(historyPage).then(() => {
                                        sendPage(whyMITITPage).then(() => {
                                            sendPage(unit1Page).then(() => {
                                                sendPage(unit2Page).then(() => {
                                                    sendPage(unit3Page).then(() => {
                                                        sendPage(faculty1Page).then(() => {
                                                            sendPage(faculty2Page).then(() => {
                                                                sendPage(faculty3Page).then(() => {
                                                                    sendPage(department1Page).then(() => {
                                                                        sendPage(department2Page).then(() => {
                                                                            sendPage(department3Page).then(() => {
                                                                                sendPage(department4Page).then(() => {
                                                                                    sendPage(department5Page).then(() => {
                                                                                        sendPage(department6Page).then(() => {
                                                                                            sendPage(cooperationPage)
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }

    const counter = 0;
    const sendSliders = (index: number) => {
        $api.post("/slider-items", {
            title: homeSliders[index].title,
            text: homeSliders[index].text,
            imageId: homeSliders[index].image.id,
            mobileImageId: homeSliders[index].mobileImage?.id,
            sliderDescriptionButton: {
                href: "",
                text: ""
            }
        }).then(res => {
            console.log(res)
            homeSliders[index++] && sendSliders(index)
        }).catch(e => {
            console.log(e)
        })
    }

    const sendPage = async (page: Page) => {
        try {
            const [accordionElementIdList, textBlockIdList] = await Promise.all([
                page.accordionElements && sendAccordions(page.accordionElements),
                page.textBlocks && sendTextBlocks(page.textBlocks),
            ]);

            const response = await $api.post("/pages", {
                title: page.title,
                name: page.name,
                titleImageId: page.titleImage.id,
                textBlockIdList,
                accordionElementIdList,
            });

            console.log(response.data);
        } catch (error: any) {
            console.error(`Произошла ошибка: ${error.message}`);
        }
        return
    }

    const sendAccordions = async (accordionElements: AccordionElement[]) => {
        const promises = accordionElements.map(async (accordionElement) => {
            const textBlockIdList = await sendTextBlocks(accordionElement.textBlocks);
            const response = await $api.post("/accordion-elements", {
                title: accordionElement.title,
                textBlockIdList,
            });
            return response.data.id;
        });

        return Promise.all(promises);
    }

    const sendTextBlocks = async (textBlocks: TextBlock[]) => {
        const promises = textBlocks.map(async (textBlock) => {
            const response = await $api.post("/text-blocks", {
                jsonContent: JSON.stringify(textBlock),
            });
            return response.data.id;
        });

        return Promise.all(promises);
    }

    return (
        <>
            <PageHead title={"Новини"} imgId={16245}/>
            <NewsBlock/>
            {/*<button onClick={() => {*/}
            {/*    sendAllPages()*/}
            {/*}}>sendPage*/}
            {/*</button>*/}

            {/*<button onClick={() => {*/}
            {/*    sendSliders(counter)*/}
            {/*}}>sendSliders*/}
            {/*</button>*/}
        </>
    );
});

export default NewsPage
