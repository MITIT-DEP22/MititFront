import {Image} from "../../image";

export type TextBlock = {
    title?: string;
    textContent?: string[];
    images?: Image[];
    uLists?: List[];
    oLists?: List[];
    tables?: Table[];
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
    value:  string[]
}
