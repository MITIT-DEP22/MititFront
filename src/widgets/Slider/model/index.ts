export interface IButtonDescription {
    href: string,
    text: string
}
export interface ISliderItem {
    imageSrc: string,
    title?: string,
    text?: string,
    descriptionButton?: IButtonDescription
}

export const sliderItems: ISliderItem[] = [
    {
        imageSrc: require("../../../assets/slider/slider-image-1.png"),
        title: "Вступай до ВІТІ!",
        text: "Мрієш стати професіоналом військової справи?"
    },
    {
        imageSrc: require("../../../assets/slider/slider-image-2.png"),
        title: "Начальник інформаційно-телекомунікаційного вузла",
        text: "Військова професія",
        descriptionButton: {
            href: "/",
            text: "ДЕТАЛЬНІШЕ"
        }
    },

]