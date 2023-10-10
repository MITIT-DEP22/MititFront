import {Superior} from "../../superior";
import {TextBlock} from "../../text-block";

export type Department = {
    title:string;
    description:string;
    superior:Superior;
    textBlocks?:TextBlock[]
}