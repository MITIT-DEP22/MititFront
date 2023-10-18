import {Page} from "../../entities/page";
import {RouterNames} from "../enums/RouterNames";
import {Image} from "../../entities/image";
import {List} from "../../entities/text-block";
import {ImageTextRow} from "../../entities/text-block/model/types";

export const contactsPage: Page = {
    name: RouterNames.CONTACTS.name,
    title: "контакти",
    titleImage: {id: 1} as Image,
    textBlocks: [
        {
            title: "Гаряча лінія",
            textContent: [
                "<h1><strong>Телефон/факс (черговий Військового інституту):</strong> (044) 290-41-48, в мережі ЗСУ:442-00</h1>"
            ],
            uLists: [
                {
                    items: [
                        "Заступник начальника: (044) 256-23-08\n",
                        "Заступник начальника інституту з навчальної роботи: (044) 290-41-64\n",
                        "Заступник начальника інституту з наукової роботи: (044) 290-40-30\n",
                        "Начальник факультету телекомунікаційних систем: (044) 256-22-21\n",
                        "Начальник факультету інформаційних технологій: (044) 256-22-35\n",
                        "Начальник факультету бойового застосування систем управління та зв'язку: (044) 256-23-37\n",
                        "Начальник кафедри військової підготовки: (044) 290-40-33\n",
                        "Начальник навчального відділу: (044) 290-40-37\n",
                        "Начальник відділу особового складу та стройового: (044) 290-40-17"
                    ]
                } as List
            ]
        },
        {
            textContent: [
                "<h1><strong>Телефони Приймальної комісії:</strong> (044) 290-41-56, (044) 290-41-64</h1>"
            ],
            uLists: [
                {
                    items: [
                        "Відповідальний секретар Приймальної комісії: капітан<strong> РИЖИЙ Іван Миколайович:</strong> (067) 676-87-64, в мережі ЗСУ: 442-80\n",
                        "Заступник голови Приймальної комісії: полковник <strong>СІЛКО Олексій Вікторович:</strong> (093) 947-37-17, (067) 507-03-55, в мережі ЗСУ: 442-93"
                    ]
                } as List
            ]
        },

        {
            title: "Адреса",
            imageTextRows: [
                {
                    image: {id: 1} as Image,
                    text: `
                       <span> 01011, м. Київ, вул. Московська, 45/1</span>
                        <br>
                        <strong>Електронна пошта:</strong>
                        <ul>
                         <li>
                             viti@viti.edu.ua
                          </li>
                         <li>
                         viti@post.mil.gov.ua
                         </li>
                         </ul>
                        <br>
                         <strong>Електронна пошта питання щодо вступу: </strong>
                        <ul>
                        <li>
                                            vitivstup@viti.edu.ua
                        </li>
                        <li> vitiinfo@post.mil.gov.ua</li>
                        <li>vitivstup@ukr.net</li>
                        </ul>
                        <br>
                        
                                            <strong>Електронна пошта в мережі ЗСУ: </strong>
                        <ul>
                        <li> viti@dod.ua</li>
                        </ul>
                       <br>
                       <h1>Як дібратися?</h1>
                       <ul><li>Залізничний вокзал Київ-Пасажирський, метро “Вокзальна”, їхати до станції метро “Театральна”, 
перехід на станцію метро “Золоті ворота”, їхати до станції метро “Печерська”</li></ul>
                    `,
                    imgLeft: true
                } as ImageTextRow
            ]
        }
    ]
}