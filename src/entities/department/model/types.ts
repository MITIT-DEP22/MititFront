import {Superior} from "../../superior";
import {TextBlock} from "../../text-block";

export type Department = {
    id:number;
    headerImg: string;
    titleTextBlock?:TextBlock;
    title: string;
    description: string;
    superior: Superior;
    textBlocks?: TextBlock[]
}