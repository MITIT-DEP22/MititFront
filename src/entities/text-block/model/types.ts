import {Image} from "../../image";
import {Superior} from "../../superior";

export type TextBlock = {
    id:number;
    title?: string;
    textContent?: string[];
    uLists?: List[];
    oLists?: List[];
    images?: Image[];
    tables?: Table[];
    imageTextRows?: ImageTextRow[];
    superiors?:Superior[];
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
