import {Image} from "../../image";

export type ButtonDescription = {
    href: string,
    text: string
}
export type SliderItem = {
    img: Image,
    mobImg?: Image,
    title?: string,
    text?: string,
    descriptionButton?: ButtonDescription
}