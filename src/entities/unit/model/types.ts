import {Superior} from "../../superior";
import {TextBlock} from "../../text-block";

export type Unit = {
    id: number;
    headerImg: string;
    title: string;
    superior: Superior;
    titleTextBlock?:TextBlock;
    textBlocks?: TextBlock[];
}