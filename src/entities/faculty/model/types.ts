import {Superior} from "../../superior";
import {Department} from "../../department";
import {TextBlock} from "../../text-block";
import {Image} from "../../image";
import {Speciality} from "../../speciality";

export type Faculty = {
    id:number;
    title: string;
    headerImage:Image;
    description: string;
    superiors: Superior[];
    branches:string[];
    specialties:Speciality[];
    departments:Department[];
    textBlocks?:TextBlock[];
}

