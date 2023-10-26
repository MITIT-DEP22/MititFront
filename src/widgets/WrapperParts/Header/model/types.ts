
export type SubLink = {
    titleUA:string;
    titleENG:string
    to:string;
    name:string;
}

export type NavLink = {
    titleUA:string;
    titleENG:string;
    subLinks:SubLink[];
    to:string;
    name:string;
}