
export type SubLink = {
    id:number;
    title:string;
    to:string;
}

export type NavLink = {
    title:string;
    subLinks:SubLink[];
    to:string;
}