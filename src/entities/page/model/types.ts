import {Image} from "../../image";
import {TextBlock} from "../../text-block";
import {AccordionElement} from "../../accordion-element";

export type Page = {
    id:number;
    name: string;
    titleImage: Image;
    title: string;
    textBlocks: TextBlock[];
    accordionElements: AccordionElement[];
}