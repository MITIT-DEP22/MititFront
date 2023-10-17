import {Image} from "../../../entities/image";
import {TextBlock} from "../../../entities/text-block";
import {AccordionElement} from "../../../entities/entrance";

export type Page = {
    titleImage: Image;
    title:string;
    textBlocks?: TextBlock[];
    accordionElements?:AccordionElement[];
}