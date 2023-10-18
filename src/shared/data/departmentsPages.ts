import {Page} from "../../entities/page";
import {Image} from "../../entities/image";
import {RouterNames} from "../enums/RouterNames";

export const department1Page: Page = {
    titleImage: {id: 1} as Image,
    title:"Кафедри",
    name:RouterNames.DEPARTMENT_1.name,
    textBlocks:[
        {
            title: "Кафедра загальної тактики",
        },
        {

        }
    ]
}