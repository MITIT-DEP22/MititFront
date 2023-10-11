import {Superior} from "../../superior";
import {Department} from "../../department";
import {TextBlock} from "../../text-block";

export type Faculty = {
    id:number;
    title: string;
    headerImg:string;
    description: string;
    superiors: Superior[];
    branches:string[];
    specialities:string[];
    departments:Department[];
    textBlocks?:TextBlock[];
}

