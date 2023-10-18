import {RouterNames} from "shared/enums/RouterNames";
import {InstituteInfo} from "../model/types";
import {Image} from "../../image";

export const InstituteInfoCards = [
    {
        title: "Чому ВІТІ?",
        img: {
            id: 143,
            contentType: "",
            imageFilename: ""
        } as Image,
        link: RouterNames.WHY_MITIT.to
    } as InstituteInfo,

    {
        title: "Історична довідка",
        img: {
            id: 144,
            contentType: "",
            imageFilename: ""
        } as Image,
        link: RouterNames.HISTORY.to
    } as InstituteInfo,

    {
        title: "Керівний склад",
        img: {
            id: 145,
            contentType: "",
            imageFilename: ""
        } as Image,
        link: RouterNames.SUPERIORS.to
    } as InstituteInfo,
    {
        title: "Публічна інформація",
        img: {
            id: 146,
            contentType: "",
            imageFilename: ""
        } as Image,
        link: RouterNames.PUBLIC_INFO.to
    } as InstituteInfo,
    {
        title: "Герої не вмирають",
        img: {
            id: 147,
            contentType: "",
            imageFilename: ""
        } as Image,
        link: RouterNames.HEROES.to
    } as InstituteInfo,
]