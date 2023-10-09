import {RouterNames} from "../../../shared/enums/RouterNames";

export type NavLink = {
    title: string;
    to: RouterNames;
    sublinks: NavLink[]
}

