import {Image} from "../../image";

export type TextBlock = {
    title?: string;
    textContent?: string[];
    uLists?: List[];
    oLists?: List[];
    images?: Image[];
    tables?: Table[];
    imageTextRows?: ImageTextRow[];
}

export type ImageTextRow = {
    image: Image;
    text: string;
    imgLeft:boolean;
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
