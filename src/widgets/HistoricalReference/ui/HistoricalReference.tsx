import {observer} from "mobx-react";
import css from "./HistoricalReference.module.scss";
import HistoryCard from "./HistoryCard/HistoryCard";
import {historyCardItems} from '../model/model'
import MiddleHistoryBlock from "./MiddleHistoryBlock/MiddleHistoryBlock";
import DecreeBlock from "./DecreeBlock/DecreeBlock";


const firstTextBlock = [
    'Постановою Кабінету Міністрів України від 19 серпня 1992 року №490 було створено Київській військовий інститут управління і зв’язку на базі Київського вищого військового двічі Червонопрапорного інженерного училища зв’язку ім. М. І. Калініна і Київського вищого інженерного радіотехнічного училища ППО імені маршала авіації О. І. Покришкіна.',
    'Згідно Указу Президента України від 30.10. 2000 р. №1173/2000 «Про впорядкування присвоєння почесних найменувань військовим частинам та установам» та наказу начальника інституту (по стройовій частині) від 13.02.2001 р. №30 Київський військовий інститут управління і зв’язку перейменований в Київський військовий двічі орденів Червоного Прапора інститут управління і зв’язку.',
    'Постановою Кабінету Міністрів України від 22 березня 2001 року №269, Директивою Міністра оборони України від 11.06.01.№Д-115/1/3280, наказом Начальника ГШ ЗС України від 18.07.01 №28 було створено Військовий двічі орденів Червоного прапору інститут телекомунікацій та інформатизації Національного технічного університету України «Київський політехнічний інститут».',
    'Згідно розпорядження Кабінету Міністрів України від 26 червня 2013 року № 509-р, спільної директиви Міністерства оборони України та Генерального штабу ЗС України від 01.07.13 №Д-322/1/02 було змінено назву Військового інституту телекомунікацій та інформатизації Національного технічного університету України «Київський політехнічний інститут» на Військовий інститут телекомунікацій та інформатизації Державного університету телекомунікацій',
    'Постановою Кабінету Міністрів України від 30 січня 2015 року №94, спільною директивою Міністерства оборони України та Генерального штабу Збройних Сил України від 01.04.15 року №Д-322/1/11ДСК було змінено назву Військовий інститут телекомунікацій та інформатизації Державного університету телекомунікацій на Військовий інститут телекомунікацій та інформатизації.'
]

const secondTextBlock = 'Відповідний Указ Глава держави  підписав під час відвідування інституту на урочистостях у' +
    ' присутності всього особового складу.';
const thirdTextBlock = 'Згідно наказу начальника Військового інституту телекомунікацій та інформатизації імені Героїв Крут від 17.01.2019 року №31 та листа від Української ' +
    'інституту національної пам’яті №91/42-06-19 від 17.01.2019 року Днем створення інституту встановлено 29 січня 1918 року.';
const firstImgArray = [
    'https://s3-alpha-sig.figma.com/img/cf5f/aacf/bc9a664724cdd38bc1d82280ae5c58ee?Expires=1697414400&Signature=cOVNH7~F-oZNqAEHS9XWYAc6gcZaAV-j6ns6JtytU4QYUtH5IDi1nf7gLZKYzE55J4ISJ330unYz-qNSBBnpv0-b8aly~kNMRrWpA99neqCpyLWKGpzLZXzgVi6GP-kieK3IGc8qGAvsxznryQKwVXDSC7FUcZ1jsD9XK2KOjQwqDfp3k~B7d61kZ4ec5V-9Tdcm6vEDL4LDkE509D0bJAtmb~lkTsDolsYvhyxzwjgDWcTU6KLNG46kt-9M8eOLhIff0NO0irhi7iBDHkzA8w0mpVgU26qcyka3kSP8rQEEsLrSi1U-GxU8nxEJ~sArV86V5GtfjatLsqeTzxHrGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    'https://s3-alpha-sig.figma.com/img/5703/31f6/8054a5491db188cc21f3009f29a79dbd?Expires=1697414400&Signature=R-7egLkk3DkKZOpqn5v8q0sqtm8eCk9K588v0u-X4Tz33XgQxAO8bPwA0WitayNoOxV1k1jZhCFZcFQ0WQyED9oqCFf8f9g7Pg~sCgUMB0K6HGg2aJaZLewVIc8YXghApEeVMMGojlR1jVolOs2bmYs12Twqa1sszeyf1XhGEJYBAEiSxofDC9fYJE~4zJlOqwjVZY9OFH6U~slVY4gS0kwtEGov8jYQ7-1mwiEBBFBY2zyaGyZO~4tjysKHc3~GZpsf~wZKMtTqD72TrKAV5GfynFOwU82jI1FhTbKEYkYtoxWtQwWRwhWperSC1a9yKZr8YPixX7WvPZc2xoRIcA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
]
const secondImgArray = [
    'https://s3-alpha-sig.figma.com/img/7dc2/f55e/1cf1c37a70590d3a7366d30b98dcd331?Expires=1697414400&Signature=ekdsFtgacmLKI0UeDqX60wG8oVkU2Yr8vTrS86AVOCF4G4gime8dh-lMONS7W00xswa5eJJEp9QHq~0r8L0hneyS-ioghtkIG~R2w7sL6J-YAOY~WaSnuENRAVk2l3Z7OEunbfk5BhLbtoYupcWqBgaxu2rzOhAyVoMPNSyNhMPY3R1k~OEPa-P-p4I4q7lYiTHhw-vV6fSOQYYhcarZ7ghA8Ym2BrpCWfHPSb79N81rRrL9KeYac7Z9k7A7JqMOR20J3EHF2UCZynYDj5BZ3EWni4e5C~-UwUbPC0cMdxcQ7nxhQKlvRgrycB6OpVdN6vkdvWbER-zYrs2P8OFC1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    'https://s3-alpha-sig.figma.com/img/71f5/33fb/0105e4efb39d3f8db14b4d4150f84211?Expires=1697414400&Signature=qTqlcJFiYurgFNwMtssnEFFhyeKtI0iDKNgEGnocHovSA3YzME3H9zOWoqdblOtGZsUxncTbzxlL5lwUKUjBYndgil7Z~ECODtzWaH0CgdqibJGydxZgxbY2cZwLVOP51iQyycSd9-AkNi~USOvu1iKs5WTiEORc-zncSCrs1wyB2EG5Rq-bgOyeBwQs-fCa7lAq6TLcde94ak~vAEF5FutK87SZLS~c~ieISpISe8e0y2qIpgsDDVlaFWhtalYgqRPW2ndxJDFvGUHDts~LSL-LN09hW5OUV2QwcjrjMpiTYthBl6iZR4Ahe3rD7IQ9iu1Op3a~2Hy5uPIeuw8DAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
]

export const HistoricalReference = observer(() => {
    return (
        <div className={css.historyContainer}>
            <DecreeBlock array={firstTextBlock}/>
            {historyCardItems.map((item, index) => (
                index === 2 ?
                    <MiddleHistoryBlock text={secondTextBlock} array={firstImgArray}/>
                    :
                    index % 2 ?
                        <HistoryCard key={index} imgSource={item.imageSrc} value={item.text} positionRight={false}/>
                        :
                        <HistoryCard key={index} imgSource={item.imageSrc} value={item.text} positionRight={true}/>
            ))}
            <HistoryCard imgSource={historyCardItems[2].imageSrc} value={historyCardItems[2].text}
                         positionRight={true}/>
            <MiddleHistoryBlock text={thirdTextBlock} array={secondImgArray}/>
        </div>
    )
})