import {Month} from "shared/enums/Month";

export function formatDate(date: string) {
    if (date) {
        let temp = date?.split('-')
        return `${temp[2].split("T")[0]} ${Month[Number(temp[1])]} ${temp[0]}`
    } else {
        return ""
    }

}