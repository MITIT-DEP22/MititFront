export type TextBlock = {
    title?: string;
    textContent?: string[];
    images?: Image[];
    lists?: List[];
    tables?: Table[];
}

export type List = {
    title: string;
    items: string[];
}
export type Table = {
    headers: string[];
    rows: Row[]
}

export type Row = {
    value: string[]
}

export type Image = {
    href: string;
}