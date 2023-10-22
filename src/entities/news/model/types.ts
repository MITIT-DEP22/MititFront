import {Image} from "../../image";

export type News = {
    id: number;
    title: string;
    titleImage:Image;
    images: Image[];
    contents: string[];
    createdAt: string;
}