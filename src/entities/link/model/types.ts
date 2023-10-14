import {RouterNames} from "shared/enums/RouterNames";

export type NavLink = {
    id: number;
    title: string;
    to: RouterNames;
    sublinks: NavLink[]
}

