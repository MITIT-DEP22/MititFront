import {Image} from "../../image";
import {TextBlock} from "../../text-block";
import {AccordionElement} from "../../entrance";

export type Page = {
    name:string;
    titleImage: Image;
    title:string;
    textBlocks?: TextBlock[];
    accordionElements?:AccordionElement[];
}