import {Image} from "../../image";
import {Superior} from "../../superior";


export type TextBlock = {
    title?: string;
    textContent?: string;
    uList?: List;
    oList?: List;
    images?: Image[];
    table?: Table;
    imageTextRow?: ImageTextRow;
    superior?: Superior;
    orderNumber: number;
    isFromAccordion: boolean;
    fileElement: FileElement;
    type: string;
    id?: number;
}

export type ImageTextRow = {
    image: Image;
    text: string;
    imgLeft: boolean;
}

export type List = {
    title: string;
    items: string[];
}
export type Table = {
    headers: string[];
    rows: Row[];
}

export type Row = {
    elements: RowElement[]
}

export type RowElement = {
    value: string[]
}

export type FileElement = {
    id: number;
    title?: string;
    image: Image;
    fileId:number;
}