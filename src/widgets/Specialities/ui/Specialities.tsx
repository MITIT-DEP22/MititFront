import React from 'react';
import css from "./Specialities.module.scss"
import SpecialityCard from "./SpecialityCard/SpecialityCard";

const specialities = [
    {
        id:1,
        title: "Компʼютерні науки",
        description: "Математичне, інформаційне і програмне забезпечення військових інформаційних систем",
        img: "https://s3-alpha-sig.figma.com/img/872d/1581/ba566447d55540cd16a76b5e37b736ea?Expires=1697414400&Signature=R4f~npAQ91w-i5aJnuRbNs7Id4ks1aTxabQQu8PxopwZJORSfkyY5piwKsAVgnxa9gC0ZyUbZ-W3FKBOOm44DcIvvZC3kwzJIFw-4NNeeu5628d2nWcWElZ~XipuKW4pUE9Xjr5-03tzmdJR9OZU54C4wPyfcEvQOqQMYarhDfORKKZZ3Zp9lCLa7H7r7T3fLnKezWdMdxREeImadc56NgrmLTnXhntXahIeEU1-tcfglLvcUXXd25mGRQ~hs9aOYj3MlUHKo54Zz8INWxZMR4i4MTA7J3aFGzt4GZW3Ew7a0gXWNHTR8NsdP5CSqoTMJ-DN8-tYGenKofF1JSqv~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
        id:2,
        title: "Кібербезпека",
        description: "Захист інформації та кібернетична безпека в інформаційно-телекомунікаційних системах",
        img: "https://s3-alpha-sig.figma.com/img/230e/c621/5c2b1e70f9c079897ac85569209bc2d1?Expires=1697414400&Signature=nBxni50cq4~IKNzG3V~yEq4uTZp7J3b4RYzurw9fJhCFiy9H5ohBX7ZeNwC8fYPTNfELvtPdk~8Z1Za~rxv2A-so13ew6ZvhJsnqJ5NIdA5T17SkaQY1EDPC1iGtbknDgW5wzXUgIROB7rikdj8QDJEf~c3kXU9Khc1jSy-AJpQPCMSj4GDcwu29S0C7D6XnlZeYORaEOnEfsMJXUe1n3-UPxRNXHaMdH1DgP32Gtl6H0Q~iIZux4lkcgvf93OdQcdFkAJXvtUvh~xyHo9~qxojMGnloXrNZnNIM0L4UNYKtzoJmSva2dXTD6pSOqMHZb4AkE2meFM-iAR6OK7DZhw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
        id:3,
        title: "Інформаційні системи та технології",
        description: "Автоматизовані системи управління військами та озброєнням",
        img: "https://s3-alpha-sig.figma.com/img/44d7/6628/dac4df6e02cfe3c234d636fc5ccfb9c6?Expires=1697414400&Signature=Q3rhmu09HORXmXDRTfU5KkcWpAhD0-1kVe0ruZznqkRw9OGBu~eOR1ZwzTJ-7~9-HGLKy5w0lw7Ulj40Bwa~ZxebmUsqfJjKMNJaMSHvB6x4N33GEsFwF~BMIiqiRsIFnYA4E7dv9DbdhEPysgCz747J4RuRXfqARl1zqigcYS-l6ohDhpc6Osxpj4KX7fMi1yYAZ879exsw0xV4PVjN6h9KXpS0-c1B3y3mpwS3hBB9pZ6VbKYWP1ohLHFs2C3ktcctm5DA6qNPsK3V2nT~VQjdV6l-uykb0qRbkIntJsj96kPD1P8Q~heGZpVjpXGY76S6XRkB~q~HdyDDPt9YtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
        id:4,
        title: "Телекомунікації та радіотехніка",
        description: "Системи військового зв’язку",
        img: "https://s3-alpha-sig.figma.com/img/4485/f273/952456206e3a11ce804bfa90df14403c?Expires=1697414400&Signature=Qu4Yf41E1TNVl6gMiMohXLPO4IivMWJQw3kNqPcWfiHh7TIIeml1mUkSykEuN20RRSOLvpdx96a0UGrmEVT-UkcOWVwTVTS6y0HpnQvWxPsmorujOlvdL22cUSJhevWrrBc-KkWUED19kxD0ErF4dLyun9MZeRxbtcAZle4~VitW1X8ikUlWg0WJPfsyyH4u5vh98eo5R0Nfgp4ls7SfyTZ8gUaVew39EwubwDD7pjbbmANtcwe7tcIGqWOV0g5Jj4WluEga-VvufhJURRKsm4077Z6JZU12lTimOCjxsJopNu6Yek0ObQzGL9S4hMW2PhjSyWgZHPtVd8t42UXicA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
        id:5,
        title: "Військове управління (за видами збройних сил)",
        description: "Управління діями підрозділів зв’язку",
        img: "https://s3-alpha-sig.figma.com/img/c6c7/0f6f/45e872c77f14262b1ab05746a879ae1e?Expires=1697414400&Signature=Wkn0KY3iREX4fPci5xIwJTIo-1WcHC23xxG7oNNPTwDRcWU9ZTTxfrxJgN8g3QZgvg~t6okWqcgIGs1O5NnyzLnymheKX3~7Qi~eEPL9Wqj4rL49Q4OWEqK8L5arMBXOVY3DbSXy~iqH-tsNWMbzHX588FUgoE8v9bDz4PbXrIMIJhvugb4SweoO9l9~iW2V8672AzXUUahPVf~buQpFKh4k02mT21rNYqWSdQCcpNKwCIPpyGXkeCApseR6p39ei7vdq11hQtAjBy~T2dVo2CQW0yMXwK9EBLCS8EkDUYoVzH6~cZy7E57hrkqdkPb0CAqnaA~ucUUcElhoMWg0Lw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
        id:6,
        title: "Озброєння та військова техніка",
        description: "Радіоелектронні інформаційні системи, оперативна техніка та спецозброєння",
        img: "https://s3-alpha-sig.figma.com/img/1430/f69b/57ace4a443a465d73ef4c0a10a3293bd?Expires=1697414400&Signature=Uajzzu1gSbaJCe4mb6-0cjE297DvBms0cN6fUEHVE5DvZ5gLqP2sGRd886kiBsq6f7DXHZf~ocqc902MhpGGCUetKwA5~69s1sUXWJQxcT7gxXeqQ~2L9OT6ZZNKMpKUlet3a4lC0Msmz2xRVwrc-PtQkwEvFmbHBvl9evF7BUnfJTJjglrAz5my0X2K7dMMkb1uS4wU5qzgAcmKUyQ~6ogegR7ljGv2z2kGkwYXIaOw1u~CKTEoeDf~UNQcMFfYNxnIBC9HP8LRXewJGjRy~CxCYD~BjFcDzUsYQKXUdW9LiyLlMDhexma-Irdo9r5PZEiU3O9HsSjTRzmnsR8JXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },

]

export const Specialities = () => {
    return (
        <div className={css.container}>
            {specialities.map(item=>(
                <SpecialityCard id={item.id} title={item.title} description={item.description} img={item.img}/>
            ))}
        </div>
    );
};
