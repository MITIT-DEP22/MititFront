import {Page} from "../model/types";
import {TextBlock} from "../../text-block";
import {AccordionElement} from "../../accordion-element";

const ConvertJSONtoTextBlocks = async (data: any) => {
    let page = {} as Page;
    page.id = data.id
    page.title = data.title;
    page.name = data.name;
    page.titleImage = data.titleImage;
    page.textBlocks = [];
    for (let i = 0; i < data.textBlocks.length; i++) {
        page.textBlocks.push(JSON.parse(data.textBlocks[i].jsonContent))
    }
    for (let i = 0; i < page.textBlocks.length; i++) {
        page.textBlocks[i].id = data.textBlocks[i].id;
        page.textBlocks[i].type = "TextBlock"
    }
    page.accordionElements = [];

    for (let i = 0; i < data.accordionElements.length; i++) {
        let accordionElement = {
            id: data.accordionElements[i].id,
            title: data.accordionElements[i].title,
            textBlocks: [] as TextBlock[],
            orderNumber: data.accordionElements[i].orderNumber,
            type:"Accordion"
        } as AccordionElement;

        for (let j = 0; j < data.accordionElements[i].textBlocks.length; j++) {
            accordionElement.textBlocks.push(JSON.parse(data.accordionElements[i].textBlocks[j].jsonContent));
            accordionElement.textBlocks[j].id = data.accordionElements[i].textBlocks[j].id;
            accordionElement.textBlocks[j].type = "TextBlock"
        }
        page.accordionElements.push(accordionElement);
    }
    return page;
}

export default ConvertJSONtoTextBlocks