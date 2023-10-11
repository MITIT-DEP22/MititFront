export type TextBlock = {
    title?:string;
    content?:string[];
    images?:Image[];
    lists?:List[];
}

export type List = {
    title:string;
    items:string[];
}

export type Image = {
    href:string;
}