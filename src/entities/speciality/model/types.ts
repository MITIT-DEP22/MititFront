import {Image} from "../../image";

export type Speciality = {
    id?:number;
    content:string;
    title:string;
    description:string;
    images:Image[];
    titleImage:Image;
}
