import {RouterNames} from "../../../../shared/enums/RouterNames";

export type SubLink = {
    id:number;
    title:string;
    to:RouterNames;
}

export type NavLink = {
    title:string;
    subLinks:SubLink[];
    to:RouterNames;
}