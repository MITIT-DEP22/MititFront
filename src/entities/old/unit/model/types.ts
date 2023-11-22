import {Superior} from "../../../superior";
import {Image} from "../../../image";
import {TextBlock} from "../../../text-block";

export type Unit = {
    id: number;
    headerImg: Image;
    title: string;
    superior: Superior;
    titleTextBlock?:TextBlock;
    textBlocks?: TextBlock[];
}