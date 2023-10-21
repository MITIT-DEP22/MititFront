import {Image} from "../../image";

export type ButtonDescription = {
    href: string,
    text: string
}
export type SliderItem = {
    id:number;
    image: Image,
    mobileImage?: Image,
    title?: string,
    text?: string,
    descriptionButton?: ButtonDescription
}

