import {Superior} from "../../superior";
import {Department} from "../../department";
import {TextBlock} from "../../text-block";
import {Image} from "../../image";
import {Speciality} from "../../speciality";

export type Faculty = {
    id:number;
    title: string;
    headerImg:Image;
    description: string;
    superiors: Superior[];
    branches:string[];
    specialities:Speciality[];
    departments:Department[];
    textBlocks?:TextBlock[];
}

