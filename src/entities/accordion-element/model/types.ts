import {TextBlock} from "../../text-block";

export type AccordionElement = {
    type: string;
    id: number;
    title: string;
    textBlocks: TextBlock[]
    orderNumber: number;
}