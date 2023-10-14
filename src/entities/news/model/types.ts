import {Image} from "../../image";

export type News = {
    id: number;
    title: string;
    titleImage:Image;
    img: Image[];
    content: string;
    createdAt: string;
}