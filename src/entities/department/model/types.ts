import {Superior} from "../../superior";
import {TextBlock} from "../../text-block";
import {Image} from "../../image";

export type Department = {
    id:number;
    headerImg: Image;
    titleTextBlock?:TextBlock;
    title: string;
    description: string;
    superior: Superior;
    textBlocks?: TextBlock[]
}