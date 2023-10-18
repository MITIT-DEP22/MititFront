import React from 'react';
import {PageHead} from "shared/ui/PageHead";
import {NewsBlock} from "widgets/NewsBlock";
import {observer} from "mobx-react";
import $api from "shared/api";
import {TextBlock} from "../../entities/text-block";
import {AccordionElement} from "../../entities/entrance";
import {Page} from "../../entities/page";
import {department3Page} from "../../shared/data/departments/department3Page";
import {department4Page} from "../../shared/data/departments/department4Page";
import {department5Page} from "../../shared/data/departments/department5Page";
import {department6Page} from "../../shared/data/departments/department6Page";
import {faculty2Page} from "../../shared/data/faculties/faculty2Page";
import {contactsPage} from "../../shared/data/contactsPage";

const NewsPage = observer(() => {

    const sendAllPages = () => {
        // sendPage(superiorsPage).then(() => {
        //     sendPage(entrancesPage).then(() => {
        //         sendPage(educationsPage).then(() => {
        //             sendPage(publicInfoPage).then(() => {
        //                 sendPage(sciencesPage)
        //             })
        //         })
        //     })
        // })
        // sendPage(secondFacultyPage)
        // sendPage(contactsPage)
        // sendPage(department2Page)
        // sendPage(department3Page)
        sendPage(department4Page).then(()=>{
            sendPage(department5Page).then(()=>{
                sendPage(department6Page)
            })
        })
    }

    const sendPage = async (page: Page) => {
        try {
            const [accordionElementIdList, textBlockIdList] = await Promise.all([
                page.accordionElements && sendAccordions(page.accordionElements),
                page.textBlocks && sendTextBlocks(page.textBlocks),
            ]);

            // Отправляем запрос на создание страницы с полученными ID
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
            <PageHead title={"Новини"} imgId={153}/>
            <NewsBlock/>

            <button onClick={() => {
                sendAllPages()
            }}>sendPage
            </button>

        </>
    );
});

export default NewsPage
