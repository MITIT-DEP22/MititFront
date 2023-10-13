import {RouterNames} from "./RouterNames";
import {NavLink} from "entities/link";
import {Faculty} from "entities/faculty";
import {Superior} from "entities/superior";
import {Department} from "entities/department";
import {Image, TextBlock, List} from "../../entities/text-block";
import {Row, RowElement, Table} from "entities/text-block/model/types";
import {Unit} from "entities/unit";
import {Entrance} from "../../entities/entrance";
import {WhyMITIT} from "../../entities/why_mitit";

export const instituteName = "ВІЙСЬКОВИЙ ІНСТИТУТ\nТЕЛЕКОМУНІКАЦІЙ ТА ІНФОРМАТИЗАЦІЇ\nІМЕНІ ГЕРОЇВ КРУТ"
export const upperTitle = "АКТУАЛЬНО: Набір на курси лідерства"

export const headerData = {
    linksT: [
        {id: 0, title: "Інститут", to: RouterNames.INSTITUTE},
        {id: 1, title: "Вступникам", to: RouterNames.ENTRANTS},
        {id: 2, title: "Навчання", to: RouterNames.STUDY},
        {id: 3, title: "Контакти", to: RouterNames.CONTACTS},
    ] as NavLink[],

    linksB: [
        {id: 4, title: "Новини", to: RouterNames.NEWS},
        {id: 5, title: "Наука", to: RouterNames.SCIENCE},
        {
            id: 6,
            title: "Факультети", to: RouterNames.FACULTY,
            sublinks: [
                {id: 7, title: "Факультет телекомунікаційних систем", to: RouterNames.FACULTY},
                {id: 8, title: "Факультет інформаційних технологій", to: RouterNames.FACULTY},
                {id: 9, title: "Факультет бойового застосування систем управління та звʼязку", to: RouterNames.FACULTY},
            ]
        },
        {
            title: "Кафедри", to: RouterNames.DEPARTMENT,
            sublinks: [
                {id: 10, title: "Кафедра загально-військових дисциплін", to: RouterNames.DEPARTMENT},
                {id: 11, title: "Кафедра іноземних мов", to: RouterNames.DEPARTMENT},
                {
                    id: 12,
                    title: "Кафедра фізичного виховання, спеціальної фізичної підготовки і спорту",
                    to: RouterNames.DEPARTMENT
                },
                {id: 13, title: "Кафедра військово-гуманітарних дисциплін", to: RouterNames.DEPARTMENT},
                {id: 14, title: "Кафедра математики та фізики", to: RouterNames.DEPARTMENT},
                {id: 15, title: "Кафедра військової підготовки", to: RouterNames.DEPARTMENT},
            ]
        },
        {
            id: 16,
            title: "Підрозіли", to: RouterNames.UNIT,
            sublinks: [
                {
                    id: 17, title: "Науковий центр зв’язку та інформатизації", to: RouterNames.UNIT
                },
                {
                    id: 18, title: "Батальйон забезпечення навчального процесу", to: RouterNames.UNIT
                },
                {
                    id: 19, title: "5-ті Курси перепідготовки та підвищення кваліфікації", to: RouterNames.UNIT
                },
            ]
        },
        {id: 20, title: "Співробітництво", to: RouterNames.COOPERATION},
        {id: 21, title: "Наші перемоги", to: RouterNames.OUR_WINS}
    ] as NavLink[],

    icons: [
        {iconBootstrap: "bi bi-instagram", height: 25, width: 25},
        {iconBootstrap: "bi bi-telegram", height: 25, width: 25},
        {iconBootstrap: "bi bi-facebook", height: 25, width: 25},
        {iconBootstrap: "bi bi-youtube", height: 25, width: 25},

        {iconBootstrap: "bi bi-tiktok", height: 25, width: 25}
    ]
}

export const faculties: Faculty[] = [
    {
        id: 7,
        title: "Факультет телекомунікаційних систем",
        headerImg: "https://s3-alpha-sig.figma.com/img/67a1/9317/ef1598cffaba0a5ce84bb6ec1cc39fa0?Expires=1698019200&Signature=Eb9Bp8GBbH4lc4FjPsuIyl6SK2uukB92c2lXOahwMAakB4oy94L-AvzmWuLhyG~0nr7ZW7Pyp3~FxF6zQa30hkMy99z0Q8wMic19OfsTFUyscsKNsozfwKSLkYTyDyYu5tWpuZ5NkFf2jNIL60MUbUxX3P7FLmCIPdLOz8CFQkhVhP2UiNPQmrmBCUc5DzOz74Yhq5-HRk9ER5USNyIgA5GecrwLghi4E839Fgd9pmRKbD7E4ZgGRwvQEvhnROS5g3vT--uSTCfIo3s4lLs3hCpy5vdr2cJVwWUr8T534pquiK4GujpOF23KbQDmDp9Q7nGrrGlJ2MpJXIbcySk21g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        description: "<strong>Факультет Телекомунікаційних систем</strong> Військового інституту телекомунікацій та інформатизації імені Героїв Крут є одним з основних організаційних і навчально-наукових структурних підрозділів інституту, який об'єднує кафедри, підрозділи курсантів.\n\nОсновною метою діяльності факультету є забезпечення умов, необхідних для здійснення освітньої діяльності, яка відповідає стандартам вищої освіти та забезпечує пдготовку, згідно з державним замовленням, висококвалфікованих військових фахівців на рівнях вищої освіти перший (бакалаврський) рівень, другий (магістерський) рівень та фахівців заочної форми навчання з числа військовослужбовців за контрактом.",
        superiors: [
            {
                name: "полковник РИБКА Євгеній Миколайович",
                position: "Начальник факультету",
                achievements: [
                    "лицар ордена Богдана Хмельницького III ступеня",
                    "учасник бойових дій"
                ],
                img: {
                    href: "https://s3-alpha-sig.figma.com/img/9708/e3de/6cc1099649d8572754976f99c6022f07?Expires=1698019200&Signature=gbaaiweneL~ArmzhJq48l74Ze56F4ZsNTz0QWDhlAS9R7~hJkMB~Osy7M1LttFfknEBrP97nFeZdtv6eG25E1SRemnOtL~X9eLu0RQlgay9hZD7b6tv044VKz5u1X3iTqfgyKDL54ah9QDb6VpO-YkihnUKFQ6kbp0H2P799N4BTdqJgpeITIqfvbPnYTbcA29QAASM6OrQjdBro3MS1nkySz-C9XmcXvOndLCmT8APKO~glNL~qZddwXcu3nQK0~7TW1XyP2ZcuNXTHUWrrU4e4pDSDTZK5x0Bo8V51djscbjqSvWTRrYHEIcOSu3717OME~wxNqzekgcH7F1l4gQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                } as Image,
            } as Superior,
            {
                name: "підполковник ЛЕБІДЬ Євген Віцентович",
                position: "Заступник начальника факультету з навчальної\n" +
                    "та наукової роботи - начальник навчальної частини",
                achievements: [
                    "кандидат технічних наук",
                    "учасник бойових дій"
                ],
                img: {
                    href: "https://s3-alpha-sig.figma.com/img/b9aa/59fc/8cce2e263b704611fe45e70c01e0e95b?Expires=1698019200&Signature=Dp~KyrLfvBA6vS1DvRMmKyxWPdu4Ny26r4qOYordmlpS4KUDwI0vHsdpFAEY7vAyCOrvelB5rRbVeopPcLyB60~ia18PhGppC06ekejt1QoWLERDd2sTk2s0Tq4iH89swVZKNSeBK2AUuJgA58a0ugz9kVb9~EFtVqk5diW3G6nugWQdRy1ldqR1sX-wlo~JER7AHTfD~~dGdNa~50bktQPrhc-Nfktf~Svqe5jNZK51a9IkDJ5VbraMwtB95Syf5bGAUomeUjgiIiCmKfpfi7OgJeG7qz0c-ZPT5Jyu8PkW17hqVyXPJ9FxdyDvMHItrjNIjW1zUrTxKW7xsd6duQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                } as Image,
            } as Superior,
            {
                name: "підполковник ЛАНКО Антон Вікторович",
                position: "Заступник начальника факультету\n" +
                    "з морально-психологічного забезпечення",
                achievements: [
                    "учасник бойових дій"
                ],
                img: {href: "https://s3-alpha-sig.figma.com/img/3263/0a44/23ae55aa51d301d3e938fb50db248cda?Expires=1698019200&Signature=jSvlcuDM6sbXUFC8X9p0RqySxf1A1M9SFvaos-dDu20DMIbsyC7zUVPEjSC5gdBIbfwv1KLt6dq4kv~3HfYaZbBB~L3E56VHYBeL-CutsbIzTYAajLcEp3jnpRT699il~KuByh0YGlXhHBzfdoJ7WHy4rfqaQF43XFs8CInDmRVns83gEpDYlz3Pk2mUuy2Y4e7xBQSAdPw0kkwrDE1wK220fFsBupZ5G5Iphox5Px7A0JenJa3H1f6WRKPDGVqedaFNlz~ygECiJEDLEaJSnqKt47dYm0Tk6p7nbsbfMievrxzXQ~4Phoet~ryCv-4CvGC0BXnoxeVR8FFKUWOxXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
            } as Superior,
        ],
        branches: [
            "Електроніка та телекомунікації"
        ],
        specialities: [
            "Телекомунікації та радіотехніка"
        ],
        departments: [
            {
                title: "Кафедра \"ПОБУДОВИ ТЕЛЕКОМУНІКАЦІЙНИХ СИСТЕМ\"",
                description: "Кафедра здійснює підготовку курсантів інституту з фундаментальних дисциплін щодо будови, функціонування та супроводження сучасних інформаційно-телекомунікаційних систем за всіма спеціальностями.",
                superior: {
                    position: "Начальник кафедри",
                    name: "полковник КУЗАВКОВ Василь Вікторович",
                    achievements: [
                        "доктор технічних наук",
                        "доцент"
                    ],
                    img: {href: "https://s3-alpha-sig.figma.com/img/e96d/cefa/2e25c6ee38bb746a52671d17fae2707c?Expires=1698019200&Signature=QvoppDN~BPI82w7fLgtnHTJ7ArpgUAIsuXcFbsp00beCsmrBJbGCkYfsOrtjr9iTxQgrMn1x1SSCqv0~pHiGRcXBQjEaeEhyiGcjStZD8ud7TVvstZBz6l5w3~eF23O2L09lQBM8tBwVFzNiua1iOAAYKLXasSlqC9668IVf2ibTZTekpkKcrL12XRvz9XoWfMHmQwFTWEtOhEyl8oZLwZ0hrK2GZqUgKMRh-ep0kohpd0d2EXRQDw7JVTQVWWbjbBN3CWbXRVFlvsfQFO7-gJ3oCIXhY-HF1xxkxHhIdIIsIXJGgJP2b2wx5H6oqVbX-921CZO56MXuTuYJZesucA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image
                } as Superior

            } as Department,
            {
                title: "Кафедра \"РАДІО - ТА СУПУТНИКОВОГО ЗВ’ЯЗКУ\"",
                description: "Призначена для теоретичної та практичної підготовки військових фахівців для управління діями підрозділів із засобами радіозв'язку.",
                superior: {
                    position: "Начальник кафедри",
                    name: "полковник ГУРСЬКИЙ Тарас Григорович",
                    achievements: [
                        "кандидат технічних наук", "доцент", "учасник бойових дій"
                    ],
                    img: {href: "https://s3-alpha-sig.figma.com/img/7320/ffa1/2be19742d1411b3aa0c88de46c86136b?Expires=1698019200&Signature=n2KYNGiigpKgaFXXW0b1ehQ0H4q2kGj8hik26uk~~1rtPyCoqmIAkvEz08m8rSedd6HUQ18tq30InEYNUZNnyqMlIV7gF30~l2bQTT1NCB81-nCn2PfLwbHTiyw6Ampb9mPf0I7AIbdWLjbywWmC743hKyUX50Tp3ZXk-h-LyOcJ~GEA1UE3AljAJeL40FMtBAxLFGvTx6ez~GIaP-KKSEWjuJDNmpT2~MVC1HS6flF8MUt8br9KFI2Fe5vbuk1LfJiGYSgu~blOr4ijMIYHGHnBSxQ1X9SJB6fEXTFiSG307FGOnj0dHNCIzB4WfH-4yyTR3xC8cZC-eg0xF9RBRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image
                } as Superior

            } as Department,
            {
                title: "Кафедра \"ТРАНСПОРТНИХ МЕРЕЖ\"",
                description: "Призначена для теоретичної та практичної підготовки офіцерських кадрів, які спроможні до впровадження новітніх телекомунікаційних технологій у діяльність органів військового управління.",
                superior: {
                    position: "Начальник кафедри",
                    name: "полковник ГУРЖІЙ Павло Миколайович",
                    achievements: [
                        "кандидат технічних наук", "учасник бойових дій"
                    ],
                    img: {href: "https://s3-alpha-sig.figma.com/img/7320/ffa1/2be19742d1411b3aa0c88de46c86136b?Expires=1698019200&Signature=n2KYNGiigpKgaFXXW0b1ehQ0H4q2kGj8hik26uk~~1rtPyCoqmIAkvEz08m8rSedd6HUQ18tq30InEYNUZNnyqMlIV7gF30~l2bQTT1NCB81-nCn2PfLwbHTiyw6Ampb9mPf0I7AIbdWLjbywWmC743hKyUX50Tp3ZXk-h-LyOcJ~GEA1UE3AljAJeL40FMtBAxLFGvTx6ez~GIaP-KKSEWjuJDNmpT2~MVC1HS6flF8MUt8br9KFI2Fe5vbuk1LfJiGYSgu~blOr4ijMIYHGHnBSxQ1X9SJB6fEXTFiSG307FGOnj0dHNCIzB4WfH-4yyTR3xC8cZC-eg0xF9RBRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
                } as Superior

            } as Department,
        ],
        textBlocks: [
            {
                title: "НАВЧАЛЬНИЙ ТА НАУКОВИЙ ПРОЦЕС",
                textContent: [
                    "На факультеті потужний науково-педагогічний потенціал, сучасна навчально-матеріальна база, комп’ютерні та спеціалізовані класи. Лекційні аудиторії оснащені новітньою телекомунікаційною технікою та засобами зв’язку. Серед курсантів факультету навчаються іменні стипендіати премій Президента України, Верховної Ради України, Кабінету Міністрів України і переможці конкурсів наукових робіт в різних галузях знань.\n"
                ],
                uLists: [
                    {
                        title: "На факультеті організована робота:\n",
                        items: [
                            "підготовки воєнно-наукового товариства (ВНТ) курсантів;",
                            "підготовки ад'юнктів до захисту дисертаційних робіт."
                        ]
                    } as List
                ]
            } as TextBlock,
            {
                textContent: [
                    "Факультет приймає активну участь в винахідницькій та раціоналізаторській роботі, представники від факультету беруть участь у міжнародних навчаннях."
                ]
            } as TextBlock,
            {
                title: "НАВЧАЛЬНО-МАТЕРІАЛЬНА БАЗА",
                images: [
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                ]
            } as TextBlock,
            {
                title: "КУРСАНТСЬКИЙ ПОБУТ",
                images: [
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                ]
            } as TextBlock,
            {
                title: "НАВЧАЛЬНІ ЗАНЯТТЯ",
                textContent: [
                    "Військовослужбовці, які навчаються на факультеті мають статус курсанта та отримують грошове забезпечення. Курсантам, які навчаються на «добре» та «відмінно» нараховується підвищене грошове забезпечення. Випускники факультету після закінчення навчання отримують диплом державного зразка, первинне офіцерське звання «лейтенант» та обов’язкове (гарантоване державним замовленням) призначення на первинну офіцерську посаду."
                ],
                images: [
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                ]
            } as TextBlock,
            {
                title: "ВИХОВНА РОБОТА",
                textContent: [
                    "Факультетом створені всі умови для всебічного розвитку особистості. Курсанти постійно відвідують театри, кінотеатри, картинні галереї, музеї, пам’ятки вітчизняної історичної та культурної спадщини."
                ],
                images: [
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                ]
            } as TextBlock,
            {
                title: "ФІЗИЧНА ПІДГОТОВКА І СПОРТ",
                textContent: [
                    "Особлива увага приділяється розвитку фізичної культури та спорту. Особовий склад факультету має можливість відвідувати різноманітні спортивні секції, гуртки та басейн."
                ],
                images: [
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                ]
            } as TextBlock,
        ]
    } as Faculty,
    {
        id: 8,
        title: "Факультет інформаційних технологій",
        headerImg: "https://s3-alpha-sig.figma.com/img/9b95/04f9/278fdf40556a6cdd60bb3a9950505d7a?Expires=1698019200&Signature=aSpWXDC3GtWHJhDD0SIq6dfUrr1NKtg7tr73vaYPh1m2qtxYEK6gNhWgo7QJg4Cvpz6lxhNcYe4RIdAmaC0ruCN1dwQNAOriBnGlxULMwnTs9cuxn1b-RiGyW65EvTan6EV2pDyN6OHHZtuiNkIJmICBmpy59ttI5vKMSfJJLMuMWW2PYwaZ5Rckq6azQ9dpFweH19d5Xb60i5~-lcEDptjwY0XTZHW6vCvccYcqvbUa1h4mX~oOrBnWUg9O6Ytm90moRFsKrVLrw33H95MM-oROzrG8YPorpxjgqjfh8EhQq2GWGoYR7alIZG5i9BSv-jcdTFktiKG3mvmELUfCnw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        description: "Факультет Телекомунікаційних систем Військового інституту телекомунікацій та інформатизації імені Героїв Крут є одним з основних організаційних і навчально-наукових структурних підрозділів інституту, який об'єднує кафедри, підрозділи курсантів.\n\nОсновною метою діяльності факультету є забезпечення умов, необхідних для здійснення освітньої діяльності, яка відповідає стандартам вищої освіти та забезпечує пдготовку, згідно з державним замовленням, висококвалфікованих військових фахівців на рівнях вищої освіти перший (бакалаврський) рівень, другий (магістерський) рівень та фахівців заочної форми навчання з числа військовослужбовців за контрактом.",
        superiors: [
            {
                name: "полковник РИБКА Євгеній Миколайович",
                position: "Начальник факультету",
                achievements: [
                    "лицар ордена Богдана Хмельницького III ступеня",
                    "учасник бойових дій"
                ],
                img: {
                    href: "https://s3-alpha-sig.figma.com/img/9708/e3de/6cc1099649d8572754976f99c6022f07?Expires=1698019200&Signature=gbaaiweneL~ArmzhJq48l74Ze56F4ZsNTz0QWDhlAS9R7~hJkMB~Osy7M1LttFfknEBrP97nFeZdtv6eG25E1SRemnOtL~X9eLu0RQlgay9hZD7b6tv044VKz5u1X3iTqfgyKDL54ah9QDb6VpO-YkihnUKFQ6kbp0H2P799N4BTdqJgpeITIqfvbPnYTbcA29QAASM6OrQjdBro3MS1nkySz-C9XmcXvOndLCmT8APKO~glNL~qZddwXcu3nQK0~7TW1XyP2ZcuNXTHUWrrU4e4pDSDTZK5x0Bo8V51djscbjqSvWTRrYHEIcOSu3717OME~wxNqzekgcH7F1l4gQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                } as Image,
            } as Superior,
            {
                name: "підполковник ЛЕБІДЬ Євген Віцентович",
                position: "Заступник начальника факультету з навчальної\n" +
                    "та наукової роботи - начальник навчальної частини",
                achievements: [
                    "кандидат технічних наук",
                    "учасник бойових дій"
                ],
                img: {
                    href: "https://s3-alpha-sig.figma.com/img/b9aa/59fc/8cce2e263b704611fe45e70c01e0e95b?Expires=1698019200&Signature=Dp~KyrLfvBA6vS1DvRMmKyxWPdu4Ny26r4qOYordmlpS4KUDwI0vHsdpFAEY7vAyCOrvelB5rRbVeopPcLyB60~ia18PhGppC06ekejt1QoWLERDd2sTk2s0Tq4iH89swVZKNSeBK2AUuJgA58a0ugz9kVb9~EFtVqk5diW3G6nugWQdRy1ldqR1sX-wlo~JER7AHTfD~~dGdNa~50bktQPrhc-Nfktf~Svqe5jNZK51a9IkDJ5VbraMwtB95Syf5bGAUomeUjgiIiCmKfpfi7OgJeG7qz0c-ZPT5Jyu8PkW17hqVyXPJ9FxdyDvMHItrjNIjW1zUrTxKW7xsd6duQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                } as Image,
            } as Superior,
            {
                name: "підполковник ЛАНКО Антон Вікторович",
                position: "Заступник начальника факультету\n" +
                    "з морально-психологічного забезпечення",
                achievements: [
                    "учасник бойових дій"
                ],
                img: {href: "https://s3-alpha-sig.figma.com/img/3263/0a44/23ae55aa51d301d3e938fb50db248cda?Expires=1698019200&Signature=jSvlcuDM6sbXUFC8X9p0RqySxf1A1M9SFvaos-dDu20DMIbsyC7zUVPEjSC5gdBIbfwv1KLt6dq4kv~3HfYaZbBB~L3E56VHYBeL-CutsbIzTYAajLcEp3jnpRT699il~KuByh0YGlXhHBzfdoJ7WHy4rfqaQF43XFs8CInDmRVns83gEpDYlz3Pk2mUuy2Y4e7xBQSAdPw0kkwrDE1wK220fFsBupZ5G5Iphox5Px7A0JenJa3H1f6WRKPDGVqedaFNlz~ygECiJEDLEaJSnqKt47dYm0Tk6p7nbsbfMievrxzXQ~4Phoet~ryCv-4CvGC0BXnoxeVR8FFKUWOxXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
            } as Superior,
        ],
        branches: [
            "Електроніка та телекомунікації"
        ],
        specialities: [
            "Телекомунікації та радіотехніка"
        ],
        departments: [
            {
                title: "Кафедра \"ПОБУДОВИ ТЕЛЕКОМУНІКАЦІЙНИХ СИСТЕМ\"",
                description: "Кафедра здійснює підготовку курсантів інституту з фундаментальних дисциплін щодо будови, функціонування та супроводження сучасних інформаційно-телекомунікаційних систем за всіма спеціальностями.",
                superior: {
                    position: "Начальник кафедри",
                    name: "полковник КУЗАВКОВ Василь Вікторович",
                    achievements: [
                        "доктор технічних наук",
                        "доцент"
                    ],
                    img: {href: "https://s3-alpha-sig.figma.com/img/e96d/cefa/2e25c6ee38bb746a52671d17fae2707c?Expires=1698019200&Signature=QvoppDN~BPI82w7fLgtnHTJ7ArpgUAIsuXcFbsp00beCsmrBJbGCkYfsOrtjr9iTxQgrMn1x1SSCqv0~pHiGRcXBQjEaeEhyiGcjStZD8ud7TVvstZBz6l5w3~eF23O2L09lQBM8tBwVFzNiua1iOAAYKLXasSlqC9668IVf2ibTZTekpkKcrL12XRvz9XoWfMHmQwFTWEtOhEyl8oZLwZ0hrK2GZqUgKMRh-ep0kohpd0d2EXRQDw7JVTQVWWbjbBN3CWbXRVFlvsfQFO7-gJ3oCIXhY-HF1xxkxHhIdIIsIXJGgJP2b2wx5H6oqVbX-921CZO56MXuTuYJZesucA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image
                } as Superior

            } as Department,
            {
                title: "Кафедра \"РАДІО - ТА СУПУТНИКОВОГО ЗВ’ЯЗКУ\"",
                description: "Призначена для теоретичної та практичної підготовки військових фахівців для управління діями підрозділів із засобами радіозв'язку.",
                superior: {
                    position: "Начальник кафедри",
                    name: "полковник ГУРСЬКИЙ Тарас Григорович",
                    achievements: [
                        "кандидат технічних наук", "доцент", "учасник бойових дій"
                    ],
                    img: {href: "https://s3-alpha-sig.figma.com/img/7320/ffa1/2be19742d1411b3aa0c88de46c86136b?Expires=1698019200&Signature=n2KYNGiigpKgaFXXW0b1ehQ0H4q2kGj8hik26uk~~1rtPyCoqmIAkvEz08m8rSedd6HUQ18tq30InEYNUZNnyqMlIV7gF30~l2bQTT1NCB81-nCn2PfLwbHTiyw6Ampb9mPf0I7AIbdWLjbywWmC743hKyUX50Tp3ZXk-h-LyOcJ~GEA1UE3AljAJeL40FMtBAxLFGvTx6ez~GIaP-KKSEWjuJDNmpT2~MVC1HS6flF8MUt8br9KFI2Fe5vbuk1LfJiGYSgu~blOr4ijMIYHGHnBSxQ1X9SJB6fEXTFiSG307FGOnj0dHNCIzB4WfH-4yyTR3xC8cZC-eg0xF9RBRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image
                } as Superior

            } as Department,
            {
                title: "Кафедра \"ТРАНСПОРТНИХ МЕРЕЖ\"",
                description: "Призначена для теоретичної та практичної підготовки офіцерських кадрів, які спроможні до впровадження новітніх телекомунікаційних технологій у діяльність органів військового управління.",
                superior: {
                    position: "Начальник кафедри",
                    name: "полковник ГУРЖІЙ Павло Миколайович",
                    achievements: [
                        "кандидат технічних наук", "учасник бойових дій"
                    ],
                    img: {href: "https://s3-alpha-sig.figma.com/img/7320/ffa1/2be19742d1411b3aa0c88de46c86136b?Expires=1698019200&Signature=n2KYNGiigpKgaFXXW0b1ehQ0H4q2kGj8hik26uk~~1rtPyCoqmIAkvEz08m8rSedd6HUQ18tq30InEYNUZNnyqMlIV7gF30~l2bQTT1NCB81-nCn2PfLwbHTiyw6Ampb9mPf0I7AIbdWLjbywWmC743hKyUX50Tp3ZXk-h-LyOcJ~GEA1UE3AljAJeL40FMtBAxLFGvTx6ez~GIaP-KKSEWjuJDNmpT2~MVC1HS6flF8MUt8br9KFI2Fe5vbuk1LfJiGYSgu~blOr4ijMIYHGHnBSxQ1X9SJB6fEXTFiSG307FGOnj0dHNCIzB4WfH-4yyTR3xC8cZC-eg0xF9RBRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
                } as Superior

            } as Department,
        ],
        textBlocks: [
            {
                title: "НАВЧАЛЬНИЙ ТА НАУКОВИЙ ПРОЦЕС",
                textContent: [
                    "На факультеті потужний науково-педагогічний потенціал, сучасна навчально-матеріальна база, комп’ютерні та спеціалізовані класи. Лекційні аудиторії оснащені новітньою телекомунікаційною технікою та засобами зв’язку. Серед курсантів факультету навчаються іменні стипендіати премій Президента України, Верховної Ради України, Кабінету Міністрів України і переможці конкурсів наукових робіт в різних галузях знань.\n"
                ],
                uLists: [
                    {
                        title: "На факультеті організована робота:\n",
                        items: [
                            "підготовки воєнно-наукового товариства (ВНТ) курсантів;",
                            "підготовки ад'юнктів до захисту дисертаційних робіт."
                        ]
                    } as List
                ]
            } as TextBlock,
            {
                textContent: [
                    "Факультет приймає активну участь в винахідницькій та раціоналізаторській роботі, представники від факультету беруть участь у міжнародних навчаннях."
                ]
            } as TextBlock,
            {
                title: "НАВЧАЛЬНО-МАТЕРІАЛЬНА БАЗА",
                images: [
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                ]
            } as TextBlock,
            {
                title: "НАВЧАЛЬНІ ЗАНЯТТЯ",
                textContent: [
                    "Військовослужбовці, які навчаються на факультеті мають статус курсанта та отримують грошове забезпечення. Курсантам, які навчаються на «добре» та «відмінно» нараховується підвищене грошове забезпечення. Випускники факультету після закінчення навчання отримують диплом державного зразка, первинне офіцерське звання «лейтенант» та обов’язкове (гарантоване державним замовленням) призначення на первинну офіцерську посаду."
                ],
                images: [
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                ]
            } as TextBlock,
            {
                title: "ВИХОВНА РОБОТА",
                textContent: [
                    "Факультетом створені всі умови для всебічного розвитку особистості. Курсанти постійно відвідують театри, кінотеатри, картинні галереї, музеї, пам’ятки вітчизняної історичної та культурної спадщини."
                ],
                images: [
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                ]
            } as TextBlock,
            {
                title: "ФІЗИЧНА ПІДГОТОВКА І СПОРТ",
                textContent: [
                    "Особлива увага приділяється розвитку фізичної культури та спорту. Особовий склад факультету має можливість відвідувати різноманітні спортивні секції, гуртки та басейн."
                ],
                images: [
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                ]
            } as TextBlock,
        ]
    } as Faculty,
    {
        id: 9,
        title: "Факультет бойового застосування систем управління та зв'язку",
        headerImg: "https://s3-alpha-sig.figma.com/img/1141/0562/96d6a9b6d9de9f0c07fcbd6c94cff5f7?Expires=1698019200&Signature=i2PwoDp~ckgXDa7M5vEsx7sJYCraNZw4IZmFg5g9dmKWkrw6MTafmTUI8Rtgag~nUJAX4tFp7L-9xfbhGaIPJHiOjOaii89NkKGUqdOxCMvewMH3ujnHEefIbT9KIFLdalYKOnyUD-qWMEda4nLnL5JGRVkGS~Hi7i3FO7vU-8pFCibeQ5xs0zLt4lBtHrg9NXlSS~cGknSqo9b2WV-ebSC~RT6~3uHNOkb8Ydb8nRmgQ4AZvqmnPxw2T0O2TUslZxSvr~Mb~0Uk9sA~NaRYqTxonCG0ljjN0pK97fODeLP1oc3T0yWB2XcZwCL8RVuD~Ha17zo7iXv3CPQKckol7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        description: "Факультет Телекомунікаційних систем Військового інституту телекомунікацій та інформатизації імені Героїв Крут є одним з основних організаційних і навчально-наукових структурних підрозділів інституту, який об'єднує кафедри, підрозділи курсантів.\n\nОсновною метою діяльності факультету є забезпечення умов, необхідних для здійснення освітньої діяльності, яка відповідає стандартам вищої освіти та забезпечує пдготовку, згідно з державним замовленням, висококвалфікованих військових фахівців на рівнях вищої освіти перший (бакалаврський) рівень, другий (магістерський) рівень та фахівців заочної форми навчання з числа військовослужбовців за контрактом.",
        superiors: [
            {
                name: "полковник РИБКА Євгеній Миколайович",
                position: "Начальник факультету",
                achievements: [
                    "лицар ордена Богдана Хмельницького III ступеня",
                    "учасник бойових дій"
                ],
                img: {
                    href: "https://s3-alpha-sig.figma.com/img/9708/e3de/6cc1099649d8572754976f99c6022f07?Expires=1698019200&Signature=gbaaiweneL~ArmzhJq48l74Ze56F4ZsNTz0QWDhlAS9R7~hJkMB~Osy7M1LttFfknEBrP97nFeZdtv6eG25E1SRemnOtL~X9eLu0RQlgay9hZD7b6tv044VKz5u1X3iTqfgyKDL54ah9QDb6VpO-YkihnUKFQ6kbp0H2P799N4BTdqJgpeITIqfvbPnYTbcA29QAASM6OrQjdBro3MS1nkySz-C9XmcXvOndLCmT8APKO~glNL~qZddwXcu3nQK0~7TW1XyP2ZcuNXTHUWrrU4e4pDSDTZK5x0Bo8V51djscbjqSvWTRrYHEIcOSu3717OME~wxNqzekgcH7F1l4gQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                } as Image,
            } as Superior,
            {
                name: "підполковник ЛЕБІДЬ Євген Віцентович",
                position: "Заступник начальника факультету з навчальної\n" +
                    "та наукової роботи - начальник навчальної частини",
                achievements: [
                    "кандидат технічних наук",
                    "учасник бойових дій"
                ],
                img: {
                    href: "https://s3-alpha-sig.figma.com/img/b9aa/59fc/8cce2e263b704611fe45e70c01e0e95b?Expires=1698019200&Signature=Dp~KyrLfvBA6vS1DvRMmKyxWPdu4Ny26r4qOYordmlpS4KUDwI0vHsdpFAEY7vAyCOrvelB5rRbVeopPcLyB60~ia18PhGppC06ekejt1QoWLERDd2sTk2s0Tq4iH89swVZKNSeBK2AUuJgA58a0ugz9kVb9~EFtVqk5diW3G6nugWQdRy1ldqR1sX-wlo~JER7AHTfD~~dGdNa~50bktQPrhc-Nfktf~Svqe5jNZK51a9IkDJ5VbraMwtB95Syf5bGAUomeUjgiIiCmKfpfi7OgJeG7qz0c-ZPT5Jyu8PkW17hqVyXPJ9FxdyDvMHItrjNIjW1zUrTxKW7xsd6duQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                } as Image,
            } as Superior,
            {
                name: "підполковник ЛАНКО Антон Вікторович",
                position: "Заступник начальника факультету\n" +
                    "з морально-психологічного забезпечення",
                achievements: [
                    "учасник бойових дій"
                ],
                img: {href: "https://s3-alpha-sig.figma.com/img/3263/0a44/23ae55aa51d301d3e938fb50db248cda?Expires=1698019200&Signature=jSvlcuDM6sbXUFC8X9p0RqySxf1A1M9SFvaos-dDu20DMIbsyC7zUVPEjSC5gdBIbfwv1KLt6dq4kv~3HfYaZbBB~L3E56VHYBeL-CutsbIzTYAajLcEp3jnpRT699il~KuByh0YGlXhHBzfdoJ7WHy4rfqaQF43XFs8CInDmRVns83gEpDYlz3Pk2mUuy2Y4e7xBQSAdPw0kkwrDE1wK220fFsBupZ5G5Iphox5Px7A0JenJa3H1f6WRKPDGVqedaFNlz~ygECiJEDLEaJSnqKt47dYm0Tk6p7nbsbfMievrxzXQ~4Phoet~ryCv-4CvGC0BXnoxeVR8FFKUWOxXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
            } as Superior,
        ],
        branches: [
            "Електроніка та телекомунікації"
        ],
        specialities: [
            "Телекомунікації та радіотехніка"
        ],
        departments: [
            {
                title: "Кафедра \"ПОБУДОВИ ТЕЛЕКОМУНІКАЦІЙНИХ СИСТЕМ\"",
                description: "Кафедра здійснює підготовку курсантів інституту з фундаментальних дисциплін щодо будови, функціонування та супроводження сучасних інформаційно-телекомунікаційних систем за всіма спеціальностями.",
                superior: {
                    position: "Начальник кафедри",
                    name: "полковник КУЗАВКОВ Василь Вікторович",
                    achievements: [
                        "доктор технічних наук",
                        "доцент"
                    ],
                    img: {href: "https://s3-alpha-sig.figma.com/img/e96d/cefa/2e25c6ee38bb746a52671d17fae2707c?Expires=1698019200&Signature=QvoppDN~BPI82w7fLgtnHTJ7ArpgUAIsuXcFbsp00beCsmrBJbGCkYfsOrtjr9iTxQgrMn1x1SSCqv0~pHiGRcXBQjEaeEhyiGcjStZD8ud7TVvstZBz6l5w3~eF23O2L09lQBM8tBwVFzNiua1iOAAYKLXasSlqC9668IVf2ibTZTekpkKcrL12XRvz9XoWfMHmQwFTWEtOhEyl8oZLwZ0hrK2GZqUgKMRh-ep0kohpd0d2EXRQDw7JVTQVWWbjbBN3CWbXRVFlvsfQFO7-gJ3oCIXhY-HF1xxkxHhIdIIsIXJGgJP2b2wx5H6oqVbX-921CZO56MXuTuYJZesucA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image
                } as Superior

            } as Department,
            {
                title: "Кафедра \"РАДІО - ТА СУПУТНИКОВОГО ЗВ’ЯЗКУ\"",
                description: "Призначена для теоретичної та практичної підготовки військових фахівців для управління діями підрозділів із засобами радіозв'язку.",
                superior: {
                    position: "Начальник кафедри",
                    name: "полковник ГУРСЬКИЙ Тарас Григорович",
                    achievements: [
                        "кандидат технічних наук", "доцент", "учасник бойових дій"
                    ],
                    img: {href: "https://s3-alpha-sig.figma.com/img/7320/ffa1/2be19742d1411b3aa0c88de46c86136b?Expires=1698019200&Signature=n2KYNGiigpKgaFXXW0b1ehQ0H4q2kGj8hik26uk~~1rtPyCoqmIAkvEz08m8rSedd6HUQ18tq30InEYNUZNnyqMlIV7gF30~l2bQTT1NCB81-nCn2PfLwbHTiyw6Ampb9mPf0I7AIbdWLjbywWmC743hKyUX50Tp3ZXk-h-LyOcJ~GEA1UE3AljAJeL40FMtBAxLFGvTx6ez~GIaP-KKSEWjuJDNmpT2~MVC1HS6flF8MUt8br9KFI2Fe5vbuk1LfJiGYSgu~blOr4ijMIYHGHnBSxQ1X9SJB6fEXTFiSG307FGOnj0dHNCIzB4WfH-4yyTR3xC8cZC-eg0xF9RBRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image
                } as Superior

            } as Department,
            {
                title: "Кафедра \"ТРАНСПОРТНИХ МЕРЕЖ\"",
                description: "Призначена для теоретичної та практичної підготовки офіцерських кадрів, які спроможні до впровадження новітніх телекомунікаційних технологій у діяльність органів військового управління.",
                superior: {
                    position: "Начальник кафедри",
                    name: "полковник ГУРЖІЙ Павло Миколайович",
                    achievements: [
                        "кандидат технічних наук", "учасник бойових дій"
                    ],
                    img: {href: "https://s3-alpha-sig.figma.com/img/7320/ffa1/2be19742d1411b3aa0c88de46c86136b?Expires=1698019200&Signature=n2KYNGiigpKgaFXXW0b1ehQ0H4q2kGj8hik26uk~~1rtPyCoqmIAkvEz08m8rSedd6HUQ18tq30InEYNUZNnyqMlIV7gF30~l2bQTT1NCB81-nCn2PfLwbHTiyw6Ampb9mPf0I7AIbdWLjbywWmC743hKyUX50Tp3ZXk-h-LyOcJ~GEA1UE3AljAJeL40FMtBAxLFGvTx6ez~GIaP-KKSEWjuJDNmpT2~MVC1HS6flF8MUt8br9KFI2Fe5vbuk1LfJiGYSgu~blOr4ijMIYHGHnBSxQ1X9SJB6fEXTFiSG307FGOnj0dHNCIzB4WfH-4yyTR3xC8cZC-eg0xF9RBRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
                } as Superior

            } as Department,
        ],
        textBlocks: [
            {
                title: "НАВЧАЛЬНИЙ ТА НАУКОВИЙ ПРОЦЕС",
                textContent: [
                    "На факультеті потужний науково-педагогічний потенціал, сучасна навчально-матеріальна база, комп’ютерні та спеціалізовані класи. Лекційні аудиторії оснащені новітньою телекомунікаційною технікою та засобами зв’язку. Серед курсантів факультету навчаються іменні стипендіати премій Президента України, Верховної Ради України, Кабінету Міністрів України і переможці конкурсів наукових робіт в різних галузях знань.\n"
                ],
                uLists: [
                    {
                        title: "На факультеті організована робота:\n",
                        items: [
                            "підготовки воєнно-наукового товариства (ВНТ) курсантів;",
                            "підготовки ад'юнктів до захисту дисертаційних робіт."
                        ]
                    } as List
                ]
            } as TextBlock,
            {
                textContent: [
                    "Факультет приймає активну участь в винахідницькій та раціоналізаторській роботі, представники від факультету беруть участь у міжнародних навчаннях."
                ]
            } as TextBlock,
            {
                title: "НАВЧАЛЬНО-МАТЕРІАЛЬНА БАЗА",
                images: [
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/a315/e308/e391caf0d47ea63fdcd5582511c7d8f5?Expires=1698019200&Signature=eh6dx4jCny673i5yQUacpzwT7wvQ1l-EA~84rVPwHlh-VZUaRXdm1ksCdgFrRB9Uyw7PMIs-GZc7zH4YcIyUnVw7Hbt7AFPHsUThzZFkCQXmiyH6X~xm6UES2EVLRL8JgBUFHrZQ0yRrrMcfhcVpIkbMmbXyI3YK6KPijz9PwB-JqeXdj71ARCMEMguLcieFL-GSJGG~qDt16ayStBycbDP56xd7eF6Tk2JfNQnJ2W7wkeHlsI2Z7zpqs25nXMYwGFNJpzp-JJjMkQ9YqXGcNUd4~dsu2Ej48oU2EIk3MUNX9Lxirmm~O12zGcFvZ57e~-l0-1LAXjuoMxirDnfkxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                ]
            } as TextBlock,
            {
                title: "НАВЧАЛЬНІ ЗАНЯТТЯ",
                textContent: [
                    "Військовослужбовці, які навчаються на факультеті мають статус курсанта та отримують грошове забезпечення. Курсантам, які навчаються на «добре» та «відмінно» нараховується підвищене грошове забезпечення. Випускники факультету після закінчення навчання отримують диплом державного зразка, первинне офіцерське звання «лейтенант» та обов’язкове (гарантоване державним замовленням) призначення на первинну офіцерську посаду."
                ],
                images: [
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                ]
            } as TextBlock,
            {
                title: "ВИХОВНА РОБОТА",
                textContent: [
                    "Факультетом створені всі умови для всебічного розвитку особистості. Курсанти постійно відвідують театри, кінотеатри, картинні галереї, музеї, пам’ятки вітчизняної історичної та культурної спадщини."
                ],
                images: [
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                ]
            } as TextBlock,
            {
                title: "ФІЗИЧНА ПІДГОТОВКА І СПОРТ",
                textContent: [
                    "Особлива увага приділяється розвитку фізичної культури та спорту. Особовий склад факультету має можливість відвідувати різноманітні спортивні секції, гуртки та басейн."
                ],
                images: [
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/2c63/3ac4/7dab3ebbe4054eaa37ae0f36f11f3cf8?Expires=1698019200&Signature=Lr3dPldMmlEM1PdfBxSY98vbCahky~21ztnDLuvvbnxsNT2Uh5eOIjF47jFGSHlH~qAglP6P3C~tXvmTpaof8t2P8QmLNwNatSKDan4JIt4IW0JAuKf4XnuUQYuTD7FcHB2k-vTf2HaBqRP6Y~C7LJgGDpjoxK73a6MYyyso24sLoXLoIKvni0nNs~UFXfKXS3g1lSWl~cYQXrhxYm4qJIimZ5BNSxxIwmzvbZiTF6SIoWZh7RKohG3A-qoKtAEiNRZfDrs5MZ878qnnRKUghtzp9edeLqDxu3nv~yjRHvqornFzA7jb7wlTd0RLrMYWzHJNruGlXS~5ep09nDyRPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                ]
            } as TextBlock,
        ]
    } as Faculty
]

export const superiors: Superior[] = [
    {
        img: {href: "https://s3-alpha-sig.figma.com/img/355c/14a8/ed5f3a04159810242d8c7f4daca9b740?Expires=1697414400&Signature=pYbgUtQuj3fOqH2ERhS3vqPvpw6UCjpScaVH-m1qnwgPEFV8Ua7UP30GhmpLaDoJPospS6dJfP-~THZVhvw83f1GGqlrL8C~Y2P3XKP-lnHfh~wqlaYqki1v8THBxeAW5nCqkp3VvXYZbCt8N-6OLV9ShlMi1eqepaEI-nZAF95JdxXEQo6F4Z-nplemCbM2rrQDN2AQQgQh~X2cOC4EN2nCwie6L5mRiuPrjaG1Z5QSiD-aTFRrS0mvW9Sjtw76YIMC-Q7CpWRRAEFc49dv4SxhkTTQirFEJcvOJk3of2qbDTLBlnQ0iu6sJT4WFXfrqdIPKBpWHp1TldlDuX8qvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
        name: "ОСТАПЧУК Віктор Миколайович",
        position: "Начальник інституту",
        rang: "генерал-майор",
        achievements: [
            "лицар ордена Богдана Хмельницького III ступеня",
            "учасник бойових дій"
        ],
    },
    {
        img: {href: "https://s3-alpha-sig.figma.com/img/c194/0e3b/17d945552491142a3e2561d91d8b7239?Expires=1697414400&Signature=fDjm33SmQ4z448dANXL0g9wpFIsknrm60QYobhjRv69UKamDsR5CNfgu3SbIHRA5iaChTgi0yKEee4VPV6o3Co1pmqMJRjBsMY8RNEMXSNwQm5dX~gOfpb8lt8~n0gEOlkqnLCUY~ua9W61qS0dFXXEYnTySjqf08J~vywIomPPYfl4d35hHEG5LoP6aZC9c~8Pax9A2tmrqJ6JDexPTCFqRhSpwKLvNOiedQ3nhF8K8RK2UDoKOt20BuV~TLQrC~ToYf26G6dpmng4b6bccbwFn1BzGlBlUoUGoJHic4DaPnnIiKykR3jJhNLc~KORnSLlmi25YmLzgE0bGxK0~TA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
        name: "ТАРАСОВ Віталій Віталійович",
        position: "Заступник начальника інституту",
        rang: "полковник",
        achievements: [
            "учасник бойових дій"
        ],
        telephone: "+38 (044) 256-23-08"
    },
    {
        img: {href: "https://s3-alpha-sig.figma.com/img/1c09/48e2/4bad7600f256a07ca533a892467ee962?Expires=1697414400&Signature=YkqoyE5rSnE7JCiHxkj0iFVHCkfmr6APRbnSo7szS3S~j6OoKK3TSNc7BMo1A~Wnb2Pn4FnKBlkVWBPTpH812BQcDS64rWr40Y1i-hYLNtLTgdkNzsK5cFjezpx1UZbBTPYKFc0W4soDqb~KUnnPFAyEF~c4DGmFNnnwB1NJcV12em31eNXBN-VEBJKMSNLZhkn3eaG68JiHEsV0kWucMP2S-e~fzzuj2k773osVRHIf2iYQ2m6g9ZSigvJ32zCrnXFcyVcJ0TiPX93cJNW5ERp0kHr6zEHZTl93Pf4gNm6SAgJolCIv2ynQfFjzxgxxHqgRFrmzrxID4WkAEz3SOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
        name: "СІЛКО Олексій Вікторович",
        position: "Заступник начальника інституту з навчальної роботи",
        rang: "полковник",
        achievements: [
            "кандидат технічних наук",
            "доцент, учасник бойових дій"
        ],
        telephone: "+38 (044) 256-22-93"
    },
    {
        img: {href: "https://s3-alpha-sig.figma.com/img/944e/2b83/ecba4b3b1d08543c39690e5c986f2484?Expires=1697414400&Signature=htu5V6bUz97CqVFhyDBFWuXksIl~NdxsJQZre2O00VedU-1O2AG4Cd2utjoH7OIscwhiGnAVg50dJl~Wz~X-uew26a6iq7zO2eVcl6CKwWvrU1hSbrY4QlCa-AwtXDW8h~3dzL7DrfZWG1AmSsDzVK9d1MPzWuNcOWFjzFMh57xMqERGDJT4Y0oJzOap-zy67JJwkUjCqwZXq7IfWF78KI1uLeO0pJExQ9XU2cBY1vr-BiJqwsF17wZN65cOGKIBpVirkLwbj~jGBiXF8cq3SLwgcar1Ieo5FKqNH8TEvlNq9VLDEuOKXiJE2nOP8BOINzE2sh2HZJJMBiqNdH76Nw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
        name: "РАДЗІВІЛОВ Григорій Данилович",
        position: "Заступник начальника інституту з наукової роботи",
        rang: "полковник",
        achievements: [
            "кандидат технічних наук",
            "доцент",
            "учасник бойових дій"
        ],
    },
    {
        img: {href: "https://s3-alpha-sig.figma.com/img/b645/1941/87d0a843d776391a15f0bc50720c1877?Expires=1697414400&Signature=Q1x6oGIqOij8RfjwWOqyhbOVCfllOpYKCV~kqED54N-ZtByGyXI2NkcrAQtESbnn8m3GDFYCcrY2c-7AjkxYr2D95u4Ck9DuZWmwq0DmGOxNlj6zE2HAZqiBT5HqpOt7EyHZnfKF4fTBFZYUAtB0fTOiVWdMgWAjdTOXMbL-LVuT26gz~ISh1-jECnqrQV6GZwjE07UnuvWpfZir6PJf6Ousqe6O~pKvPeKPl-Lfm1NgalKy5EcSDsms1GSVnJjes~EWyhsjwJF2ZAfbONk1awInumS52SlOQWnu35A9lWwWQgv27vz3u12RVtPR9scysJudN9ob2sE9aKdCVuyqcg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
        name: "ПЕТРОВСЬКИЙ Олег Євгенович",
        position: "Заступник начальника інституту з морально-психологічного забезпечення",
        rang: "полковник",
        achievements: [
            "учасник бойових дій"
        ],
        telephone: "+38 (044) 256-22-09"
    },
    {
        img: {href: "https://s3-alpha-sig.figma.com/img/ea15/b3d6/41d2612a47275af0834cf310a23d92ea?Expires=1697414400&Signature=ZMewPOVBlfrD1PlJRw4CrpDv20KNneq43FOadHiYYQZHPELyUZ3hSQvB1vBH40OjNAHRzjj0cuscLPf8aNNTd5KZf1~2aQu~up5QEA4gl6CuCruNGvR6UNL1~YVhlGD5DapqfCZvHUSKZtPjimBnGd8TWegPke1zeyVhjpGvce4w-tiq8zGOV0~gKI1BzYHXfeqbWh2gH5stIME-z-sNk36L06GMr07MLyOqz9EQIKKUWv~TPo5w~h1ItkhHp23eSByQC4xc9kVVz-xQ0GSoi6~D~TCJJMCoNGY2Ro-YMV5bHe1zw5ktt3hok7qwuW4zMjfIH3mWkp-MecRjco09xA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
        name: "КІМ Олексій Сергійович",
        position: "Заступник начальника інституту з озброєння - начальник озброєння",
        rang: "полковник",
        achievements: [
            "лицар ордена Богдана Хмельницького III ступеня",
            "учасник бойових дій"
        ],
    },
    {
        img: {href: "https://s3-alpha-sig.figma.com/img/cc44/cdd3/a8142a2b66e0100e2f5771b86feb3b45?Expires=1697414400&Signature=PtG~RYNIbVL9jvHvHWhIhA7o3oh2IaFzf9-LTC69hqFN58-HYFdnAVbdW6TnQYGZW7JhMld1Le5YRy-xpRJEPED0-7sRSDhuRxzbZgzKXLsUolbT48csqEuQvIMjYfqGVaIYRwfgUKvBdIcNruJAIz5TErOEjrElZ~~N7sYXggxy7xliVAnklV6-Ib~bYVoQlY7t1wCLr1tkb9VB7sj0YxdJSFeFrrro-jH7KL-ygHkqLranbw~JefI3fDZjkgQArlaBXCEnOGDaebo~uDFIIqo9R3bBvHCVEEQThpbSXDnl7buAasaHVdAvU5zbuH1caopDX4ESV9pg-b-7FVh3jQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
        name: "СТАНІЛОГА Олександр Григорович",
        position: "Заступник начальника інституту з тилу - начальник тилу",
        rang: "полковник",
        achievements: [
            "учасник бойових дій"
        ],
        telephone: "+38 (044) 256-24-44"
    }
]

export const departments: Department[] = [
    {
        id: 10,
        headerImg: "https://s3-alpha-sig.figma.com/img/37cb/e112/a43a141029e5dce369924c1db9f958a5?Expires=1698019200&Signature=KmpWSKmaCvXRu8wDRvzFPogNzUNKQnNWyIp3Ma6lTL8AgsqRVzviqTky2fpkxvn49AK1-YD8PqXmSJ6PehzPlvOf3m93oTyFSKweK3io9fTnsF~gKZr0Kz0FMJS5eRVFcwoEDS~iV2E8leQXcGOBEscm~oyIbvEtdr~E4gsAFG6HL01JDIJPCIlHIJKr8rAeY5gP4-pDxBNi5tmzfMbtJfBKvJcn9yUVZopo5uQ~56MU7DLDK6YkBYpkvOQjKI7fSoIZ670mU-af0FuOCDwciHt47~6qJa-9wDOxE3bTRaAiPFNOFwbBbxqt6bFh3g4EnM6VoW0bWy6wfrJrIIiG3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        title: "Кафедра загальної тактики",
        titleTextBlock: {
            textContent: [
                "Кафедра загальної тактики є базовим структурним підрозділ інституту що провадить освітню, методичну та наукову діяльність за всіма спеціальностями та спеціалізаціями підготовки курсантів (слухачів, студентів).\n"
            ],
            uLists: [
                {
                    title: "Головними завданнями кафедри є:",
                    items: [
                        "виховування майбутніх офіцерів з твердою командирською волею та ініціативою, здатних самостійно вирішувати поставлені завдання та нести відповідальність за прийняті рішення;\n",
                        "навчання курсантів теорії та практиці застосування підрозділів Сухопутних військ в сучасному загальновійськовому бою, формам та способам тактичних дій, вмілому управлінню підрозділами в бою з дотриманням норм міжнародного гуманітарного права;\n",
                        "реалізація на практиці вимог начальника військ зв’язку Збройних Сил України – начальника Головного управління зв’язку та інформаційних систем Генерального штабу Збройних Сил України до випускників інституту в питаннях загальновійськової підготовки;\n",
                        "впровадження у підготовку курсантів (слухачів, студентів) інституту нових форм підготовки з урахуванням вимог стандартів НАТО та досвіду застосування Збройних сил України в антитерористичній операції.",
                    ]
                } as List
            ]
        } as TextBlock,
        superior: {
            name: "ПАВЛЕНКО Олег Анатолійович",
            rang: "полковник",
            achievements: [
                "кандидат педагогічних наук"
            ],
            position: "Начальник кафедри",
            img: {href: "https://s3-alpha-sig.figma.com/img/197c/e6fe/0e29c69c50d963f1c6f5475f6951b68f?Expires=1698019200&Signature=aZ3LKF07Sma61ugepNxtlVBcAsyPrI6iL8Hh3XbXAYm5VWVAFJZXZ0S-Rz2M6VYsp1LnYJn2VG7Ia3by~77nXJiVcOdDXLwY4~v6e0ONN89VRduyHaiL0wH2t0KAWvT2OTZo0WbgICcWWajUm7LB0iic~XquP4uaix4fEVyl5vkCXQ0Fv5mwWplwvFjgq0u-3CjJDk3bn-nS0dbcN6vOFZsOkWOseoTx50QICiliHhN~6CmxWv8viTDs9nC~puzbPHZisishLlYfkDVnKrvxroFEL-jOfblofBtd9RsIUB5g8KhV975HA4bm5IwWvnZykKKYI~LEUrZPsq1bbhBQlA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image
        } as Superior,
        textBlocks: [
            {
                textContent: [
                    "На кафедрі викладаються наступні дисципліни: загальна тактика, основи військового управління (в тому числі штабні процедури НАТО), управління повсякденною діяльністю військ, інженерна підготовка, військова топографія, радіаційний, хімічний, біологічний захист підрозділів (в тому числі екологія), бойова система виживання воїна (у тому числі військово-медична підготовка), стрілецька зброя та вогнева підготовка, а також історія війн та воєнного мистецтва (у тому числі історія українського війська)."
                ],
                images: [
                    {href: "https://s3-alpha-sig.figma.com/img/bf4e/582b/e09abdcd91bd78f36bbb981cc1893e3d?Expires=1698019200&Signature=ZwseWJ-PHXHGBln1e5-FCp-7vJ3J2HnEGbnICAI86tu-C~P9fGrtpScfoDMcfRfhnJhTky4UrLpAvTES2uycxOcx1nrKg7E5n3poZ7Q2BO99Fm9gENrUu00eq5QggzokciSaw5cadTUaI1~QRqDR6c0W9TxNeM1Q0I9OHXC~GotICzcrhw6Z43tmrjFJ4lyatubLO2rBFHY48w-6~V6nyPFYRcNidgxxKTp5tJwAfpMekBiFEkssB5wPg~ef8co-8cRs425oyUy1KiQUZhiGJnWErS05EXcXqCsR4TPoXM3vFWNts8EOpf0S0afLbDbpVdEShXwiCvuy3pYWWevW~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/bf4e/582b/e09abdcd91bd78f36bbb981cc1893e3d?Expires=1698019200&Signature=ZwseWJ-PHXHGBln1e5-FCp-7vJ3J2HnEGbnICAI86tu-C~P9fGrtpScfoDMcfRfhnJhTky4UrLpAvTES2uycxOcx1nrKg7E5n3poZ7Q2BO99Fm9gENrUu00eq5QggzokciSaw5cadTUaI1~QRqDR6c0W9TxNeM1Q0I9OHXC~GotICzcrhw6Z43tmrjFJ4lyatubLO2rBFHY48w-6~V6nyPFYRcNidgxxKTp5tJwAfpMekBiFEkssB5wPg~ef8co-8cRs425oyUy1KiQUZhiGJnWErS05EXcXqCsR4TPoXM3vFWNts8EOpf0S0afLbDbpVdEShXwiCvuy3pYWWevW~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/bf4e/582b/e09abdcd91bd78f36bbb981cc1893e3d?Expires=1698019200&Signature=ZwseWJ-PHXHGBln1e5-FCp-7vJ3J2HnEGbnICAI86tu-C~P9fGrtpScfoDMcfRfhnJhTky4UrLpAvTES2uycxOcx1nrKg7E5n3poZ7Q2BO99Fm9gENrUu00eq5QggzokciSaw5cadTUaI1~QRqDR6c0W9TxNeM1Q0I9OHXC~GotICzcrhw6Z43tmrjFJ4lyatubLO2rBFHY48w-6~V6nyPFYRcNidgxxKTp5tJwAfpMekBiFEkssB5wPg~ef8co-8cRs425oyUy1KiQUZhiGJnWErS05EXcXqCsR4TPoXM3vFWNts8EOpf0S0afLbDbpVdEShXwiCvuy3pYWWevW~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/bf4e/582b/e09abdcd91bd78f36bbb981cc1893e3d?Expires=1698019200&Signature=ZwseWJ-PHXHGBln1e5-FCp-7vJ3J2HnEGbnICAI86tu-C~P9fGrtpScfoDMcfRfhnJhTky4UrLpAvTES2uycxOcx1nrKg7E5n3poZ7Q2BO99Fm9gENrUu00eq5QggzokciSaw5cadTUaI1~QRqDR6c0W9TxNeM1Q0I9OHXC~GotICzcrhw6Z43tmrjFJ4lyatubLO2rBFHY48w-6~V6nyPFYRcNidgxxKTp5tJwAfpMekBiFEkssB5wPg~ef8co-8cRs425oyUy1KiQUZhiGJnWErS05EXcXqCsR4TPoXM3vFWNts8EOpf0S0afLbDbpVdEShXwiCvuy3pYWWevW~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/bf4e/582b/e09abdcd91bd78f36bbb981cc1893e3d?Expires=1698019200&Signature=ZwseWJ-PHXHGBln1e5-FCp-7vJ3J2HnEGbnICAI86tu-C~P9fGrtpScfoDMcfRfhnJhTky4UrLpAvTES2uycxOcx1nrKg7E5n3poZ7Q2BO99Fm9gENrUu00eq5QggzokciSaw5cadTUaI1~QRqDR6c0W9TxNeM1Q0I9OHXC~GotICzcrhw6Z43tmrjFJ4lyatubLO2rBFHY48w-6~V6nyPFYRcNidgxxKTp5tJwAfpMekBiFEkssB5wPg~ef8co-8cRs425oyUy1KiQUZhiGJnWErS05EXcXqCsR4TPoXM3vFWNts8EOpf0S0afLbDbpVdEShXwiCvuy3pYWWevW~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/bf4e/582b/e09abdcd91bd78f36bbb981cc1893e3d?Expires=1698019200&Signature=ZwseWJ-PHXHGBln1e5-FCp-7vJ3J2HnEGbnICAI86tu-C~P9fGrtpScfoDMcfRfhnJhTky4UrLpAvTES2uycxOcx1nrKg7E5n3poZ7Q2BO99Fm9gENrUu00eq5QggzokciSaw5cadTUaI1~QRqDR6c0W9TxNeM1Q0I9OHXC~GotICzcrhw6Z43tmrjFJ4lyatubLO2rBFHY48w-6~V6nyPFYRcNidgxxKTp5tJwAfpMekBiFEkssB5wPg~ef8co-8cRs425oyUy1KiQUZhiGJnWErS05EXcXqCsR4TPoXM3vFWNts8EOpf0S0afLbDbpVdEShXwiCvuy3pYWWevW~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                ]
            } as TextBlock
        ]
    } as Department,
    {
        id: 11,
        headerImg: "https://s3-alpha-sig.figma.com/img/390f/ac3a/aa5e6c1bb3d46ee3a6e08072ee54e7b1?Expires=1698019200&Signature=oqSXji1W8R5uLF1tpvAOYKyw9iOjahYijAMneqckIWUJyDW7oxtL5Vb27~6u4qEiudd9gKJZh-McbHspQV0UY5EnctD1hJ5YEIR0L3lX6y5cBZap~cJYAtVGaGCXC5wsCkvjo-Zj-zWt51N7506JjfLiGp8Ji~R7iKGhoeHIBHNDxYxRYXe~e213iyr4dd7rjyKvOnc9VAmC1MxZgVu7aWpnJxAhvi0KtpqFxpNk7dLClIbT6Af864KqlGs5FHUT~ln-TL1D-nA34IOj6u6stkKzXryCvnybektZi704mpVmiwpvJ-WxwOMEcnoQ6vn5J0O0hQGXcAiBfohO9qNmUA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        title: "Кафедра іноземних мов",
        titleTextBlock: {
            textContent: [
                "Кафедра Іноземних мов є загальноінститутською кафедрою, яка здійснює підготовку висококваліфікованих офіцерських кадрів для Збройних Сил України та інших військових формувань. Основний акцент в підготовці фахівців викладацьким складом кафедри робиться на вдосконаленні мовної компетентності фахівців, приведення її у відповідність з міжнародними стандартами та сучасними потребами щодо забезпечення мовної взаємосумісності органів управління, частин та підрозділів Збройних Сил України з військовими формуваннями міжнародних організацій та країн-партнерів НАТО у рамках реалізації заходів міжнародного співробітництва."
            ]
        } as TextBlock,
        superior: {
            name: "КАПАНАЙКО Ірина Ярославівна",
            rang: "Пр. ЗСУ",
            achievements: [
                "кандидат філологічних наук"
            ],
            position: "Завідувач кафедри іноземних мов",
            img: {href: "http://10.5.113.141:8081/api/v1/images/171"} as Image
        } as Superior,
        textBlocks: [
            {
                textContent: [
                    "Навчання проводиться за навчальними дисциплінами: Іноземна мова, Іноземна мова (військово-спеціальна підготовка), Іноземна мова професійного спрямування, Ділова іноземна мова (для ад’юнктів). Завданням кафедри під час вивчення іноземної мови є розвиток у курсантів професійно орієнтованої міжкультурної комунікативної компетентності. Ця компетентність є результатом взаємодії та комплексної реалізації низки компетентностей, а саме, розвитку загальнонавчальної компетентності, формування та розвитку лінгвістичної мовної компетентності, розвитку іншомовної комунікативної компетентності, розвитку соціокультурної та прагматичної компетентностей. Зазначені компетентності формують професійну комунікативну компетентність особистості курсанта (слухача, ад’юнкта), здатного брати безпосередню участь у розв’язанні важливих проблем та професійних завдань іноземною мовою.\n",
                    "Науково-педагогічні працівники кафедри забезпечують якісне проведення практичних занять, використовуючи сучасні навчально-методичні комплекси.",
                    "На кафедрі працює 9 викладачів та 2 працівники лаборантського складу, які забезпечують навчальний процес.\n",
                    "Значна увага на кафедрі приділяється підвищенню кваліфікації викладачів та їх професійному самовдосконаленню. Основними напрямками наукових досліджень кафедри є: лінгвістичні, методичні та педагогічні засади взаємопов’язаного навчання різних видів мовленнєвої діяльності, шляхи поповнення словникового запасу мови, психолінгвістичні аспекти підвищення ефективності викладання іноземних мов, удосконалення професійно-орієнтованої іншомовної підготовки як фактор підвищення ефективності діяльності працівників."
                ]
            } as TextBlock,
            {
                title: "Розклад додаткових консультативних занять.",
                tables: [
                    {
                        headers: [
                            "День тижня",
                            "Назва курсу",
                            "Час проведення",
                            "Куратори курсу"
                        ],
                        rows: [
                            {
                                elements: [
                                    {value: ["ПОНЕДІЛОК"]} as RowElement,
                                    {value: ["Advanced Grammar Lab / Підвищений курс Граматики"]} as RowElement,
                                    {value: ["16.00 – 16.45"]} as RowElement,
                                    {value: ["Бокій В.І., Дідурик А.І."]} as RowElement
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["ВІВТОРОК"]} as RowElement,
                                    {value: ["Speaking Booster (for officers) / Розмовний курс для офіцерів"]} as RowElement,
                                    {value: ["16.00 – 16.45"]} as RowElement,
                                    {value: ["Циганкова З.М., Бецько О.С"]} as RowElement
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["СЕРЕДА"]} as RowElement,
                                    {value: ["Basic Grammar Lab / Початковий курс Граматики"]} as RowElement,
                                    {value: ["16.00 – 16.45"]} as RowElement,
                                    {value: ["Шаблій О.С., Задорожна О."]} as RowElement
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["ЧЕТВЕР"]} as RowElement,
                                    {value: ["Speaking Club (for cadets) / Розмовний клуб для курсантів"]} as RowElement,
                                    {value: ["16.00 – 16.45"]} as RowElement,
                                    {value: ["Храбан Т.Є., Лемещенко А."]} as RowElement
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["П’ЯТНИЦЯ"]} as RowElement,
                                    {value: ["Pronunciation Course"]} as RowElement,
                                    {value: ["16.00 – 16.45"]} as RowElement,
                                    {value: ["Куценко М.А., Дзіман А.М."]} as RowElement
                                ]
                            } as Row,
                        ],
                    } as Table
                ]
            } as TextBlock,
            {
                textContent: [
                    "Відвідання занять буде проводитися за попереднім записом, який відкритий щоп’ятниці на кафедрі Іноземних мов у Навчальному кабінеті. Місце занять – 206 ауд."
                ],
                images: [
                    {href: "https://s3-alpha-sig.figma.com/img/e016/200f/eef5dc79bd9bc3537204c15e199cff69?Expires=1698019200&Signature=dbz0CYWBOYHhAqgIQF9l4YB7zbdgX5uRmVZ7FmLmXKcJdStz0V71Tb-7365~RUbr7NAUgKKADvpoo5vsXEz2NxkAu8e41YhfgtW5WCi9SLyHylaKDUScgUndBURsv75ZhMWg-iNhPHLxG6suoLt0pn16ifSJMDfMoGRfD~Q2cOWTmaK-5sXaaeI4PFl22cXf~soY3zljeegHVOEkZjW8OJ-Zmjn3woT87pzqXxQ6OjxGQKImj-Jc6u0RrBatZxTq1Ynk6~4tXz~mf6XZ~4jrBGMNWO~l~d3uy9HHLc7F9yNU0yR~OcrCeAZoyNxdxc266yg62YFAb115QvzycKPijQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/e016/200f/eef5dc79bd9bc3537204c15e199cff69?Expires=1698019200&Signature=dbz0CYWBOYHhAqgIQF9l4YB7zbdgX5uRmVZ7FmLmXKcJdStz0V71Tb-7365~RUbr7NAUgKKADvpoo5vsXEz2NxkAu8e41YhfgtW5WCi9SLyHylaKDUScgUndBURsv75ZhMWg-iNhPHLxG6suoLt0pn16ifSJMDfMoGRfD~Q2cOWTmaK-5sXaaeI4PFl22cXf~soY3zljeegHVOEkZjW8OJ-Zmjn3woT87pzqXxQ6OjxGQKImj-Jc6u0RrBatZxTq1Ynk6~4tXz~mf6XZ~4jrBGMNWO~l~d3uy9HHLc7F9yNU0yR~OcrCeAZoyNxdxc266yg62YFAb115QvzycKPijQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/e016/200f/eef5dc79bd9bc3537204c15e199cff69?Expires=1698019200&Signature=dbz0CYWBOYHhAqgIQF9l4YB7zbdgX5uRmVZ7FmLmXKcJdStz0V71Tb-7365~RUbr7NAUgKKADvpoo5vsXEz2NxkAu8e41YhfgtW5WCi9SLyHylaKDUScgUndBURsv75ZhMWg-iNhPHLxG6suoLt0pn16ifSJMDfMoGRfD~Q2cOWTmaK-5sXaaeI4PFl22cXf~soY3zljeegHVOEkZjW8OJ-Zmjn3woT87pzqXxQ6OjxGQKImj-Jc6u0RrBatZxTq1Ynk6~4tXz~mf6XZ~4jrBGMNWO~l~d3uy9HHLc7F9yNU0yR~OcrCeAZoyNxdxc266yg62YFAb115QvzycKPijQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/e016/200f/eef5dc79bd9bc3537204c15e199cff69?Expires=1698019200&Signature=dbz0CYWBOYHhAqgIQF9l4YB7zbdgX5uRmVZ7FmLmXKcJdStz0V71Tb-7365~RUbr7NAUgKKADvpoo5vsXEz2NxkAu8e41YhfgtW5WCi9SLyHylaKDUScgUndBURsv75ZhMWg-iNhPHLxG6suoLt0pn16ifSJMDfMoGRfD~Q2cOWTmaK-5sXaaeI4PFl22cXf~soY3zljeegHVOEkZjW8OJ-Zmjn3woT87pzqXxQ6OjxGQKImj-Jc6u0RrBatZxTq1Ynk6~4tXz~mf6XZ~4jrBGMNWO~l~d3uy9HHLc7F9yNU0yR~OcrCeAZoyNxdxc266yg62YFAb115QvzycKPijQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image
                ]
            } as TextBlock,
        ]
    } as Department,
    {
        id: 12,
        headerImg: "https://s3-alpha-sig.figma.com/img/5a5e/603d/b31b7bd78240dedeacd18fec8dccdf3f?Expires=1698019200&Signature=ZF9CAXGte44220AsSBKq1rph3KEyN4yMUmKjij1ZGf8jvBJ7SXOWPKDVJy1V-iFnmkJxYjl0DrItC0SiwoQ1Q6mlizUZE7Mbto1uEiCIN48ZxIQamXyF3v2rdhg6JZC~KD7JK9ATKIF9Nqz5NKVtkR~bA7WiAECiYcE8-nrcrWq84hEJ4e-p97Ur5NZJ1Di2CdxLyx9vKyyW2gW8LpmIUNbxOchi3ONIeo2Fs710TAk421gahmw2XSnNWftcAmBDarL63j8bKiWB9F0G858N84WdExa1zYg8xqgp5ID4jOo8S3GsBj7UCZPTyq4hQqCC44Ydg~DQcj5~pfzfDp1N-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        title: "Кафедра фізичного виховання, \n" +
            "спеціальної фізичної підготовки і спорту",
        titleTextBlock: {
            textContent: [
                "Кафедра призначена для формування та вдосконалення у військових фахівців основ теоретичних знань, практичних та організаційно-методичних навичок та умінь управління фізичним вихованням, спеціальною фізичною підготовкою, спортом і фізичною реабілітацією військовослужбовців; забезпечення необхідного рівня розвитку фізичних якостей, військово-прикладних рухових навичок та їх вдосконалення; показників функціональних та морфологічних можливостей організму; працездатності. Курсанти мають можливість проводити тренування з різних спортивних та військово-прикладних видів спорту на навчально-спортивній базі інституту, що включає:\n"
            ],
            uLists: [
                {
                    items: [
                        "спортивний зал (36х18);",
                        "зал рукопашного бою;",
                        "тренажерний зал;",
                        "методичний клас;",
                        "смуга перешкод;",
                        "гімнастичні майданчики;",
                        "майданчики для гри: волейбол, баскетбол, міні-футбол;",
                        "дистанції для бігу на короткі та довгі дистанції.",
                    ]
                } as List
            ]
        } as TextBlock,
        superior: {
            name: "БИЧІХІН Юрій Ігорович",
            rang: "полковник",
            position: "Начальник кафедри",
            img: {href: "https://s3-alpha-sig.figma.com/img/8d42/00b0/8ab036e2df04780b61c77bcc0278beef?Expires=1698019200&Signature=aMuZB6LlNu0w5gHHEd9JZP-0fZO5VNlzxCOFHafQSFXI6hKL98SCEEZvV~GaUaaRWVeHsqH07FaTiTmthpZbDfUraUdYglGTLoDcWRlWViLxcwrrV3leiXtROVZwZM1di7oVPiLrK1WE~7L5X6XY4PmrC25qQuwVknea6Qw4A2iZV9TgSNsAz~~2behgt8xDqZG5yU~GPmSah~Jje5N6vuPbqDigP7DolQ7plPSuoRa4TR1bwcreT9etDQV6nyETeOKpwiLp1rrE3pSeUzV9S6tckAXUkvCQe5RIS2Ix5soTyuCld1e7TEYbcVYm8jwNU3XHtdQYqwBQ7xEMR2qE~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image
        } as Superior,
        textBlocks: [
            {
                uLists: [
                    {
                        title: "За 2016-2017 навчальний рік кафедра підготовила спортсменів-розрядників та військовослужбовців, які виконали норми ВСК",
                        items: [
                            "МС – 1",
                            "КМС – 3",
                            "1 розряд – 62",
                            "2 розряд – 81",
                            "3 розряд – 186",
                            "Військовослужбовці, які виконали вправи ВСК : І ступеню - 62, та ІІ ступеню – 129 чол.",
                        ]
                    } as List
                ]
            } as TextBlock,
            {
                textContent: [
                    "Кафедра має сучасні спортивні тренажери для розвитку різних груп м’язів."
                ],
                images: [
                    {href: "https://s3-alpha-sig.figma.com/img/4c33/de4e/ab33dfb940880ac64f4e706d1f03486d?Expires=1698019200&Signature=mGrwXfoVYrb-6sTOyXKb1FoqmOiimxJVhhhseKLwZlIYC4lLkJzxdcGHzoARcmEy7BY00KCXLbZKxpcgOGTVtNfbTfadrr7aBbvSTNwnMwisHQ30dtthGXTC~8Gomr~22Hrvro~E3mEoKW308Yvv5gDtoxjQ1xV9iLm7VmqZDRCEtugM6WPqG5iGe0Ec8sO-ezu2kglYuizMF0U65lkyrkrMslroTwGHFWxX2iFZYBiVrfCyiAPazN3fMvb9JnknR6bL-s7mzUhGKHihMX4OyjCem~cxktw8HBvMrC01--svFim9Kdd50LlIlsYM6LrUm~xWP8UtosoANmK1GvUFNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/4c33/de4e/ab33dfb940880ac64f4e706d1f03486d?Expires=1698019200&Signature=mGrwXfoVYrb-6sTOyXKb1FoqmOiimxJVhhhseKLwZlIYC4lLkJzxdcGHzoARcmEy7BY00KCXLbZKxpcgOGTVtNfbTfadrr7aBbvSTNwnMwisHQ30dtthGXTC~8Gomr~22Hrvro~E3mEoKW308Yvv5gDtoxjQ1xV9iLm7VmqZDRCEtugM6WPqG5iGe0Ec8sO-ezu2kglYuizMF0U65lkyrkrMslroTwGHFWxX2iFZYBiVrfCyiAPazN3fMvb9JnknR6bL-s7mzUhGKHihMX4OyjCem~cxktw8HBvMrC01--svFim9Kdd50LlIlsYM6LrUm~xWP8UtosoANmK1GvUFNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/4c33/de4e/ab33dfb940880ac64f4e706d1f03486d?Expires=1698019200&Signature=mGrwXfoVYrb-6sTOyXKb1FoqmOiimxJVhhhseKLwZlIYC4lLkJzxdcGHzoARcmEy7BY00KCXLbZKxpcgOGTVtNfbTfadrr7aBbvSTNwnMwisHQ30dtthGXTC~8Gomr~22Hrvro~E3mEoKW308Yvv5gDtoxjQ1xV9iLm7VmqZDRCEtugM6WPqG5iGe0Ec8sO-ezu2kglYuizMF0U65lkyrkrMslroTwGHFWxX2iFZYBiVrfCyiAPazN3fMvb9JnknR6bL-s7mzUhGKHihMX4OyjCem~cxktw8HBvMrC01--svFim9Kdd50LlIlsYM6LrUm~xWP8UtosoANmK1GvUFNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/4c33/de4e/ab33dfb940880ac64f4e706d1f03486d?Expires=1698019200&Signature=mGrwXfoVYrb-6sTOyXKb1FoqmOiimxJVhhhseKLwZlIYC4lLkJzxdcGHzoARcmEy7BY00KCXLbZKxpcgOGTVtNfbTfadrr7aBbvSTNwnMwisHQ30dtthGXTC~8Gomr~22Hrvro~E3mEoKW308Yvv5gDtoxjQ1xV9iLm7VmqZDRCEtugM6WPqG5iGe0Ec8sO-ezu2kglYuizMF0U65lkyrkrMslroTwGHFWxX2iFZYBiVrfCyiAPazN3fMvb9JnknR6bL-s7mzUhGKHihMX4OyjCem~cxktw8HBvMrC01--svFim9Kdd50LlIlsYM6LrUm~xWP8UtosoANmK1GvUFNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                ]
            } as TextBlock
        ]
    } as Department,
    {
        id: 13,
        headerImg: "https://s3-alpha-sig.figma.com/img/00cc/a057/0c1a4c3eed0977a1932bfe733bf36cf3?Expires=1698019200&Signature=dwPQg-fJLhHzdZbb3cxttrQ6e9G1-TkzfY6lltiuUvtzDuy1WvchSlDlIxmrTKVdR8tvbdaFttkJIG3w~4OjLUH2VGgsGK89er2LJoJoEbk3tShGxcbnV9ny8cygrwMBnVfX6dLrC-78WHvzMYYgFlU1DCUULnVOpp4NOZjJ8fYkcqig-UGG~PgVhF1b1F~qmi9TUqTxbPA0OC5qByl0F52H4vjjCnMaP9BvI0yngo6eoEhKCBkUpc7MkS7mvqrh-dmYPcKgjKRnS2IKb42NzIXVPJplfvdzCqV834kDpzkAsn7QmgawefjbX4JEI9xE0OTy76M1WHMDvp~ssQF1ag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        title: "Кафедра військово-гуманітарних дисциплін",
        titleTextBlock: {
            textContent: [
                "Кафедра призначена для провадження освітньої, методичної та наукової діяльності за всіма напрями підготовки та спеціальностями (спеціалізаціями) інституту по гуманітарним та соціально-економічним дисциплінам."
            ]
        } as TextBlock,
        superior: {
            name: "САЄНКО Олександр Григорович",
            position: "Начальник кафедри",
            rang: "полковник",
            achievements: [
                "кандидат технічних наук"
            ],
            img: {href: "https://s3-alpha-sig.figma.com/img/1bc6/ea31/5f16cda0ffe19f989285dccd58b9955b?Expires=1698019200&Signature=LTxOsExbNvmxRb~CtLeIdQYrlYEvkuNYI8MmbjGE0II-qvQYtYK~P4QwLj230Jz3n1D3HGcK0MmrloxVqcmEC555ZTkZLVE0hfRD0O0ojBM~87hmOFuy07x6Rn0emPawYaQR51tae7fWOn6XiUwK8Ckvih7wxhT2~0aDCfukHHV77g29Cls6dUvcYBwHjIHz0aiC8NQDydndNuq8LGbrJaVV62sWj~ZcTFkLc1w3Lss6kvyV-3hy8LxXEE99fRzcm3dhRxfPMhRINuNr8~MxyUGzcZA25SEMqe8x7vLG8cyB2ol~hdQ8R7OWkpFiANR7d-zOdWzaxay5wB36oALBfQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image
        } as Superior,
        textBlocks: [
            {
                uLists: [
                    {
                        title: "Основні дисципліни кафедри:",
                        items: [
                            "Історія України та української культури;",
                            "Українська мова за професійним спрямуванням;",
                            "Філософія (філософія, релігієзнавство, логіка, етика, естетика);",
                            "Політологія та соціологія;",
                            "Правознавство (у тому числі основи військового законодавства та міжнародне гуманітарне право);",
                            "Військова педагогіка та психологія;",
                            "Морально-психологічне забезпечення підготовки та застосування Збройних Сил України.",
                        ]
                    } as List,
                    {
                        title: "Характеристика науково-педагогічних працівників кафедри:",
                        items: [
                            "Докторів наук – 1;",
                            "Кандидатів наук – 5;",
                            "Професорів – 1;",
                            "Доцентів – 3.",
                        ]
                    } as List,
                    {
                        title: "У своєму складі кафедра має навчальний кабінет, який дозволяє курсантам (студентам), ад’юнктам (здобувачам) під час самостійної роботи більш якісно готуватись до навчальних занять та займатись науковою роботою. У своєму розпорядженні він має:",
                        items: [
                            "більш 800 сучасних підручників навчального, наукового та навчально-методичного характеру;",
                            "100% підручників у електронному вигляді, які були віданні кафедрою;",
                            "електронну базу законодавства України щодо військових питань.",
                        ]
                    } as List,
                ]
            } as TextBlock,
            {
                images: [
                    {href: "https://s3-alpha-sig.figma.com/img/1311/59d5/69159600e6f645bc180b804098dfa182?Expires=1698019200&Signature=LR54opaGw0PjWjxzqVo1764dB7PpEvokS0D-i4SUVExxNdiibgNrmOZvFt20CoDSHgYLqS44i-VzelaNhvAJMx4Gxz6nTMyIlqYt8a--XyZBTH-mFa38yRPpA0NORDUe~qYKwReQ18RkNjpZns8~sNyNrZm63tf2xXdNRBD~4OfEcE3koO12OckZfTES9BDGbiSMzDghe7mJ~Szou~yjiqgi1JyZi5Yhv3bLrVfh1HrmiN57M2mzL8-7J6Ab6W6Eswb3Z-owrLcWRYkh7iHbDso2a~v6Zz9cIfKKar547DZe3bXhlD~GnUx2yN9OH6PYauibUKqbvp0U8sNZaXT-9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/1311/59d5/69159600e6f645bc180b804098dfa182?Expires=1698019200&Signature=LR54opaGw0PjWjxzqVo1764dB7PpEvokS0D-i4SUVExxNdiibgNrmOZvFt20CoDSHgYLqS44i-VzelaNhvAJMx4Gxz6nTMyIlqYt8a--XyZBTH-mFa38yRPpA0NORDUe~qYKwReQ18RkNjpZns8~sNyNrZm63tf2xXdNRBD~4OfEcE3koO12OckZfTES9BDGbiSMzDghe7mJ~Szou~yjiqgi1JyZi5Yhv3bLrVfh1HrmiN57M2mzL8-7J6Ab6W6Eswb3Z-owrLcWRYkh7iHbDso2a~v6Zz9cIfKKar547DZe3bXhlD~GnUx2yN9OH6PYauibUKqbvp0U8sNZaXT-9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/1311/59d5/69159600e6f645bc180b804098dfa182?Expires=1698019200&Signature=LR54opaGw0PjWjxzqVo1764dB7PpEvokS0D-i4SUVExxNdiibgNrmOZvFt20CoDSHgYLqS44i-VzelaNhvAJMx4Gxz6nTMyIlqYt8a--XyZBTH-mFa38yRPpA0NORDUe~qYKwReQ18RkNjpZns8~sNyNrZm63tf2xXdNRBD~4OfEcE3koO12OckZfTES9BDGbiSMzDghe7mJ~Szou~yjiqgi1JyZi5Yhv3bLrVfh1HrmiN57M2mzL8-7J6Ab6W6Eswb3Z-owrLcWRYkh7iHbDso2a~v6Zz9cIfKKar547DZe3bXhlD~GnUx2yN9OH6PYauibUKqbvp0U8sNZaXT-9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/1311/59d5/69159600e6f645bc180b804098dfa182?Expires=1698019200&Signature=LR54opaGw0PjWjxzqVo1764dB7PpEvokS0D-i4SUVExxNdiibgNrmOZvFt20CoDSHgYLqS44i-VzelaNhvAJMx4Gxz6nTMyIlqYt8a--XyZBTH-mFa38yRPpA0NORDUe~qYKwReQ18RkNjpZns8~sNyNrZm63tf2xXdNRBD~4OfEcE3koO12OckZfTES9BDGbiSMzDghe7mJ~Szou~yjiqgi1JyZi5Yhv3bLrVfh1HrmiN57M2mzL8-7J6Ab6W6Eswb3Z-owrLcWRYkh7iHbDso2a~v6Zz9cIfKKar547DZe3bXhlD~GnUx2yN9OH6PYauibUKqbvp0U8sNZaXT-9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                ]
            } as TextBlock,
        ]
    } as Department,
    {
        id: 14,
        headerImg: "https://s3-alpha-sig.figma.com/img/fd5c/ae26/f34d5e70ee962e123625346638f19b4e?Expires=1698019200&Signature=LEGBY5ZPLEWjwKMUiZJ66OpvMnpJ3i69YV-gD9pt~t0C6HyG7TNuQEtjIwHM1jc6ewCJr4TlwlEfzqgR0qgD73bspyWOC8FcpsQ~t3UZCDiOFRWfcZSW5Sg~qw1a44NGc6mgpY2molKco-BIipRvj7XH695paGS2GQS-NdCrFZGJmb5YCni0Z34~RUJbCZR2AgWdf7JhL2HJ7~v3ZAL6c8WD-QJA66L~mdG6HTdwFgb9DJWLAeWfX8F7E20vPabIGU8W3Sfshg88SkN9VWQX1bgXpPbIJ4Gd4-MwrSnf2gsplsrPsdgIZmpEC7RnRxnqECSabbZUECoqdG-IlC2COQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        title: "Кафедра математики та фізики",
        titleTextBlock: {
            textContent: [
                "Кафедра забезпечує викладання фундаментальних <strong>математичних дисциплін</strong>(«Вища математика», «Теорія ймовірностей, імовірнісні процеси та математична статистика», «Теорія прийняття рішень») і <strong>фізики</strong> («Електрика і магнетизм», «Основи електродинаміки», «Основи квантової фізики», «Основи квантової механіки», «Фізика твердового тіла», «Фізика напвпровідників», «Контактні явища», «Квантова електроніка», «Ядерна фізика») для курсантів (студентів заочної форми навчання) усіх спеціальностей підготовки на трьох факультетах. З метою забезпечення високої якості навчального процесу підготовки курсантів, навчання на кафедрі організоване з урахуванням освітніх потреб учасників навчального процесу в частині поглибленого опанування програм навчальних дисциплін, як базових, для подальшого вивчення шляхом поєднання лекційного курсу з лабораторними та практичними заняттями, де кожний курсант активно включається в рішення поставлених завдань, а одержані результати запроваджує в практику навчання."
            ]
        } as TextBlock,
        superior: {
            img: {href: "https://s3-alpha-sig.figma.com/img/eb98/0cec/61b0f1b32e8294c4f24f07356e425d9f?Expires=1698019200&Signature=KeLafmlLGQDqiMrJOFZlSJQ9SguIARltN6WzWFTFpmAe3aHS54rpkOpyHIli~VHgIOptfWOli1ot1t3Lb0kMMsLSs1tgMsPYNcnt7Rk~oP4G~efOwvWY19SyeyM-5cEIB~z87vFgZyN-pZufDfYPNr4bf~WXvHKlvaIv8iKCjIPbO4fwt3IJjx8tL2g4senepQbwHyDKC~YcUzteNRI7pfQefWeK2TSyP6Hj79SSYjWJbY5ojTSocwbmOMZRPlMrqQHKPUX1Oo8Ma8FZyRQEds502tmI9Cjvnw4srd1OCxpZPwOdwWLYqpHYbQD1G7Dp-VwWukrKoMJTw1f5ch902w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
            name: "РУДОМІНО-ДУСЯТСЬКА Ірина Анатоліївна",
            position: "Завідувач кафедри математики та фізики",
            rang: "Пр. ЗСУ ",
            achievements: [
                "кандидат фізико-математичних наук, доцент"
            ]
        } as Superior,
        textBlocks: [
            {
                textContent: [
                    "Протягом навчання курсанти отримують фундаментальну математичну підготовку, що поєднується з вмінням ставити, аналізувати і ефективно розв’язувати сучасні прикладні задачі та високими практичними навичками у подальшому програмуванні, вирішуванні завдання, які пов’язані з обробкою та аналізом даних.\n",
                    "Метою кафедри є надання курсантам знань, які є необхідними для підготовки фахівців у галузях Інформаційних технологій, Електроніки та телекомунікації, Воєнних наук, національної безпеки, безпеки державного кордону.\n",
                    "Стратегічним завданням кафедри залишається розробка дидактичних матеріалів, електронних посібників до занять з усіх навчальних дисциплін кафедри.\n",
                    "На кафедрі працює 11 викладачів, з них 1 професор, кандидат фізико-математичних наук, доктор педагогічних наук, 4 доцента, кандидата фізико-математичних наук.",
                    "Методичні матеріали (вища математика)\nМетодичні матеріали (фізика)",
                ]
            } as TextBlock
        ]
    } as Department,
    {
        id: 15,
        headerImg: "https://s3-alpha-sig.figma.com/img/0ca1/4f1f/173368a6df3c319dbbda928d8b1ebdaf?Expires=1698019200&Signature=pE85aoifMBlaiqnqDxMcYwfHUMsZW4nHPx8ZxiJfu8E2YdKiXLAxNKMVnAC7Kr~j3QDYS9Km1cMMSLQ9-CG0nXjFexiOA20mAbtNBUujvxGOOsTDHBtmxflnpOWwXiAl3ReTNJJ9Mdu5LFLZEEzlbmJkSywPmuN8gVSMQNTc585HKTd-RaYq5w0DcEFrkN4fXQ2fyYimypcaF1E9bcEXqqIE8sn6AP1SHQa~mkPkjg9eMA8nrBYIQUMc2TuDhhhNT57xyzcMae5w577MVv7abnvPTedPN5qWDh8IcJRpzFwCdFdcFHjH0458NOG7zHRBeEWy-Sk-aE7K36odKHdWCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        title: "Кафедра військової підготовки",
        titleTextBlock: {
            textContent: [
                "Кафедра військової підготовки Військового інституту телекомунікацій та інформатизації здійснює підготовку громадян України за програмою підготовки офіцерів запасу за державним замовлення та за кошти фізичних осіб для Головного Управління військ зв’язку та інформаційних систем, Повітряних Сил Збройних Сил України,Військово-Морських Сил Збройних Сил України, Сухопутних військ Збройних Сил України, Головного управління по роботі з особовим складом Збройних Сил України, Департаменту фінансів Міністерства Оборони України, Центрального управління захисту інформації та криптології ГШ Збройних Сил України за 14 військово - обліковими спеціальностями."
            ],
        } as TextBlock,
        superior: {
            rang: "полковник",
            name: "ТКАЧЕНКО Дмитро Віталійович",
            position: "Начальник кафедри",
            img: {href: "https://s3-alpha-sig.figma.com/img/eb98/0cec/61b0f1b32e8294c4f24f07356e425d9f?Expires=1698019200&Signature=KeLafmlLGQDqiMrJOFZlSJQ9SguIARltN6WzWFTFpmAe3aHS54rpkOpyHIli~VHgIOptfWOli1ot1t3Lb0kMMsLSs1tgMsPYNcnt7Rk~oP4G~efOwvWY19SyeyM-5cEIB~z87vFgZyN-pZufDfYPNr4bf~WXvHKlvaIv8iKCjIPbO4fwt3IJjx8tL2g4senepQbwHyDKC~YcUzteNRI7pfQefWeK2TSyP6Hj79SSYjWJbY5ojTSocwbmOMZRPlMrqQHKPUX1Oo8Ma8FZyRQEds502tmI9Cjvnw4srd1OCxpZPwOdwWLYqpHYbQD1G7Dp-VwWukrKoMJTw1f5ch902w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
        } as Superior,
        textBlocks: [
            {
                textContent: [
                    "Нормативно-правова база військової підготовки\n",
                    "Закон України \"Про військовий обов'язок і військову службу\" (витяг)\n",
                    "Постанова Кабінету Міністрів України від 1.02.2012 №48 (зі змінами) \"Про затвердження Порядку проведення військової підготовки громадян України за програмою підготовки офіцерів запасу\"\n",
                    "Наказ №719/1289 від 14.12.2015 \"Про затвердження Інструкції про організацію військової підготовки громадян України за програмою підготовки офіцерів запасу\"\n",
                ]
            } as TextBlock,
            {
                textContent: [
                    "Рівень підготовки науково педагогічних працівників,стан озброєння та військової техніки, навчально-матеріальна база дозволяють формувати - особистості військового фахівця вищого рівня,здатного застосовувати бойову техніку в складних умовах сучасної війни; розвиток інженерного мислення і дослідницьких якостей,вмінь і навиків працювати в складі групи,керувати підлеглими під час експлуатації та бойового застосування техніки та озброєння.\n"
                ]
            } as TextBlock,
            {
                title: "ВІЙСЬКИВИЙ ІНСТИТУТ ТЕЛЕКОМУНІКАЦІЙ ТА ІНФОРМАТИЗАЦІЇ",
                uLists: [
                    {
                        title: "Набір 2018 року буде здійснюватися для підготовки за програмою офіцерів запасу за військово-обліковими спеціальностями:\n",
                        items: [
                            "Організація захисту інформації та кібернетична безпека в інформаційно-комунікаційних системах.\n",
                            "Застосування змішаних з’єднань, військових частин і підрозділів (крім підрозділів і військових частин зв’язку та радіотехнічного забезпечення авіації).\n",
                            "Спеціальний зв'язок. Контроль за режимом секретності.\n",
                            "Математичне та програмне забезпечення функціонування автоматизованих систем.\n",
                            "Експлуатація та ремонт наземної апаратури радіозв’язку різної потужності.\n",
                            "Технічне забезпечення функціонування автоматизованих систем управління.\n",
                            "Експлуатація та ремонт автомобільної техніки і гусеничних тягачів.\n",
                            "Соціальна психологія.\n",
                        ]
                    } as List
                ]
            } as TextBlock,
            {
                textContent: [
                    "До військової підготовки можуть залучатись здобувачі вищої освіти незалежно від форми навчання у вищих навчальних закладах, у тому числі і військовослужбовці рядового складу, сержантського та старшинського складу, які проходять військову службу за контрактом та громадяни України, які мають освітній ступінь вищої освіти не нижче бакалавра, якщо їм на початок військової підготовки не виповнилося 40 років.\n",
                    "<strong>Увага!</strong> Відповідно до пункту 173 Положення про проходження громадянами України військової служби у Збройних Силах України до навчання можуть залучатися військовослужбовці, які підписали другий контракт та мають дозвіл від командира з'єднання і вище.\n",
                    "<strong>Вартість навчання: 4 500 грн./семестр (2 роки навчання - 18 000 грн.).\n</strong>",
                    "Після закінчення навчання та складання випускного іспиту присвоюється військове звання „молодший лейтенант запасу” Збройних Сил України."
                ],
                images: [
                    {href: "https://s3-alpha-sig.figma.com/img/b179/34ca/43fa4498829c440415e8de0a23370ee3?Expires=1698019200&Signature=A2u6oAJw~ypnW4Se2Rvz7F-dOEUt5dSSBsQ0RXW7I1Kp8iZ2aBhA5hRbtp-CyVgT5s0xu5H9Q71ebZZMy3ZGBmJiNvFGY2~6DeuZS8cNSYKOfe9GJ5Ugv-RGmSQZWmcFgOvadFxkp6VJdffY1~u2lE2mwyvsmRsXTO5-xJEe7hbFeKv3ir9XKqk~9ddZjc-NY7u8ZACBdQaDZQQrkftO4ZOuSwg~1s18vvG2y-ZGlrU~TsrY~8z1ouxFr7tXzaPtW3QRH~xh-WGknlPWrtytlz6sL0G6hdt7AmcDGlIzue7Nl0lKYefGGR32RKytDzXmf32ZOv6ytLmElxXcH8HXYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/b179/34ca/43fa4498829c440415e8de0a23370ee3?Expires=1698019200&Signature=A2u6oAJw~ypnW4Se2Rvz7F-dOEUt5dSSBsQ0RXW7I1Kp8iZ2aBhA5hRbtp-CyVgT5s0xu5H9Q71ebZZMy3ZGBmJiNvFGY2~6DeuZS8cNSYKOfe9GJ5Ugv-RGmSQZWmcFgOvadFxkp6VJdffY1~u2lE2mwyvsmRsXTO5-xJEe7hbFeKv3ir9XKqk~9ddZjc-NY7u8ZACBdQaDZQQrkftO4ZOuSwg~1s18vvG2y-ZGlrU~TsrY~8z1ouxFr7tXzaPtW3QRH~xh-WGknlPWrtytlz6sL0G6hdt7AmcDGlIzue7Nl0lKYefGGR32RKytDzXmf32ZOv6ytLmElxXcH8HXYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/b179/34ca/43fa4498829c440415e8de0a23370ee3?Expires=1698019200&Signature=A2u6oAJw~ypnW4Se2Rvz7F-dOEUt5dSSBsQ0RXW7I1Kp8iZ2aBhA5hRbtp-CyVgT5s0xu5H9Q71ebZZMy3ZGBmJiNvFGY2~6DeuZS8cNSYKOfe9GJ5Ugv-RGmSQZWmcFgOvadFxkp6VJdffY1~u2lE2mwyvsmRsXTO5-xJEe7hbFeKv3ir9XKqk~9ddZjc-NY7u8ZACBdQaDZQQrkftO4ZOuSwg~1s18vvG2y-ZGlrU~TsrY~8z1ouxFr7tXzaPtW3QRH~xh-WGknlPWrtytlz6sL0G6hdt7AmcDGlIzue7Nl0lKYefGGR32RKytDzXmf32ZOv6ytLmElxXcH8HXYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/b179/34ca/43fa4498829c440415e8de0a23370ee3?Expires=1698019200&Signature=A2u6oAJw~ypnW4Se2Rvz7F-dOEUt5dSSBsQ0RXW7I1Kp8iZ2aBhA5hRbtp-CyVgT5s0xu5H9Q71ebZZMy3ZGBmJiNvFGY2~6DeuZS8cNSYKOfe9GJ5Ugv-RGmSQZWmcFgOvadFxkp6VJdffY1~u2lE2mwyvsmRsXTO5-xJEe7hbFeKv3ir9XKqk~9ddZjc-NY7u8ZACBdQaDZQQrkftO4ZOuSwg~1s18vvG2y-ZGlrU~TsrY~8z1ouxFr7tXzaPtW3QRH~xh-WGknlPWrtytlz6sL0G6hdt7AmcDGlIzue7Nl0lKYefGGR32RKytDzXmf32ZOv6ytLmElxXcH8HXYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/b179/34ca/43fa4498829c440415e8de0a23370ee3?Expires=1698019200&Signature=A2u6oAJw~ypnW4Se2Rvz7F-dOEUt5dSSBsQ0RXW7I1Kp8iZ2aBhA5hRbtp-CyVgT5s0xu5H9Q71ebZZMy3ZGBmJiNvFGY2~6DeuZS8cNSYKOfe9GJ5Ugv-RGmSQZWmcFgOvadFxkp6VJdffY1~u2lE2mwyvsmRsXTO5-xJEe7hbFeKv3ir9XKqk~9ddZjc-NY7u8ZACBdQaDZQQrkftO4ZOuSwg~1s18vvG2y-ZGlrU~TsrY~8z1ouxFr7tXzaPtW3QRH~xh-WGknlPWrtytlz6sL0G6hdt7AmcDGlIzue7Nl0lKYefGGR32RKytDzXmf32ZOv6ytLmElxXcH8HXYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/b179/34ca/43fa4498829c440415e8de0a23370ee3?Expires=1698019200&Signature=A2u6oAJw~ypnW4Se2Rvz7F-dOEUt5dSSBsQ0RXW7I1Kp8iZ2aBhA5hRbtp-CyVgT5s0xu5H9Q71ebZZMy3ZGBmJiNvFGY2~6DeuZS8cNSYKOfe9GJ5Ugv-RGmSQZWmcFgOvadFxkp6VJdffY1~u2lE2mwyvsmRsXTO5-xJEe7hbFeKv3ir9XKqk~9ddZjc-NY7u8ZACBdQaDZQQrkftO4ZOuSwg~1s18vvG2y-ZGlrU~TsrY~8z1ouxFr7tXzaPtW3QRH~xh-WGknlPWrtytlz6sL0G6hdt7AmcDGlIzue7Nl0lKYefGGR32RKytDzXmf32ZOv6ytLmElxXcH8HXYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Детальну інформацію дивіться:\n</strong>",
                    "Правила прийому громадян України для навчання за програмою підготовки офіцерів запасу на кафедрі військової підготовки Військового інституту телекомунікацій та інформатизації (2019 рік)\n",
                    "Документи (анкети) необхідні для вступу\n",
                    "Графік проведення конкурсного відбору громадян України, які виявили бажання проходити військову підготовку у Військовому інституті телекомунікацій та інформатизації за програмою підготовки офіцерів запасу у 2018 році"
                ]
            } as TextBlock,
            {} as TextBlock,


        ]
    } as Department,
]

export const units: Unit[] = [
    {
        id: 17,
        headerImg: "https://s3-alpha-sig.figma.com/img/a722/7be7/af0d3e586a0a0040de0d313c62f64a86?Expires=1698019200&Signature=inxRNschpRmzUvtZ5LdN3iTDFt1rybRev3PXwayfP-9ObJ2WZLVHnMQalXxjiq5jddgt40nh6j-9u1zSOZ~rHcyr2NEwPz1KAVyE0vNG~HeZX~6KZMfOVnUFGNbIW0TbZC-KyiIkzDU7aAJSTKIm3SkDF--W4KkNsvwO1KNd~WNqXMfvGMBtZj-GfoOrwYPL61L7snxrOpZC6~Ug0E-0-xGpNWAfqoLbOJ~n9aGILdNdq-gH7h028liZO1zIclPsAoctT065CLiHCmbtfUYOwXJlMhtAFuz4wzhhPqtpxRN6r-cvMXPU6EbYzbF-tHdyz1Chnjf6Apwm0RRc5xGIQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        title: "Науковий центр зв’язку та інформатизації",
        titleTextBlock: {
            textContent: [
                "Науковий центр зв’язку та інформатизації ВІТІ відповідно до директиви Міністра оборони України від 30.08.07 № 7 визначений головною науковою установою в галузі дослідження проблем розвитку зв'язку та автоматизації управління військами, наукового супроводження розробок техніки зв'язку та автоматизації управління військами. НЦЗІ ВІТІ визначений базовою організацією з військової стандартизації техніки зв'язку і автоматизації управління військами відповідно до Наказу начальника Генерального штабу Збройних Сил України від 08.01.03 № 1."
            ]
        } as TextBlock,
        superior: {
            position: "Начальник наукового центру зв'язку та інформатизації",
            rang: "полковник",
            name: " КОЛАЧОВ Сергій Петрович",
            img: {href: "https://s3-alpha-sig.figma.com/img/355c/14a8/ed5f3a04159810242d8c7f4daca9b740?Expires=1697414400&Signature=pYbgUtQuj3fOqH2ERhS3vqPvpw6UCjpScaVH-m1qnwgPEFV8Ua7UP30GhmpLaDoJPospS6dJfP-~THZVhvw83f1GGqlrL8C~Y2P3XKP-lnHfh~wqlaYqki1v8THBxeAW5nCqkp3VvXYZbCt8N-6OLV9ShlMi1eqepaEI-nZAF95JdxXEQo6F4Z-nplemCbM2rrQDN2AQQgQh~X2cOC4EN2nCwie6L5mRiuPrjaG1Z5QSiD-aTFRrS0mvW9Sjtw76YIMC-Q7CpWRRAEFc49dv4SxhkTTQirFEJcvOJk3of2qbDTLBlnQ0iu6sJT4WFXfrqdIPKBpWHp1TldlDuX8qvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
            achievements: [
                "кандидат технічних наук ",
                "старший науковий співробітник",
                "участник бойових дій"
            ]
        } as Superior,
        textBlocks: [
            {
                textContent: [
                    "Основним напрямом діяльності НЦЗІ ВІТІ є виконання НДДКР, відпрацювання оперативних постановок, наукове супроводження та впровадження результатів дослідно-конструкторських робіт.\n",
                    "Основна мета діяльності НЦЗІ ВІ ТІ- забезпечення реалізації державної політики у сфері науки, науково-технічної, інноваційної діяльності та інтелектуальної власності в системі Міністерства освіти і науки та Міністерства оборони України, інших галузевих міністерств."
                ],
                images: [
                    {href: "https://s3-alpha-sig.figma.com/img/5e4b/6d13/492de43aa40cde2b85a8f1ee49dc0ce7?Expires=1698019200&Signature=hj~ieIjOGPNZ7DBNcyTAkngCuXNgqkJZWrXMGWTAFg6JsH0OYO37O8wgL~r5PG2gCsm-6LwfDs5zWuhKZom-K5pU5tEBLsmCkcJZ~2R61Y0RZxSD21wuokbks3zXO-u2CVzCQFwux0z4eBeO~SpcKxCYcU7tmSqGDmFZExO9c3P-TCJptOzNQ4dwZ2tmp9hMGTZBoQPXQdJRwAIKS6nmdurETsl7OLejjwuPHtOr~J9QJVtLzJSzcVELx02a77nqlR96bYvHBC4IM6gC2Qrl6WnBOY4RnXMHlPHyF7s7NK-oHmxi78k4xWrpYi9Qj7gjadXb2zwc7T6quT1YVyZf5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/5e4b/6d13/492de43aa40cde2b85a8f1ee49dc0ce7?Expires=1698019200&Signature=hj~ieIjOGPNZ7DBNcyTAkngCuXNgqkJZWrXMGWTAFg6JsH0OYO37O8wgL~r5PG2gCsm-6LwfDs5zWuhKZom-K5pU5tEBLsmCkcJZ~2R61Y0RZxSD21wuokbks3zXO-u2CVzCQFwux0z4eBeO~SpcKxCYcU7tmSqGDmFZExO9c3P-TCJptOzNQ4dwZ2tmp9hMGTZBoQPXQdJRwAIKS6nmdurETsl7OLejjwuPHtOr~J9QJVtLzJSzcVELx02a77nqlR96bYvHBC4IM6gC2Qrl6WnBOY4RnXMHlPHyF7s7NK-oHmxi78k4xWrpYi9Qj7gjadXb2zwc7T6quT1YVyZf5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                ]
            } as TextBlock,
            {
                textContent: [
                    "На НЦЗІ ВІТІ покладаються завдання щодо планування, організації і безпосереднього здійснення всіх видів і форм наукової та науково-технічної діяльності з проблем воєнної науки на замовлення (за договорами, оперативними завданнями) органам державної виконавчої влади, структурних підрозділів центрального апарату Міністерства оборони України, Генерального штабу Збройних Сил України і видів Збройних Сил України, органів місцевого самоврядування, підприємств, установ і організацій."
                ],
                uLists: [
                    {
                        title: "<strong>Основні завдання діяльності Наукового центру:\n</strong>",
                        items: [
                            "створення ідеології і концептуальних засад побудови інформаційних систем Збройних Сил України;\n",
                            "дослідження проблем розвитку теорії управління Збройними Силами України, шляхів удосконалення системи управління військами (силами);\n",
                            "визначення перспективних напрямків розвитку систем, комплексів (засобів) спеціального зв’язку, контролю безпеки зв’язку;\n",
                            "проведення науково-технічної експертизи наукових та науково-прикладних результатів з питань оцінки відповідності проектних рішень тактико-технічним завданням;\n",
                            "дослідження проблем функціонування та розвитку систем та технологій зв’язку;\n",
                            "розробки методологічного апарату оцінки властивостей інформаційних систем спеціального призначення;\n",
                            "дослідження перспективних напрямків розвитку технічного забезпечення систем зв’язку та автоматизації і визначення шляхів їх реалізації;\n",
                            "проведення державної експертизи у сфері технічного захисту інформації;\n",
                            "забезпечення наукової та науково-технічної взаємодії ВІТІ ДУТ з іншими науковими організаціями і освітніми установами України та іноземних держав;\n",
                            "забезпечення в межах своєї компетенції державної політики у сфері охорони та захисту державної таємниці, інформації з обмеженим доступом, що є власністю держави, та службової інформації, яка згідно з законодавством не підлягає розголошенню;\n",
                            "дослідження проблем технічної експлуатації систем (комплексів, засобів) зв’язку та автоматизації Збройних Сил України;\n",
                            "виконання робіт із забезпечення єдності вимірювань у сфері військового управління та зв’язку;\n",
                            "участь у розробці та удосконаленні інформаційної інфраструктури Збройних Сил України;\n",
                            "участь у перепідготовці та підвищенні кваліфікації кадрів;\n",
                            "підготовка кадрів вищої кваліфікації через аспірантуру та докторантуру;\n",
                            "залучення до науково-технічної діяльності військовослужбовців та працівників Збройних Сил України у відповідності до чинного законодавства;\n",
                            "проведення НДДКР, тематичних досліджень щодо розробки систем (комплексів, засобів) криптографічного захисту секретної та конфіденційної інформації;\n",
                            "сертифікація систем, технічних засобів та послуг зв’язку, які призначені для застосування у Збройних Силах України;\n",
                            "створення суб'єктам наукової і науково-технічної діяльності необхідних умов, які стимулюють розробку технічних і технологічних нововведень, забезпечують скорочення інноваційного циклу «наука – виробництво»;\n",
                            "участь у проведенні оглядів-конкурсів на кращу науково-технічну розробку;\n",
                            "оновлення експериментальної та матеріально-технічної бази за рахунок коштів, отриманих для виконання окремих конкретних доручень від підприємств, організацій чи фізичних осіб, а також від інших бюджетних установ;\n",
                            "участь у проведенні науково-технічних конференцій, семінарів, виставок, презентацій тощо;\n",
                            "підготовка та поширення рекламних матеріалів НДДКР;\n",
                            "нормативно-методичне та інформаційно-довідкове забезпечення науково-технічної діяльності ВІТІ ДУТ, структурних підрозділів центрального апарату Міністерства оборони України, Генерального штабу Збройних Сил України і видів Збройних Сил України з проблем розвитку зв'язку та автоматизації Збройних Сил України;\n",
                            "визначення та обґрунтування шляхів та напрямків досягнення сумісності системи зв'язку та інформатизації Збройних Сил України з системами зв'язку та інформатизації Збройних Сил країн НАТО, країн-партнерів Альянсу, інших іноземних держав;\n",
                            "забезпечення інтеграції військової науки та військової освіти;\n",
                            "розроблення оперативно-тактичних та тактико-технічних вимог до перспективних систем зв'язку та вузлів зв'язку, окремих комплексів, зразків, засобів зв'язку та автоматизації;\n",
                            "участь у випробуваннях зразків засобів зв’язку та автоматизації;",
                        ]
                    } as List,
                    {
                        title: "Наукове супроводження:\n",
                        items: [
                            "заходів інтеграції системи управління Збройними Силами України в єдину систему загальнодержавного управління, створення умов для входження її в інформаційні структури європейської та трансатлантичної безпеки на основі використаної єдиних міжнародних стандартів;\n",
                            "заходів реалізації міжнародного військово-технічного співробітництва;\n",
                            "реалізації заходів оборонного розвитку Загальнодержавної національної космічної програми України на 2007-2011 роки;\n",
                            "НДДКР з питань технічного та криптографічного захисту інформації Збройних Сил України;\n",
                            "створення цифрової інтегральної мережі зв'язку Збройних Сил України, інтегрованої до телекомунікаційних мереж України;\n",
                            "проведення наукових досліджень на навчаннях та інших заходах оперативної, мобілізаційної і бойової підготовки"
                        ]
                    } as List,
                ],
                images: [
                    {href: "https://s3-alpha-sig.figma.com/img/3d05/db72/51a54467c0b792e82f750fd6f8474304?Expires=1698019200&Signature=iU0GXxsi4uw-01il--iRJdxt6LMvvGWphpt5nOBd0~JWkq8Cq21EIfQaHgwfKc5URHSfM4-qwwOwnxWtwdUvAj2b~4EEOz8hsRzhRFPyUkX16aNomH6oG53YVOQ1TBdWBBtrN-19euHa-SIexmH3luWGhlIp2IsNWkvenmpQP7~l3Q4IGsMRC2z2xaFK-OKWNTW6WREcUfISFrjE9H9BVv2gWW5JOIG9FWVtgZmdyYphUJr0Qx1czhTRemRhbdToTX5sHiCFt1-0XkvW--AsCHKLHos2Ix8K4PLS3x878i1PWTYRsMPkY8UtZ7wBk57FolkeIR56y1lh4-ikspb70Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                    {href: "https://s3-alpha-sig.figma.com/img/3d05/db72/51a54467c0b792e82f750fd6f8474304?Expires=1698019200&Signature=iU0GXxsi4uw-01il--iRJdxt6LMvvGWphpt5nOBd0~JWkq8Cq21EIfQaHgwfKc5URHSfM4-qwwOwnxWtwdUvAj2b~4EEOz8hsRzhRFPyUkX16aNomH6oG53YVOQ1TBdWBBtrN-19euHa-SIexmH3luWGhlIp2IsNWkvenmpQP7~l3Q4IGsMRC2z2xaFK-OKWNTW6WREcUfISFrjE9H9BVv2gWW5JOIG9FWVtgZmdyYphUJr0Qx1czhTRemRhbdToTX5sHiCFt1-0XkvW--AsCHKLHos2Ix8K4PLS3x878i1PWTYRsMPkY8UtZ7wBk57FolkeIR56y1lh4-ikspb70Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
                ]

            } as TextBlock,
            {
                textContent: [
                    "<strong>Можливі напрямки надання наукових послуг НЦЗІ ВІТІ</strong>",
                    "Перелік платних послуг, що можуть надаватися за напрямками захисту інформації, електромагнітна сумісність радіоелектронних засобів, автоматизації, зв’язку, кібернетичного захисту"
                ],
                uLists: [
                    {
                        title: "Наукова та науково-технічна експертиза:\n",
                        items: [
                            "результатів виконання наукових і науково-технічних програм, інноваційних програм щодо розвитку озброєння і військової техніки;\n",
                            "результатів виконання ініціативних НДДКР;\n",
                            "дисертаційних досліджень, науково-технічної документації на раціоналізаторські пропозиції, винаходи;\n",
                            "ефективності науково-технічних та інноваційних проектів;"
                        ]

                    } as List,
                    {
                        title: "<strong>Перелік платних послуг, що можуть надаватися за напрямком захисту інформації:\n</strong>",
                        items: [
                            "створення КТЗІ\n",
                            "випробування та атестація КТЗІ\n",
                            "пошук закладних пристроїв\n",
                            "створення КСЗІ\n",
                            "проведення науково-дослідних робіт з розробки нормативних документів системи ТЗІ\n",
                            "проведення дослідно-конструкторських робіт з розробки засобів ТЗІ, засобів КЗІ, засобів спеціального зв’язку та іншого радіоелектронного обладнання\n",
                            "проведення робіт з сертифікації засобів зв’язку, засобів ТЗІ, засобів спеціального зв’язку, засобів КЗІ та спеціальних поглинаючих матеріалів, які призначені для об’єктів та техніки в захищеному виконанні\n",
                            "наукова та науково-технічна експертиза НДР та ДКР з питань захисту інформації\n",
                            "випробування обладнання, конструкцій, виробів, матеріалів щодо виконання вимог по електромагнітній сумісності\n",
                            "надання консультацій з питань наукових досліджень, їх організації та наукового обслуговування, послуг з розроблення науково-технічної документації на науково-технічну продукцію в галузі захисту інформації\n",
                            "організація підвищення кваліфікації спеціалістів в галузі захисту інформації\n",
                            "забезпечення розроблення державних стандартів і технічних умов на виробництво засобів ТЗІ, проведення її сертифікаційних випробувань"
                        ]

                    } as List,
                    {
                        title: "<strong>Перелік платних послуг, що можуть надаватися за напрямком метрології та стандартизації:\n</strong>",
                        items: [
                            "проведення робіт з діагностики, стандартизації та метрологічного забезпечення,:\n",
                            "метрологічна атестація засобів вимірювальної техніки (ЗВТ);\n",
                            "повірка ЗВТ;\n",
                            "калібрування ЗВТ;\n",
                            "атестація випробувального (лабораторного) обладнання;\n",
                            "проведення вимірювань;\n",
                            "державні випробування ЗВТ;\n",
                            "розробка методик повірки, калібрування, атестації ЗВТ;\n",
                            "розробка та експертиза методик виконання вимірювань;\n",
                            "атестація вимірювальних лабораторій і перевірка вже атестованих;\n",
                            "ведення переліку атестованих вимірювальних лабораторій України;\n",
                            "узгодження переліків ЗВТ, які знаходяться в експлуатації на підприємствах та в організаціях і підлягають повірці;\n",
                            "проведення метрологічної експертизи технічної документації на ЗВТ, що ввозяться на територію України;\n",
                            "виконання робіт з метрологічного забезпечення інформаційних вимірювальних систем, вимірювальних і обчислювальних каналів автоматизованих систем управління технологічними процесами;\n",
                            "методична допомога метрологічним службам підприємств і організацій;\n",
                            "метрологічної експертизи документації ЗВП на всіх етапах її життєвого циклу;\n",
                            "забезпечення розроблення державних стандартів і технічних умов на виробництво продукції, проведення її сертифікаційних випробувань."
                        ]

                    } as List,
                    {
                        title: "<strong>Перелік платних послуг, що можуть надаватися за напрямком електромагнітна сумісність радіоелектронних засобів:\n</strong>",
                        items: [
                            "проведення науково-дослідних, пошукових, проектно-пошукових та дослідно-конструкторських робіт з питань розподілу, виділення і присвоєння радіочастот, їх міжнародно-правового захисту, забезпечення електромагнітної сумісності радіоелектронних засобів.\n",
                            "наукова та науково-технічна експертиза електромагнітної сумісності радіоелектронних засобів.\n",
                            "натурні випробування радіоелектронних засобів з метою визначення їх електромагнітної сумісності.\n",
                            "розроблення, впровадження, реалізація та супровід програмних засобів і продуктів по визначенню електромагнітної сумісності радіоелектронних засобів.\n",
                            "організація та проведення наукових семінарів, конференцій з питань забезпечення електромагнітної сумісності радіоелектронних засобів.\n",
                            "організація навчання роботи з комп’ютерною технікою та методик статистичної обробки інформації в наукових дослідженнях та з питань забезпечення електромагнітної сумісності радіоелектронних засобів.\n",
                            "надання консультацій з питань наукових досліджень у галузі електромагнітної сумісності радіоелектронних засобів, їх організації;\n",
                            "надання послуг з розроблення науково-технічної документації на науково-технічну продукцію, натурний зразок в частині що стосується забезпечення електромагнітної сумісності радіоелектронних засобів."
                        ]

                    } as List,
                    {
                        title: "<strong>Перелік платних послуг, що можуть надаватися за напрямком автоматизації:\n</strong>",
                        items: [
                            "\n" +
                            "проведення науково-дослідних, дослідно-конструкторських робіт які спрямовані на створення інформаційно-аналітичних систем та автоматизованих систем управління.\n",
                            "проектування та виготовлення експериментальних зразків інформаційних систем, впровадження нових інформаційних технологій в системи, комплекси і засоби автоматизації.\n",
                            "випробування обладнання, виробів, зразків та комплексів засобів автоматизації, що розробляються в рамках дослідно-конструкторських робіт щодо створення автоматизованих систем управління та їх підсистем.\n",
                            "розроблення державних та галузевих стандартів щодо створення автоматизованих систем управління.\n",
                            "послуги з розроблення науково-технічної документації на інформаційні системи та автоматизовані системи управління.\n",
                            "розроблення програмного продукту, впровадження, реалізація та супровід програмних засобів і продуктів.\n",
                            "надання консультацій з питань наукових досліджень спеціального програмного забезпечення, їх організації та наукового обслуговування, послуг з розроблення науково-технічної документації на спеціальне програмне забезпечення;\n",
                            "організація та проведення наукових семінарів, конференцій, симпозіумів, лекторіїв, виставок, тренінгів з питань автоматизованих систем управління;\n",
                            "послуги з забезпечення доступу до локальних і корпоративних комп'ютерних мереж, до мережі Інтернет, автоматизованих баз даних та пошукових систем."
                        ]

                    } as List,
                    {
                        title: "<strong>Перелік платних послуг, що можуть надаватися за напрямком зв’язку:\n</strong>",
                        items: [
                            "проведення науково-дослідних, дослідно-конструкторських, проектно-конструкторських, технологічних, пошукових та проектно-пошукових робіт які спрямовані на створення інформаційно-телекомунікаційних мереж\n",
                            "організація та проведення наукових семінарів, конференцій, симпозіумів, лекторіїв, виставок, тренінгів з питань зв’язку\n",
                            "надання консультацій з питань наукових досліджень телекомунікаційних мереж, їх організації та обслуговування, послуг з розроблення науково-технічної документації на інформаційно-телекомунікаційні мережі\n",
                            "послуги з розроблення науково-технічної документації на телекомунікаційні мережі, що створюються\n",
                            "випробування обладнання, виробів, зразків та комплексів засобів"
                        ]
                    } as List,
                    {
                        title: "<strong>Перелік платних послуг, що можуть надаватися за напрямком кібернетичного захисту:\n</strong>",
                        items: [
                            "планування заходів з кіберзахисту;\n",
                            "організація навчання спеціалістів з питань кібербезпеки;\n",
                            "надання консультативних послуг по відновлення інформаційно-телекомунікаційних систем від наслідків кібернетичних атак;\n",
                            "надання консультативних послуг по відновленню інформації;\n",
                            "надання консультативних послуг по розслідуванню інцендентів у кіберпросторі;\n",
                            "впровадження, реалізація та супровід програмних засобів і продуктів кіберзахисту;\n",
                            "забезпечення розроблення державних та галузевих стандартів з питань кіберзахисту;\n",
                            "наукова та науково-технічна експертиза НДР та ДКР з питань кібербезпеки;\n",
                            "надання консультацій з питань наукових досліджень, їх організації та наукового обслуговування, послуг з розроблення науково-технічної документації на науково-технічну продукцію в галузі кіберзахисту;\n",
                            "підвищення кваліфікації спеціалістів з кіберзахисту інформаційно-телекомунікаційних систем;\n",
                            "проведення робіт з кіберзахисту локальних та глобальних мереж."
                        ]
                    } as List,
                ]
            } as TextBlock
        ]


    } as Unit,
    {
        id: 18,
        headerImg: "https://s3-alpha-sig.figma.com/img/9326/21f6/80a92b2484f207ca27e9a702f46320d8?Expires=1698019200&Signature=bMY7k4r-Q-DsxpJS6DKZUf3jLxDCRkzx4WI4v6l7lO4sxat6yBOP6SC3wD02w1sZCjp~5DveTmzoyVpRR~FxsFWw8bn6mzQjKNluMYrPJ1-cDqUGFbaPpvNBe3gvJkKCmz8Lm~2AlGFSMu8Lg8VCNgsE25Of4ehqwtcB35wuxkAPG3yoE~pW7FDFfZBPnMMIBjboZOZ2QDVw6-NuLemAjP3p9SBeYop8KuyWS3zLxjoQScRKkcAJRiekDy1TsldaL6UO-nCRac8ZxWL6cBAdcLwBq5VJ4lalAaxBcsM8Rxbx7A3PXzhb4-z5vZvfejT-RKN5sfW0NhioVX1NfXY1XQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        title: "Батальйон забезпечення навчального процесу",
        titleTextBlock: {
            textContent: [
                "Відповідно до спільної директиви Міністества оборони України та Генерального штабу Збройних Сил України від 04.05.2016 № Д-322/1/8ДСК введений в дію штат №17/194 Військового інституту телекомунікацій та інформатизації в складі якого введено батальйон забезпечення навчального процесу (БЗНП)."
            ]
        } as TextBlock,
        superior: {
            position: "Командир батальйону забезпечення навчального процесу",
            rang: "підполковник",
            name: " КУРГАН Юрій Вікторович",
            achievements: [
                "учасник бойових дій"
            ],
            img: {href: "https://s3-alpha-sig.figma.com/img/ea67/822f/2f32227969d02e4faeee306672fbb288?Expires=1698019200&Signature=OZrF153tXhe-oKYCNS7seCqiHYETpNvAo-2DA4KCgCxDDmpSRbLQ1du8fly4F2EW1s982YPvM2S~BHeyVKwV5MiftsfeGyoJrLnNQd0a9TTUtnA2FiF7ZzcSTGo-Uxz6TUNlqri6trpqUzQjh2su9A8Ldzv1i5tIM~9nf-CkQ~8fuxcndRfgzFQ9g1laIDVWWXxuHZ4dCWvbxcT4sUV0o9syrykKSbnyDHqTtsCSN5Nwm3VPm4yUBAkkIcCqXDD1iTSfAi7ECE1pTgKNOnlkgosEBZZCMZxlZrO6oyBPuTJAk1SkUocQVTtaKUFuCdcTqm0KfF-IoF5cx-1D39Uc5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image
        } as Superior,
        textBlocks: [
            {
                textContent: [
                    "За Військовим інститутом телекомунікацій та інформатизації (місто Київ) закріплені на праві оперативного управління будівлі №75 та №106 військового містечка №1 (село Семиполки Київської області) з метою розміщення підрозділів БЗНП Військового інституту телекомунікацій та інформатизації (ВІТІ )\n",
                    "Батальйон забезпечення навчального процесу з місцем дислокації смт. Семиполки введений до складу Військового інституту телекомунікацій та інформатизації для посилення практичної (польової) складової в підготовці випускників ВІТІ.\n",
                ],
                uLists: [
                    {
                        title: "Це дозволило у 2016-2017 навчальному році реалізувати положення Плану вдосконалення практичної підготовки курсантів, а саме:\n",
                        items: [
                            "здійснити 4 польових виходи курсантів 1-3 курсів;\n" +
                            "провести практичну складову державної екзаменаційної атестації для випускників всіх спеціальностей в польових умовах;\n",
                            "провести навчальний збір з громадянами які проходять навчання за програмою підготовки офіцерів запасу у ВІТІ;\n",
                            "провести курси перепідготовки та підвищення кваліфікації для осіб офіцерського складу за призовом, які закінчили кафедри військової підготовки, офіцерів військових частин прийнятих на військову служби за контрактом, осіб рядового та сержантського складу з вищою освітою;\n",
                            "ппідготувати екіпажі для комплексних апаратних зв’язку БЗНП та забезпечити їх залучення в командно-штабних навчаннях з органами військового управління “Непохитна стійкість 2017”.\n"
                        ]
                    } as List,
                    {
                        title: "<strong>Об'єкти навчальної матеріальної бази БЗНП:</strong>",
                        items: [
                            "клас Тактико-спеціальної підготовки;\n",
                            "клас Загальновійськових дисциплін;\n",
                            "навчальне поле (взводний опорний пункт, полігон звязку);\n",
                            "будівля 1/75 (казарма, спортивний зал).\n"
                        ]
                    } as List,
                    {
                        title: "<strong>Озброєння та військова техніка, які розгорнуті в БЗНП:\n</strong>",
                        items: [
                            "6 комплексних апаратних зв'язку (СТГ 8/16, П-240ТМ, Р-142Н \"Motorola\", Р-145БМ \"Motorola\", Р-142Н \"Harris\", Р-142Н \"Harris\");\n",
                            "радіорелейна станція (Р-414-МУ);\n",
                            "тропосферна станція (Р-412А)."
                        ]
                    } as List,
                ], images: [
                    {
                        href: "https://s3-alpha-sig.figma.com/img/1cc8/1ede/52ab37a9366df35560d3e5d987582447?Expires=1698019200&Signature=O8MVQuJA3~mkPNB2m8VfbdHcN2rqbR6eaCQZaZkU5wN5SuzT9t6gDxBQIDaF5I38AZmc~DYoyqlwHr~FcL-~jSD3xDhGZp07NdEFRXnAeFM81QQ44nwqYKKwA3G1uR0piNeAnxUV95NrlhleDN5Ezt3cX8oqHXGHDo8T2xoQzj1IDfRhU8Da5eMbbVZJ-b-9s-UbTo~q9Q25AZI3bc4om~Ofu77lgVNUeFMb1vlmkjvVFh62nCEaClRsv~C~FKtpffbr25MyNG1s2Un6mEnsTQa~6mSLLGnQgFt7WZzHSi3NMs83DY6zDaQ0iH0QkpiDLMBQLWiXmUPN-KBrA9Yb6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    } as Image,
                    {
                        href: "https://s3-alpha-sig.figma.com/img/1cc8/1ede/52ab37a9366df35560d3e5d987582447?Expires=1698019200&Signature=O8MVQuJA3~mkPNB2m8VfbdHcN2rqbR6eaCQZaZkU5wN5SuzT9t6gDxBQIDaF5I38AZmc~DYoyqlwHr~FcL-~jSD3xDhGZp07NdEFRXnAeFM81QQ44nwqYKKwA3G1uR0piNeAnxUV95NrlhleDN5Ezt3cX8oqHXGHDo8T2xoQzj1IDfRhU8Da5eMbbVZJ-b-9s-UbTo~q9Q25AZI3bc4om~Ofu77lgVNUeFMb1vlmkjvVFh62nCEaClRsv~C~FKtpffbr25MyNG1s2Un6mEnsTQa~6mSLLGnQgFt7WZzHSi3NMs83DY6zDaQ0iH0QkpiDLMBQLWiXmUPN-KBrA9Yb6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    } as Image,
                    {
                        href: "https://s3-alpha-sig.figma.com/img/1cc8/1ede/52ab37a9366df35560d3e5d987582447?Expires=1698019200&Signature=O8MVQuJA3~mkPNB2m8VfbdHcN2rqbR6eaCQZaZkU5wN5SuzT9t6gDxBQIDaF5I38AZmc~DYoyqlwHr~FcL-~jSD3xDhGZp07NdEFRXnAeFM81QQ44nwqYKKwA3G1uR0piNeAnxUV95NrlhleDN5Ezt3cX8oqHXGHDo8T2xoQzj1IDfRhU8Da5eMbbVZJ-b-9s-UbTo~q9Q25AZI3bc4om~Ofu77lgVNUeFMb1vlmkjvVFh62nCEaClRsv~C~FKtpffbr25MyNG1s2Un6mEnsTQa~6mSLLGnQgFt7WZzHSi3NMs83DY6zDaQ0iH0QkpiDLMBQLWiXmUPN-KBrA9Yb6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    } as Image,
                    {
                        href: "https://s3-alpha-sig.figma.com/img/1cc8/1ede/52ab37a9366df35560d3e5d987582447?Expires=1698019200&Signature=O8MVQuJA3~mkPNB2m8VfbdHcN2rqbR6eaCQZaZkU5wN5SuzT9t6gDxBQIDaF5I38AZmc~DYoyqlwHr~FcL-~jSD3xDhGZp07NdEFRXnAeFM81QQ44nwqYKKwA3G1uR0piNeAnxUV95NrlhleDN5Ezt3cX8oqHXGHDo8T2xoQzj1IDfRhU8Da5eMbbVZJ-b-9s-UbTo~q9Q25AZI3bc4om~Ofu77lgVNUeFMb1vlmkjvVFh62nCEaClRsv~C~FKtpffbr25MyNG1s2Un6mEnsTQa~6mSLLGnQgFt7WZzHSi3NMs83DY6zDaQ0iH0QkpiDLMBQLWiXmUPN-KBrA9Yb6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    } as Image,
                    {
                        href: "https://s3-alpha-sig.figma.com/img/1cc8/1ede/52ab37a9366df35560d3e5d987582447?Expires=1698019200&Signature=O8MVQuJA3~mkPNB2m8VfbdHcN2rqbR6eaCQZaZkU5wN5SuzT9t6gDxBQIDaF5I38AZmc~DYoyqlwHr~FcL-~jSD3xDhGZp07NdEFRXnAeFM81QQ44nwqYKKwA3G1uR0piNeAnxUV95NrlhleDN5Ezt3cX8oqHXGHDo8T2xoQzj1IDfRhU8Da5eMbbVZJ-b-9s-UbTo~q9Q25AZI3bc4om~Ofu77lgVNUeFMb1vlmkjvVFh62nCEaClRsv~C~FKtpffbr25MyNG1s2Un6mEnsTQa~6mSLLGnQgFt7WZzHSi3NMs83DY6zDaQ0iH0QkpiDLMBQLWiXmUPN-KBrA9Yb6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    } as Image,
                    {
                        href: "https://s3-alpha-sig.figma.com/img/1cc8/1ede/52ab37a9366df35560d3e5d987582447?Expires=1698019200&Signature=O8MVQuJA3~mkPNB2m8VfbdHcN2rqbR6eaCQZaZkU5wN5SuzT9t6gDxBQIDaF5I38AZmc~DYoyqlwHr~FcL-~jSD3xDhGZp07NdEFRXnAeFM81QQ44nwqYKKwA3G1uR0piNeAnxUV95NrlhleDN5Ezt3cX8oqHXGHDo8T2xoQzj1IDfRhU8Da5eMbbVZJ-b-9s-UbTo~q9Q25AZI3bc4om~Ofu77lgVNUeFMb1vlmkjvVFh62nCEaClRsv~C~FKtpffbr25MyNG1s2Un6mEnsTQa~6mSLLGnQgFt7WZzHSi3NMs83DY6zDaQ0iH0QkpiDLMBQLWiXmUPN-KBrA9Yb6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    } as Image,
                ]
            } as TextBlock,
        ]

    } as Unit,
    {
        id: 19,
        headerImg: "https://s3-alpha-sig.figma.com/img/7b0c/ce23/18e116c7c806ec0ad4f2ad12c05570f3?Expires=1698019200&Signature=Cl-aSARrAHrKlXppUJjktvfrX50tzh1U96X6iMhC44bwfPmvvE-wmIfCf72-plHLlWiJTcHt0oq9mvHTuIW3t0yV2m18pdy4wcSHuGEs8e8ovcf6uaW7doVVA787bRntbsw3H0bb~5kymsIQFhgWd5OqGNPBX8fC2U6j5iU11ImUy3j43uBXv4WLSo0hZviEe9wANZnZcaxwC8JBTCKiwWFbetAgpTdzNqR-035FflZsql8LWvB-VS3OUy1fYg4JRC2SVzA5eb6v40cjvjfgW-mh6voyojIJx~CGGAEqoz4wJ3SUIFugOd3BIsbeIWWddt~NOabH3yubewjYnaH4bw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        title: "5-ті Курси перепідготовки та підвищення кваліфікації",
        titleTextBlock: {
            textContent: [
                "5-ті Курси перепідготовки та підвищення кваліфікації створені у 2014 році, відповідно до спільної директиви Міністра Оборони України та Генерального штабу Збройних Сил України від 03.07.2014 року. Курси перепідготовки та підвищення кваліфікації утримуються за рахунок чисельності Збройних Сил України та дислокуєтеся на території Військового інституту телекомунікацій та інформатизації."
            ]
        } as TextBlock,
        superior: {
            position: "Начальник 5 курсів перепідготовки та підвищення кваліфікації",
            rang: "майор",
            name: "КРАВЧЕНКО Олексій Олександрович",
            img: {href: "https://s3-alpha-sig.figma.com/img/6528/609b/ed3b35de9fc8404e4dbe222b1feb9a50?Expires=1698019200&Signature=GFl8Lw~8EwgjV3XtjStuIq8C70MUFUMvC5CD08AhW--RPC5t-3DtXycw0MzlSH6CtiKs9lCGzBrm~WPTTyZOmSiV0wDas9u3KLXJeU4u2ULPZXrlAjitpzpfiih3TZ6WGFXOjrRCdxas61AUszxweNohzukV3hy0ruD-NiuZ5axv8XoMH7CyHDYOQTAxkngCXqQAu2G2lothCt9uZtTTrBG65VKBtRJt~dMNZ4BnkhDe5ePSNiNxFtIN7kfb9vNDAwUprSc-n6rPM6JcXTj26LFkQ6la7HSWbptFTXEY2oVialRC083rMVo~avR3DeqZtVYYCHqimfYKhIx8MsUXiQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
            achievements: []
        } as Superior,
        textBlocks: [
            {
                textContent: [
                    "<strong>Мета</strong> – організація перепідготовки та підвищення кваліфікації військовослужбовців в особливий період за військово-обліковими спеціальностями.",
                    "1. <strong>5 курси перепідготовки та підвищення кваліфікації (допідготовки) офіцерів, прийнятих на військову службу за контрактом з запасу, оперативного резерву №1 та №2, офіцери військових частин, що відновлюють боєздатність.\n</strong>",
                    "<strong>Група №1.</strong> Підвищення кваліфікації офіцерів, прийнятих на військову службу за контрактом з запасу\n",
                    "<strong>Термін навчання – 3 місяці\n</strong>",
                    "<strong>Категорія осіб</strong>, які залучаються на курси підвищення кваліфікації: офіцери прийняті на віськову службу за контрактом з запасу (за відповідними спеціалізаціями); офіцери, які закінчили кафедри військової підготовки та не мають досвіду служби.\n",
                    "<strong>Група №2.</strong> Підвищення кваліфікації офіцерів оперативного резерву №1 та №2 та військових частин, що відновлюють боєздатність\n",
                    "<strong>Термін навчання – до 15 діб\n</strong>",
                    "<strong>Категорія осіб</strong>, які залучаються на курси підвищення кваліфікації: офіцери оперативного резерву, яких призвано на навчальні збори, та військових частин, що відновлюють боєздатність.\n",
                    "<strong>Група №3.</strong> Курси методичної підготовки\n",
                    "<strong>Термін навчання – 7 діб\n</strong>",
                    "<strong>Категорія осіб</strong>, які залучаються на курси підвищення кваліфікації: офіцери оперативного резерву, яких призвано на навчальні збори, та військових частин, що відновлюють боєздатність.\n",
                    "2.<strong> Курси військової підготовки осіб сержантського (старшинського) складу з вищою освітою.\n</strong>",
                    "<strong>Термін навчання – 3 місяці\n</strong>",
                    "<strong>Група №1.</strong> Підготовка осіб рядового та сержантського (старшинського) складу з вищою освітою (за військово-обліковими спеціальностями, за якими здійснюється підготовка військових фахівців).\n",
                    "<strong>Категорія осіб</strong>, які залучаються на курси підвищення кваліфікації: особи рядового та сержантського (старшинського) складу, які проходять військову службу за контрактом (призвані на військову службу під час мобілізації), обіймають (плануються до призначення на) офіцерські посади у військах, з наступним присвоєнням первинного офіцерського звання \"молодший лейтенант\".\n",
                    "<strong>Курcи перепідготовки та підвищення кваліфікації в мирний час:\n</strong>",
                    "Згідно наказу Міністерства оборони України від 04.04.2017р. № 202 \"Про організацію та проведення підвищення кваліфікації військовослужбовців, працівників Збройних Сил України та державних службовців Міністерства оборони України та Збройних Сил України"
                ],
                tables: [
                    {
                        headers: [
                            "<strong>Назва курсів</strong>",
                            "<strong>Групи та напрями підвищення кваліфікації</strong>"
                        ],
                        rows: [
                            {
                                elements: [
                                    {value: ["<strong>1. Центральні курси підвищення кваліфікації офіцерів – фахівців зв’язку</strong>"]} as RowElement,
                                    {
                                        value: [
                                            "<strong>Група № 1</strong> Підвищення кваліфікації офіцерів командної ланки з’єднань, військових частин і підрозділів зв’язку.",
                                            "<strong>Група № 2</strong> Підвищення кваліфікації офіцерів штабів з’єднань, військових частин і підрозділів зв’язку.",
                                            "<strong>Група № 3</strong> Підвищення кваліфікації офіцерів штабів з’єднань, військових частин і підрозділів зв’язку.",
                                            "<strong>Група № 4</strong> Підвищення кваліфікації офіцерів з питань розгортання та обслуговування програмно-технічних комплексів.",
                                            "<strong>Група № 5</strong> Підвищення кваліфікації офіцерів з питань розвитку та забезпечення функціонування телекомунікаційних мереж.",
                                            "<strong>Група № 6</strong> Підвищення кваліфікації офіцерів з питань застосування новітніх засобів зв'язку.",
                                        ]
                                    } as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["<strong>2. Центральні курси підвищення кваліфікації офіцерів – фахівців зв’язку</strong>"]} as RowElement,
                                    {
                                        value: ["<strong>Група № 1 </strong>Підвищення кваліфікації з питань забезпечення та організації електронного документування управлінської інформації."]
                                    } as RowElement,
                                ]
                            } as Row,

                            {
                                elements: [
                                    {value: ["<strong>2. Центральні курси підвищення кваліфікації офіцерів – фахівців зв’язку</strong>"]} as RowElement,
                                    {
                                        value: ["<strong>Група № 1</strong> Підвищення кваліфікації з питань забезпечення та організації електронного документування управлінської інформації."]
                                    } as RowElement,
                                ]
                            } as Row,

                            {
                                elements: [
                                    {value: ["<strong>3. Курси підвищення кваліфікації з питань захисту інформації в захищеній системі електронного документообігу Міністерства оборони України</strong>"]} as RowElement,
                                    {
                                        value: ["<strong>Група № 1</strong> Підвищення кваліфікації з питань забезпечення та організації захисту інформації в захищеній системі електронногодокументообігу Міністерства оборони України."]
                                    } as RowElement,
                                ]
                            } as Row,

                            {
                                elements: [
                                    {value: ["<strong>4. Курси підвищення кваліфікації з питань технічного захисту інформації (у сфері відкритої інформації)</strong>"]} as RowElement,
                                    {
                                        value: ["<strong>Група № 1</strong> Підвищення кваліфікації з питань технічного захисту інформації (у сфері відкритої інформації)."]
                                    } as RowElement,
                                ]
                            } as Row,

                            {
                                elements: [
                                    {
                                        value: [
                                            "<strong>5. Курси підвищення кваліфікації з питань технічного захисту інформації та кібернетичної безпеки</strong>"
                                        ]
                                    } as RowElement,
                                    {
                                        value: [
                                            "<strong>Група № 1</strong> Підвищення кваліфікації з питань кібернетичної безпеки. ",
                                            "<strong>Група № 2</strong> Підвищення кваліфікації з питань захисту інформації від витоку технічними каналами та несанкціонованого доступу.",
                                            "<strong>Група № 3</strong> Підвищення кваліфікації з питань забезпечення та організації захисту інформації в захищеній системі обміну інформації Збройних Сил України та мережі обміну службовою інформації Збройних Сил України.",
                                            "<strong>Група № 4</strong> Підвищення кваліфікації з питань кібернетичної безпеки та ведення спеціальних дій в кібернетичному просторі."
                                        ]
                                    } as RowElement,
                                ]
                            } as Row,
                        ],
                    } as Table
                ]
            } as TextBlock
        ]
    } as Unit,
]

export const entrances: Entrance[] = [
    {
        title: "Денна форма навчання ВІТІ",
        textBlocks: [
            {
                textContent: [
                    "Оголошується прийом на навчання для здобуття вищої освіти (схема підготовки “курсант”) на денну форму навчання за рахунок видатків державного бюджету (для вступників на основі повної загальної середньої освіти)"
                ],
                tables: [
                    {
                        headers: [
                            " Ступінь вищої освіти бакалавр"
                        ],
                        rows: [
                            {
                                elements: [
                                    {value: ["<strong>Галузі знань</strong>"]} as RowElement,
                                    {value: ["<strong>Спеціальність </strong>(спеціалізація)<strong>підготовки</strong>"]} as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {
                                        value: [
                                            "<strong>12 Інформаційні технології</strong>"
                                        ]
                                    } as RowElement,
                                    {
                                        value: [
                                            "<strong>122 Комп’ютерні науки</strong>\n (Математичне, інформаційне і програмне забезпечення \nвійськових інформаційних систем)",
                                            "<strong>125 Кібербезпека</strong> (Захист інформації та кібернетична безпека в інформаційно-телекомунікаційних системах)",
                                            "<strong>126 Інформаційні системи та технології</strong> (Автоматизовані системи управління військами та озброєнням)"
                                        ]
                                    } as RowElement,
                                    // {value: []} as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["<strong>17 Електроніка та телекомунікації</strong>"]} as RowElement,
                                    {value: ["<strong>172 Телекомунікації та радіотехніка </strong>(Системи військового зв'язку)"]} as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["<strong>25 Воєнні науки, національна безпека, безпека державного кордону</strong>"]} as RowElement,
                                    {
                                        value: [
                                            "<strong>172 Телекомунікації та радіотехніка </strong>(Системи військового зв'язку)",
                                            "<strong>253 Військове управління (за видами збройних сил)</strong> (Радіоелектронні інформаційні системи, оперативна техніка \n та спецозброєння)"
                                        ]
                                    } as RowElement,
                                ]
                            } as Row,
                        ]
                    } as Table
                ]
            } as TextBlock,
            {
                textContent: [
                    "Нормативний термін навчання: 4 роки з можливістю подальшого вступу для здобуттям ступеня магістра (1,5 роки) за спеціальністю, 4 роки для спеціальності 253 Військове управління (за видами збройних сил) нормативний термін навчання - 4 роки.",

                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Вступ буде відбуватися за:</strong>",
                    "<strong>або</strong> Мультипредметний тест 2022 року.\n",
                    "<strong>або</strong> ЗНО (2019, 2020, 2021 років):\n",
                ],
                oLists: [
                    {
                        items: [
                            "Українська мова.\n",
                            "Математика",
                            " Історія України або іноземна мова, або фізика, або географія, або хімія, або біологія.\n"
                        ]
                    } as List
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>або</strong> очні іспити (українська мова, математика та історія України)",
                    "Вступники, які вступають на навчання до Військового інституту на денну форму навчання, крім надання сертифікату (сертифікатів) Українського центру оцінювання якості освіти або \n складання вступних екзаменів з конкурсних предметів, обов'язково проходять психологічне обстеження, оцінку рівня фізичної підготовки та медичний огляд військово-лікарською комісією."
                ]
            } as TextBlock,
            {
                oLists: [
                    {
                        title: "<strong>Строки прийому заяв і документів, вступних випробувань, конкурсного відбору та зарахування на навчання:</strong>",
                        items: [
                            "Початок прийому заяв, особових справ та документів відбірковою комісією Військового інституту на денну та заочну форми навчання -<strong> 20 липня 2022 року\n</strong>",
                            "Закінчення прийому заяв, особових справ та документів відбірковою комісією Військового інституту на денну та заочну форми навчання -<strong> до 18.00 07 серпня 2022 року\n</strong>",
                            "Вступні випробування (психологічне обстеження, оцінка рівня фізичної підготовленості, медичний огляд) -<strong> 08 серпня 2022 року - 20 серпня 2022 року\n</strong>",
                            "Проведення іспитів з української мови, історії України та математики -<strong> 08 серпня 2022 року - 20 серпня 2022 року\n</strong>",
                            "Термін видання наказу на зарахування вступників до Військового інституту на денну та заочну форми навчання -<strong> до 18.00 21 серпня 2022 року</strong>"
                        ]
                    } as List,
                    {
                        title: "<strong>Освітні програми:</strong>",
                        items: [
                            "Комп'ютерні науки та інформаційні технології.\n",
                            "Кібербезпека в інформаційно-телекомунікаційних системах.\n",
                            "Кіберрозвідка, системи та комплекси спеціального призначення.\n",
                            "Інформаційні системи та технології.\n",
                            "Телекомунікаційні системи та мережі.\n",
                            "Управління діями підрозділів зв'язку.\n",
                            "Спецозброєння та робототехнічні військові комплекси."
                        ]
                    } as List
                ]
            } as TextBlock,
        ]
    } as Entrance,
    {
        title: "Денна форма навчання ВКСС ВІТІ",
        textBlocks: [
            {
                textContent: [
                    "Оголошується набір для підготовки військових фахівців (схема підготовки “курсант”) на денну форму навчання за рахунок видатків державного бюджету (для вступників на основі повної загальної середньої освіти)"
                ],
                tables: [
                    {
                        headers: [
                            "Освітньо-професійний ступінь фаховий молодший бакалавр"
                        ],
                        rows: [
                            {
                                elements: [
                                    {value: ["<strong>Галузі знань</strong>"]} as RowElement,
                                    {value: ["<strong>Спеціальність підготовки</strong>"]} as RowElement
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["<strong>12 Інформаційні технології</strong>"]} as RowElement,
                                    {value: ["<strong>122 Комп’ютерні науки</strong>", "<strong>125 Кібербезпека</strong>", "<strong>126 Інформаційні системи та технології</strong>"]} as RowElement
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["<strong>17 Електроніка та телекомунікації</strong>"]} as RowElement,
                                    {value: ["<strong>172 Телекомунікації та радіотехніка</strong>"]} as RowElement
                                ]
                            } as Row,
                        ]
                    } as Table
                ]
            } as TextBlock,
            {
                textContent: [
                    "Нормативний термін навчання: <strong>4 роки</strong>"
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Вступ буде відбуватися за:</strong>",
                    "<strong>або</strong> Мультипредметний тест 2022 року.\n",
                    "<strong>або</strong> ЗНО (2019, 2020, 2021 років):\n",
                ],
                oLists: [
                    {
                        items: [
                            "Українська мова.\n",
                            "Математика",
                            " Історія України або іноземна мова, або фізика, або географія, або хімія, або біологія.\n"
                        ]
                    } as List
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>або</strong> очні іспити (українська мова, математика та історія України)",
                ]
            } as TextBlock
        ]
    } as Entrance,
    {
        title: "Заочна форма навчання",
        textBlocks: [
            {
                textContent: [
                    "Оголошується набір на заочну форму навчання за рахунок видатків державного бюджету<strong> (для військовослужбовців військової служби за контрактом \n</strong>" +
                    "рядового, сержантського (старшинського) складу, які продовжили службу за новим контрактом)"
                ],
                tables: [
                    {
                        headers: [
                            "Освітньо-професійний ступінь фаховий молодший бакалавр"
                        ],
                        rows: [
                            {
                                elements: [
                                    {value: ["<strong>Галузі знань</strong>"]} as RowElement,
                                    {value: ["<strong>Спеціальність підготовки</strong>"]} as RowElement
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["<strong>12 Інформаційні технології</strong>"]} as RowElement,
                                    {value: ["<strong>122 Комп’ютерні науки</strong>", "<strong>125 Кібербезпека</strong>", "<strong>126 Інформаційні системи та технології</strong>"]} as RowElement
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["<strong>17 Електроніка та телекомунікації</strong>"]} as RowElement,
                                    {value: ["<strong>172 Телекомунікації та радіотехніка</strong>"]} as RowElement
                                ]
                            } as Row,
                        ]
                    } as Table
                ]
            } as TextBlock,
            {
                textContent: [
                    "Нормативний термін навчання: <strong>4 роки</strong>"
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Вступ буде відбуватися за:</strong>",
                    "<strong>або</strong> Мультипредметний тест 2022 року.\n",
                    "<strong>або</strong> ЗНО (2019, 2020, 2021 років):\n",
                ],
                oLists: [
                    {
                        items: [
                            "Українська мова.\n",
                            "Математика",
                            " Історія України або іноземна мова, або фізика, або географія, або хімія, або біологія.\n"
                        ]
                    } as List
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>або</strong> очні іспити (українська мова, математика та історія України)",
                ]
            } as TextBlock
        ]

    } as Entrance,
    {
        title: "Навчання в докторантурі та ад'юнктурі",
        textBlocks: [
            {
                textContent: [
                    "Військовий інститут телекомунікацій та інформатизації імені Героїв Крут (далі - інститут) оголошує набір у 2022 році до очної докторантури та ад’юнктури за спеціальностями: \n" +
                    "126 інформаційні системи та технології, 255 озброєння та військова техніка.\n",
                    "До докторантури інституту приймаються офіцери Збройних Сил України віком не старше 47 років, які мають науковий ступінь доктора філософії (кандидата наук), \n" +
                    "наукові здобутки, опубліковані праці з обраної наукової спеціальності і які мають наукові результати, що потребують завершення або оформлення у вигляді дисертації, \n" +
                    "монографії чи наукової доповіді за сукупністю статей.\n",
                    "До ад’юнктури інституту приймаються офіцери Збройних Сил України у віком до 45 років включно, які перебувають на військовій службі, здобули вищу освіту ступеня магістра \n" +
                    "(освітньо-кваліфікаційний рівень спеціаліста), виявили здібності до педагогічної або науково-дослідної роботи та мають досвід служби у військах (силах) не менше 2 років.\n",
                    "При відборі кандидатів для вступу до докторантури та ад’юнктури перевага надається офіцерам – учасникам бойових дій.\n",
                    "Для зарахування кандидатом на вступ до очної докторантури та ад’юнктури необхідно до 1 лютого 2022 року подати рапорт на вступ за підпорядкованістю. Разом з рапортом, \n" +
                    "подаються документи, перелік яких наведений в „Правилах прийому до докторантури та ад’юнктури Військового інституту телекомунікацій та інформатизації \n" +
                    "за спеціальностями 126 інформаційні системи та технології, 255 озброєння та військова техніка”, які розміщені на офіційному сайті інституту.\n",
                    "Нормативний строк підготовки доктора філософії в ад’юнктурі становить чотири роки, а підготовки доктора наук у докторантурі - два роки.\n",
                    "Вступні іспити до ад’юнктури проводяться з 1 по 30 липня 2022 року.\n",
                    "Довідки за телефоном: 256-22-73."
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Вимоги до рівня освіти вступників</strong>: особи офіцерського складу віком не старше 47 років, які мають науковий ступінь доктора філософії (кандидата наук), наукові здобутки, \n" +
                    "опубліковані праці з обраної наукової спеціальності і які мають наукові результати, що потребують завершення або оформлення у вигляді дисертації, \n" +
                    "монографії чи наукової доповіді за сукупністю статей.",
                    "Оголошується набір до докторантури"
                ],
                tables: [
                    {
                        headers: [
                            "Освітньо-професійний ступінь <strong>доктор наук</strong>"
                        ],
                        rows: [
                            {
                                elements: [
                                    {value: ["<strong>Галузі знань</strong>"]} as RowElement,
                                    {value: ["<strong>Спеціальність</strong> (спеціалізація) <strong>підготовки</strong>"]} as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["<strong>12 Інформаційні технології</strong>"]} as RowElement,
                                    {value: ["<strong>126 Інформаційні системи та технології</strong>"]} as RowElement,
                                ]
                            } as Row,
                        ]
                    } as Table
                ]
            } as TextBlock,
            {
                textContent: [
                    "Нормативний термін навчання: <strong>2 роки</strong>"
                ]
            } as TextBlock,
            {
                textContent: [
                    "Оголошується набір до ад'юнктури",
                    "<strong>Вимоги до рівня освіти вступників:</strong> особи офіцерського складу віком не старше 45 років, які перебувають на військовій службі, здобули вищу освіту ступеня магістра (спеціаліста), \n" +
                    "виявили здібності до педагогічної або науково-дослідної роботи та мають досвід служби у військах (силах) не менше 2 років."
                ],
                tables: [
                    {
                        headers: [
                            "Освітньо-професійний ступінь <strong>доктор філософії</strong>"
                        ],
                        rows: [
                            {
                                elements: [
                                    {value: ["<strong>Галузі знань</strong>"]} as RowElement,
                                    {value: ["<strong>Спеціальність</strong> (спеціалізація)<strong> підготовки</strong>"]} as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["<strong>12 Інформаційні технології</strong>"]} as RowElement,
                                    {value: ["<strong>126 Інформаційні системи та технології</strong>"]} as RowElement,

                                ]
                            } as Row,
                            {
                                elements: [
                                    {
                                        value: ["<strong>25 Воєнні науки, національна безпека, \n" +
                                        "безпека державного кордону</strong>"]
                                    } as RowElement,
                                    {value: ["<strong>255 Озброєння та військова техніка</strong>"]} as RowElement,
                                ]
                            } as Row,
                        ]
                    } as Table
                ]
            } as TextBlock,
            {
                textContent: [
                    "Нормативний термін навчання:<strong> 4 роки</strong>"
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Додаткову інформацію про підготовку та вступ до Військового інституту телекомунікацій та інформатизації можна отримати електронною поштою за адресою:</strong>",
                    "vitivstup@viti.edu.ua\n",
                    "vitivstup@ukr.net"
                ]
            } as TextBlock

        ]
    } as Entrance,
    {
        title: "Підготовка за програмою офіцерів запасу",
        textBlocks: [
            {
                textContent: [
                    "Оголошується набір громадян України для підготовки за програмою офіцерів запасу з 03 березня по 31 липня 2022 року.",
                    "Набір громадян України для підготовки за програмою офіцерів запасу продовжено до<strong> 31 жовтня 2022 року.\n</strong>",
                    "Військову підготовку можуть проходити здобувачі вищої освіти (в тому числі особи жіночої статі) незалежно від форми навчання у вищих навчальних закладах та \n" +
                    "громадяни України, які мають освітній ступінь вищої освіти не нижче бакалавра, якщо їм на початок військової підготовки не виповнилося 40 років."
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Вартість навчання: 8 000 грн./семестр (2 роки навчання - 32 000 грн.).</strong>"
                ]
            } as TextBlock,
            {
                textContent: [
                    "Навчання громадян України здійснюється методом “військового дня” без відриву від основного місця навчання або роботи протягом 2 років.\n",
                    "Після закінчення навчання присвоюється військове звання – <strong>„молодший лейтенант запасу” Збройних Сил України.</strong>"
                ],
                oLists: [
                    {
                        title: "<strong>Військово-облікові спеціальності за якими здійснюється підготовка за програмою офіцерів запасу</strong>",
                        items: [
                            "Організація захисту інформації та кібернетична безпека в інформаційно-комунікаційних системах\n" +
                            "Застосування змішаних з’єднань, військових частин і підрозділів (крім підрозділів і військових частин зв’язку та радіотехнічного забезпечення авіації)\n",

                            "Математичне та програмне забезпечення функціонування автоматизованих систем\n",

                            "Експлуатація та ремонт наземної апаратури радіозв’язку різної потужності\n",

                            "Технічне забезпечення функціонування автоматизованих систем управління\n",

                            "Експлуатація та ремонт автомобільної техніки та її аналогів\n",
                            "Організація морально-психологічного забезпечення військ (сил)"
                        ]
                    } as List
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>1) Абітурієнту до початку конкурсного відбору НЕОБХІДНО:</strong>"
                ],
                tables: [
                    {
                        rows: [
                            {
                                elements: [
                                    {value: ["<strong>Якщо Ви здобувач вищої освіти</strong>"]} as RowElement,
                                    {value: ["<strong>Якщо у Вас вже є вища освіта</strong>"]} as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {
                                        value: ["Подати до приймальної комісії заяву підписану \n" +
                                        "деканом факультету (з основного місця навчання) \n" +
                                        "про бажання проходити військову підготовку"]
                                    } as RowElement,
                                    {
                                        value: ["Подати до приймальної комісії заяву на ім’я голови \n" +
                                        "відбіркової комісії, про бажання проходити військову підготовку"]
                                    } as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["<strong>до заяви додати</strong>"]} as RowElement,
                                    {value: ["<strong>до заяви додати</strong>"]} as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["4 фото 3х4"]} as RowElement,
                                    {value: ["4 фото 3х4"]} as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["копію паспорта громадянина України (1, 2, 11 сторінки)"]} as RowElement,
                                    {value: ["копію паспорта громадянина України (1, 2, 11 сторінки)"]} as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {
                                        value: ["копію довідки про присвоєння реєстраційного номера \n" +
                                        "облікової картки платника податків"]
                                    } as RowElement,
                                    {
                                        value: ["копію довідки про присвоєння реєстраційного номера \n" +
                                        "облікової картки платника податків"]
                                    } as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {
                                        value: ["копію посвідчення про приписку до призовної дільниці \n" +
                                        "(для осіб чоловічої статі)"]
                                    } as RowElement,
                                    {
                                        value: ["копію посвідчення про приписку до призовної дільниці \n" +
                                        "(для осіб чоловічої статі)"]
                                    } as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {
                                        value: ["витяг з навчальної картки з оцінками, \n" +
                                        "завіренний печаткою у деканаті"]
                                    } as RowElement,
                                    {value: ["копію диплому про вищу освіту, та додатка до нього"]} as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["пройти військово-лікарську комісію за місцем перебування на військовому обліку (Направлення для проходження військово-лікарської комісії видається на кафедрі військової підготовки Військового інституту телекомунікацій та інформатизації за адресою: м. Київ, вул. Московська 45/1 з 9:00 до 17:00 щоденно, крім суботи та неділі)"]} as RowElement,
                                    {value: ["пройти військово-лікарську комісію за місцем перебування на військовому обліку (Направлення для проходження військово-лікарської комісії видається на кафедрі військової підготовки Військового інституту телекомунікацій та інформатизації за адресою: м. Київ, вул. Московська 45/1 з 9:00 до 17:00 щоденно, крім суботи та неділі)"]} as RowElement,
                                ]
                            } as Row,

                        ]
                    } as Table
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>2) Відбіркова комісія розглядає:\n</strong>"
                ],
                tables: [
                    {
                        rows: [
                            {
                                elements: [
                                    {
                                        value: ["Придатність до військової служби за висновками \n" +
                                        "Військово-лікарської комісії"]
                                    } as RowElement,
                                    {
                                        value: ["Придатність до військової служби за висновками \n" +
                                        "Військово-лікарської комісії"]
                                    } as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["Рівень успішності навчання здобувачів вищої освіти"]} as RowElement,
                                    {value: ["Рівень результатів навчання громадян у ВНЗ"]} as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["Рівень фізичної підготовки громадян"]} as RowElement,
                                    {value: ["Рівень фізичної підготовки громадян"]} as RowElement,
                                ]
                            } as Row,
                            {
                                elements: [
                                    {value: ["Засвоєння громадянами програми допризивної підготовки"]} as RowElement,
                                    {value: ["Засвоєння громадянами програми допризивної підготовки"]} as RowElement,
                                ]
                            } as Row,
                        ]
                    } as Table
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>3) Для участі у конкурсному відборі необхідно:</strong>",
                    "В день проведення конкурсного відбору (день буде доведений до абітурієнта під час подачі документів до приймальної комісії) прибути о 14 год.00 хв. \n" +
                    "у Військовий інститут телекомунікацій та інформатизації\n",
                    "При собі мати паспорт, приписне свідоцтво або військовий квиток, довідку з висновком військово-лікарської комісії про придатність до військової служби \n" +
                    "(ксерокопії не приймаються)."
                ]
            } as TextBlock,
            {
                textContent: [
                    "<strong>Довідка за телефонами:</strong>",
                    "098-233-46-07, 050-959-24-39, (044) 256-22-59, (044) 256-23-94\n"
                ]
            } as TextBlock,
            {
                textContent: [
                    "Додаткову інформацію про підготовку та вступ до Військового інституту телекомунікацій та інформатизації можна отримати електронною поштою за адресою:",
                    "vitivstup@viti.edu.ua\n",
                    "vitivstup@ukr.net",
                ]
            } as TextBlock
        ]

    } as Entrance,

]

export const publicInfo: TextBlock[] = [
    {
        oLists: [
            {
                items: [
                    "Реєстр суб'єктів освітньої діяльності\n" +
                    "<p>Виписка з Єдиного державного реєстру юридичних осіб, фізичних осіб-підприємців та громадських формувань ВІТІ імені Героїв Крут\n</p>" +
                    "<p>Довідка з відомчого обліку Міністерства оборони України в Єдиному державному реєстрі юридичних осіб, фізичних осіб-підприємців та громадських формувань ВІТІ імені Героїв Крут\n</p>",
                    "Статут Військового інституту телекомунікацій та інфоматизації імені Героїв Крут (нова редакція)\n",
                    " Стратегія і перспективні напрями розвитку освітньої, наукової та інноваційної діяльності ВІТІ на період до 2020 року\n",
                    " Командування інституту",
                    "Колективний договір ВІТІ імені Героїв Крут на 2019 - 2021 роки Реєстрація: Профспілка працівників ЗСУ\n",
                    "Колективний договір ВІТІ на 2016 - 2017 роки Зміни та доповнення: 2017 рік 2017 рік 2018 рік\n" +
                    "<p>Колективний договір ВІТІ ДУТ на 2014 - 2016 роки Зміни та доповнення: 2014 рік 2015 рік 2015 рік\n </p>" +
                    "<p>Кошторис закладу вищої освіти та всі зміни до нього\n</p>",
                    "Зведені показники виконання кошторису ВІТІ\n",
                    " Інформація щодо тендерних процедур\n",
                    "Державні закупівлі\n",
                    "Штатний розпис (містить інформацію з обмеженим доступом (п.2.2 наказу Генерального штабу ЗСУ №408 від 22.11.2017 \"Про затвердження Переліку відомостей Збройних Сил України, \n" +
                    "що становлять службову інформацію\")\n",
                    "Ліцензія на провадження освітньої діяльності\n",
                    "Ліцензований обсяг та фактична кількість осіб, які навчаються у закладі освіти (Інформація про кількість осіб, які навчається у Військовому інституті телекомунікацій та інформатизації \n" +
                    "імені Героїв Крут є інформацію з обмеженим доступом (п.3.27 наказу Генерального штабу ЗСУ №408 від 22.11.2017 \"Про затвердження Переліку відомостей Збройних Сил України, \n" +
                    "що становлять службову інформацію\")\n",
                    "Сертифікати про акредитацію освітніх програм\n",
                    " Освітні програми, що реалізуються в закладі освіти, та перелік освітніх компонентів, що передбачені відповідною освітньою програмою\n",
                    " Мова (мови) освітнього процесу - державна мова (Відповідно до статті 48 Закону України від 01.07.2014 № 1556-VII \"Про вищу освіту\")\n",
                    " Система менеджменту якості\n",
                    " Напрями наукової та/або мистецької діяльності (для закладів вищої освіти) - інформація про напрями наукової та/або мистецької діяльності є інформацію з обмеженим доступом \n" +
                    "(п.20.6 наказу Генерального штабу ЗСУ №408 від 22.11.2017 \"Про затвердження Переліку відомостей Збройних Сил України, що становлять службову інформацію\")\n",
                    "Матеріально-технічне забезпечення закладу освіти (згідно з ліцензійними умовами) - відповідно до статті 45 Постанови Кабінету Міністрів України від 10.05.2018 № 347 \"Ліцензійні умови \n" +
                    "провадження освітньої діяльності\" вищі військові заклади освіти (заклади вищої освіти із специфічними умовами навчання) не висвітлюють відомості про матеріально-технічне забезпечення на електронних ресурсах\n",
                    "Наявність гуртожитків та вільних місць у них, розмір плати за проживання - Курсанти упродовж всього періоду навчання безкоштовно розміщуються в казармах (спальних приміщеннях, гуртожитках) \n" +
                    "у порядку, встановленому Статутом внутрішньої служби Збройних Сил України\n",
                    "Наявність вакантних посад,\n" +
                    "порядок і умови проведення конкурсу на їх заміщення (у разі їх проведення)\n" +
                    "Річний звіт про діяльність закладу освіти - Звіт про роботу ВВНЗ (ВНП ВНЗ) за навчальний рік – інформація, яка міститься у Звіті є інформацією з обмеженим доступом згідно п.5.7.ОС \n" +
                    "Директиви начальника Генеральнго штабу – Головнокомандувача ЗСУ № ДГШ-6 від 06.03.2014 \"Про затвердження Табелю термінових донесень Збройних Сил України з кадрових питань \n" +
                    "та підготовки військових фахівців\"\n",
                    "Правила прийому до закладу освіти у відповідному році\n",
                    " Розмір плати за навчання, підготовку, перепідготовку, підвищення кваліфікації здобувачів освіти - Підготовка здобувачів вищої освіти здійснюється за рахунок коштів державного замовлення\n",
                    " Перелік додаткових освітніх та інших послуг, їх вартість, порядок надання та оплати\n",
                    " Положення о преміюванні працівників ВІТІ за загальні результати діяльності\n" +
                    "<p>Наказ Міністерства оборони України від 13 грудня 2004 року № 608 «Про виплату науковим працівникам Збройних Сил України надбавки за стаж наукової роботи»\n</p>" +
                    "<p>Наказ Міністерства оборони України від 11 лютого 2008 року № 40 «Про затвердження Інструкції про порядок відбору кандидатів та виплати академічних (соціальних) стипендій курсантам, \n" +
                    "слухачам і ад’юнктам вищих військових навчальних закладів Збройних Сил України та військових навчальних підрозділів вищих навчальних закладів»\n</p>"
                ]
            } as List
        ]
    } as TextBlock
]

export const why_mitit: WhyMITIT[] = [
    {
        title: "1.ВІТІ – потужний навчальний заклад у складі 3-х факультетів та 15 кафедр, Наукового центру зв'язку та інформатизації та Військового коледжу сержантського складу.",
        finalText: "Ти отримаєш диплом бакалавра, магістра в галузі ІТ-технологій та телекомунікацій!"
    } as WhyMITIT,
    {
        title: "2. ВІТІ – міжвидовий військовий навчальний заклад,",
        titleText: "який розташований в історичному центрі Києва на Печерських пагорбах та має славетні традиції та своїх видатних вихованців. Багато випускників інституту стали провідними військовими фахівцями та генералами.",
        content: [
            "Інститут готує офіцерів для Збройних Сил України (Сухопутні війська, Військово-Повітряні та Військово-Морські Сили, Сили спеціальних операцій, Десантно-штурмових військ, Головного управлінння розвідки), Служби безпеки України, Служби зовнішьої розвідки України, Національної гвардії України, Державної прикордонної служби України, Державного космічного агентства України, Державної спеціальної служби транспорту.\n",
            "Ми навчимо тебе бути професіоналом військової справи, бути сильним, вольовим та хоробрим. У нас ти знайдеш справжніх товаришів.\n",
        ],
        finalText: "Ти станеш командиром! Ти можеш стати генералом!",
        images: [
            {href: "https://s3-alpha-sig.figma.com/img/8f52/c07a/27af346c7817e036a3d13baeb8943328?Expires=1698019200&Signature=fLaItDJ6SWFWcflhmC4pNh~s7uzgH7kUwTbUFzV34A1X53Vgl8AnJAFtJ4TMnXH4A83lBRptNR4Eo2zalwa~tBQE8Ywrk2gSKAZcM2K-1CN5Ef~VNUecEb8w3ICgZdVvckcri~RkzCOJ-mx4rDKfDa4ytfI3zP-yz1xdXOC0D9Map9t3CvwA5t2I~pPgH~DyO4n-CO-Sie2zhRGxif6TJ5jqK3Ho1O0o9dLbWeCs~IuDIWArVUHRjHPZL44wk~IlUy2MInTRWkJgIuBjfFyeMIOC-~-vd13o-WkEODn2gX6EAY0fJjQKQ7Gxk242JdiIPu-lCTmwnKIdd7zyPV8iTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
            {href: "https://s3-alpha-sig.figma.com/img/8f52/c07a/27af346c7817e036a3d13baeb8943328?Expires=1698019200&Signature=fLaItDJ6SWFWcflhmC4pNh~s7uzgH7kUwTbUFzV34A1X53Vgl8AnJAFtJ4TMnXH4A83lBRptNR4Eo2zalwa~tBQE8Ywrk2gSKAZcM2K-1CN5Ef~VNUecEb8w3ICgZdVvckcri~RkzCOJ-mx4rDKfDa4ytfI3zP-yz1xdXOC0D9Map9t3CvwA5t2I~pPgH~DyO4n-CO-Sie2zhRGxif6TJ5jqK3Ho1O0o9dLbWeCs~IuDIWArVUHRjHPZL44wk~IlUy2MInTRWkJgIuBjfFyeMIOC-~-vd13o-WkEODn2gX6EAY0fJjQKQ7Gxk242JdiIPu-lCTmwnKIdd7zyPV8iTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
        ]
    } as WhyMITIT,
    {
        title: "3. ВІТІ – надає професійну освіту за ступенями вищої освіти магістра",
        titleText: "за такими сучасними спеціальностями як: комп’ютерні науки та інформаційні технології, комп’ютерна інженерія, телекомунікації та радіотехніка, кібербезпека, озброєння та військова техніка.\n",
        finalText: "Ти станеш професіоналом в галузі ІТ-технологій та телекомунікацій!",
        images: [
            {href: "https://s3-alpha-sig.figma.com/img/8f52/c07a/27af346c7817e036a3d13baeb8943328?Expires=1698019200&Signature=fLaItDJ6SWFWcflhmC4pNh~s7uzgH7kUwTbUFzV34A1X53Vgl8AnJAFtJ4TMnXH4A83lBRptNR4Eo2zalwa~tBQE8Ywrk2gSKAZcM2K-1CN5Ef~VNUecEb8w3ICgZdVvckcri~RkzCOJ-mx4rDKfDa4ytfI3zP-yz1xdXOC0D9Map9t3CvwA5t2I~pPgH~DyO4n-CO-Sie2zhRGxif6TJ5jqK3Ho1O0o9dLbWeCs~IuDIWArVUHRjHPZL44wk~IlUy2MInTRWkJgIuBjfFyeMIOC-~-vd13o-WkEODn2gX6EAY0fJjQKQ7Gxk242JdiIPu-lCTmwnKIdd7zyPV8iTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
            {href: "https://s3-alpha-sig.figma.com/img/8f52/c07a/27af346c7817e036a3d13baeb8943328?Expires=1698019200&Signature=fLaItDJ6SWFWcflhmC4pNh~s7uzgH7kUwTbUFzV34A1X53Vgl8AnJAFtJ4TMnXH4A83lBRptNR4Eo2zalwa~tBQE8Ywrk2gSKAZcM2K-1CN5Ef~VNUecEb8w3ICgZdVvckcri~RkzCOJ-mx4rDKfDa4ytfI3zP-yz1xdXOC0D9Map9t3CvwA5t2I~pPgH~DyO4n-CO-Sie2zhRGxif6TJ5jqK3Ho1O0o9dLbWeCs~IuDIWArVUHRjHPZL44wk~IlUy2MInTRWkJgIuBjfFyeMIOC-~-vd13o-WkEODn2gX6EAY0fJjQKQ7Gxk242JdiIPu-lCTmwnKIdd7zyPV8iTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
        ]
    } as WhyMITIT,
    {
        title: "4.ВІТІ – це база підготовки майбутніх кібервоінів. ",
        titleText: "Протягом всього терміну навчання ти будеш вивчати сучасні системи захисту інформації, апаратно-програмні засоби CISCO, волоконно-оптичні технології побудови мереж передачі повідомлень.\n",
        finalText: "Ти зможеш професійно захищати Україну в кіберпросторі!",
        images: [
            {href: "https://s3-alpha-sig.figma.com/img/8f52/c07a/27af346c7817e036a3d13baeb8943328?Expires=1698019200&Signature=fLaItDJ6SWFWcflhmC4pNh~s7uzgH7kUwTbUFzV34A1X53Vgl8AnJAFtJ4TMnXH4A83lBRptNR4Eo2zalwa~tBQE8Ywrk2gSKAZcM2K-1CN5Ef~VNUecEb8w3ICgZdVvckcri~RkzCOJ-mx4rDKfDa4ytfI3zP-yz1xdXOC0D9Map9t3CvwA5t2I~pPgH~DyO4n-CO-Sie2zhRGxif6TJ5jqK3Ho1O0o9dLbWeCs~IuDIWArVUHRjHPZL44wk~IlUy2MInTRWkJgIuBjfFyeMIOC-~-vd13o-WkEODn2gX6EAY0fJjQKQ7Gxk242JdiIPu-lCTmwnKIdd7zyPV8iTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
            {href: "https://s3-alpha-sig.figma.com/img/8f52/c07a/27af346c7817e036a3d13baeb8943328?Expires=1698019200&Signature=fLaItDJ6SWFWcflhmC4pNh~s7uzgH7kUwTbUFzV34A1X53Vgl8AnJAFtJ4TMnXH4A83lBRptNR4Eo2zalwa~tBQE8Ywrk2gSKAZcM2K-1CN5Ef~VNUecEb8w3ICgZdVvckcri~RkzCOJ-mx4rDKfDa4ytfI3zP-yz1xdXOC0D9Map9t3CvwA5t2I~pPgH~DyO4n-CO-Sie2zhRGxif6TJ5jqK3Ho1O0o9dLbWeCs~IuDIWArVUHRjHPZL44wk~IlUy2MInTRWkJgIuBjfFyeMIOC-~-vd13o-WkEODn2gX6EAY0fJjQKQ7Gxk242JdiIPu-lCTmwnKIdd7zyPV8iTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
        ]
    } as WhyMITIT,
    {
        title: "5. ВІТІ – це сучасний рівень викладання",
        titleText: "з використанням інноваційних технологій та сучасних програмних продуктів на базі різноманітних навчальних класів (комп’ютерні класи, спеціалізовані лабораторії, навчально-тренувальний комплекс тощо) з залученням значного наукового потенціалу (15 докторів наук, 12 професорів, 61кандидата наук, 48 доцентів, 2 Заслужених діяча науки та техніки, 1 Заслужений працівник освіти, 1 Лауреат Державної премії України, 1 – академік галузевої академії). Постійний доступ до інститутської локальної мережі а також до мережі Internet дає можливість курсантам опановувати знання на сучасному рівні\n",
        finalText: "Навчатись дуже цікаво та перспективно.",
        images: [
            {href: "https://s3-alpha-sig.figma.com/img/8f52/c07a/27af346c7817e036a3d13baeb8943328?Expires=1698019200&Signature=fLaItDJ6SWFWcflhmC4pNh~s7uzgH7kUwTbUFzV34A1X53Vgl8AnJAFtJ4TMnXH4A83lBRptNR4Eo2zalwa~tBQE8Ywrk2gSKAZcM2K-1CN5Ef~VNUecEb8w3ICgZdVvckcri~RkzCOJ-mx4rDKfDa4ytfI3zP-yz1xdXOC0D9Map9t3CvwA5t2I~pPgH~DyO4n-CO-Sie2zhRGxif6TJ5jqK3Ho1O0o9dLbWeCs~IuDIWArVUHRjHPZL44wk~IlUy2MInTRWkJgIuBjfFyeMIOC-~-vd13o-WkEODn2gX6EAY0fJjQKQ7Gxk242JdiIPu-lCTmwnKIdd7zyPV8iTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
            {href: "https://s3-alpha-sig.figma.com/img/8f52/c07a/27af346c7817e036a3d13baeb8943328?Expires=1698019200&Signature=fLaItDJ6SWFWcflhmC4pNh~s7uzgH7kUwTbUFzV34A1X53Vgl8AnJAFtJ4TMnXH4A83lBRptNR4Eo2zalwa~tBQE8Ywrk2gSKAZcM2K-1CN5Ef~VNUecEb8w3ICgZdVvckcri~RkzCOJ-mx4rDKfDa4ytfI3zP-yz1xdXOC0D9Map9t3CvwA5t2I~pPgH~DyO4n-CO-Sie2zhRGxif6TJ5jqK3Ho1O0o9dLbWeCs~IuDIWArVUHRjHPZL44wk~IlUy2MInTRWkJgIuBjfFyeMIOC-~-vd13o-WkEODn2gX6EAY0fJjQKQ7Gxk242JdiIPu-lCTmwnKIdd7zyPV8iTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
        ]
    } as WhyMITIT,
    {
        title: "",
        titleText: "",
        finalText: "",
        images: [
            {href: "https://s3-alpha-sig.figma.com/img/8f52/c07a/27af346c7817e036a3d13baeb8943328?Expires=1698019200&Signature=fLaItDJ6SWFWcflhmC4pNh~s7uzgH7kUwTbUFzV34A1X53Vgl8AnJAFtJ4TMnXH4A83lBRptNR4Eo2zalwa~tBQE8Ywrk2gSKAZcM2K-1CN5Ef~VNUecEb8w3ICgZdVvckcri~RkzCOJ-mx4rDKfDa4ytfI3zP-yz1xdXOC0D9Map9t3CvwA5t2I~pPgH~DyO4n-CO-Sie2zhRGxif6TJ5jqK3Ho1O0o9dLbWeCs~IuDIWArVUHRjHPZL44wk~IlUy2MInTRWkJgIuBjfFyeMIOC-~-vd13o-WkEODn2gX6EAY0fJjQKQ7Gxk242JdiIPu-lCTmwnKIdd7zyPV8iTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
            {href: "https://s3-alpha-sig.figma.com/img/8f52/c07a/27af346c7817e036a3d13baeb8943328?Expires=1698019200&Signature=fLaItDJ6SWFWcflhmC4pNh~s7uzgH7kUwTbUFzV34A1X53Vgl8AnJAFtJ4TMnXH4A83lBRptNR4Eo2zalwa~tBQE8Ywrk2gSKAZcM2K-1CN5Ef~VNUecEb8w3ICgZdVvckcri~RkzCOJ-mx4rDKfDa4ytfI3zP-yz1xdXOC0D9Map9t3CvwA5t2I~pPgH~DyO4n-CO-Sie2zhRGxif6TJ5jqK3Ho1O0o9dLbWeCs~IuDIWArVUHRjHPZL44wk~IlUy2MInTRWkJgIuBjfFyeMIOC-~-vd13o-WkEODn2gX6EAY0fJjQKQ7Gxk242JdiIPu-lCTmwnKIdd7zyPV8iTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
        ]
    } as WhyMITIT,
    {
        title: "6. ВІТІ – це можливість підвищити рівень володіння англійською мовою.",
        titleText: "В інституті створений сучасний лінгафонний клас для поглибленого вивчення англійської мови загального, технічного та військового спрямування.\n",
        content: [
            "Курсанти інституту залучаються як перекладачі при проведенні міжнародних навчань, зустрічей з військовослужбовцями країн-членів НАТО.\n",
            "Випускники інституту беруть участь в міжнародних навчаннях, миротворчих місіях, навчаються у військових коледжах та академіях збройних сил іноземних держав.\n",
            "При закінченні ти можеш отримати свідоцтво про особистий рівень володіння іноземною мовою стандарту НАТО.\n"
        ],
        finalText: "Ти можеш навчитись та вільно спілкуватися іноземною мовою!",
        images: [
            {href: "https://s3-alpha-sig.figma.com/img/8f52/c07a/27af346c7817e036a3d13baeb8943328?Expires=1698019200&Signature=fLaItDJ6SWFWcflhmC4pNh~s7uzgH7kUwTbUFzV34A1X53Vgl8AnJAFtJ4TMnXH4A83lBRptNR4Eo2zalwa~tBQE8Ywrk2gSKAZcM2K-1CN5Ef~VNUecEb8w3ICgZdVvckcri~RkzCOJ-mx4rDKfDa4ytfI3zP-yz1xdXOC0D9Map9t3CvwA5t2I~pPgH~DyO4n-CO-Sie2zhRGxif6TJ5jqK3Ho1O0o9dLbWeCs~IuDIWArVUHRjHPZL44wk~IlUy2MInTRWkJgIuBjfFyeMIOC-~-vd13o-WkEODn2gX6EAY0fJjQKQ7Gxk242JdiIPu-lCTmwnKIdd7zyPV8iTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
            {href: "https://s3-alpha-sig.figma.com/img/8f52/c07a/27af346c7817e036a3d13baeb8943328?Expires=1698019200&Signature=fLaItDJ6SWFWcflhmC4pNh~s7uzgH7kUwTbUFzV34A1X53Vgl8AnJAFtJ4TMnXH4A83lBRptNR4Eo2zalwa~tBQE8Ywrk2gSKAZcM2K-1CN5Ef~VNUecEb8w3ICgZdVvckcri~RkzCOJ-mx4rDKfDa4ytfI3zP-yz1xdXOC0D9Map9t3CvwA5t2I~pPgH~DyO4n-CO-Sie2zhRGxif6TJ5jqK3Ho1O0o9dLbWeCs~IuDIWArVUHRjHPZL44wk~IlUy2MInTRWkJgIuBjfFyeMIOC-~-vd13o-WkEODn2gX6EAY0fJjQKQ7Gxk242JdiIPu-lCTmwnKIdd7zyPV8iTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
        ]
    } as WhyMITIT,
    {
        title: "7. ВІТІ – розвиває сучасні наукові школи в галузях інформаційних технологій, електроніки та телекомунікації. ",
        titleText: "В інституті функціонує ад’юнктура та докторантура з підготовки наукових кадрів вищої кваліфікації та спеціалізована вчена рада щодо захисту кандидатських (докторських) дисертацій з визначеними науковими спеціальностями.\n" +
            "\n",
        finalText: "Після закінчення інституту ти можеш навчатись в ад’юнктурі, докторантурі та отримати наукові ступені доктора філософії та доктора наук.",
        images: [
            {href: "https://s3-alpha-sig.figma.com/img/8f52/c07a/27af346c7817e036a3d13baeb8943328?Expires=1698019200&Signature=fLaItDJ6SWFWcflhmC4pNh~s7uzgH7kUwTbUFzV34A1X53Vgl8AnJAFtJ4TMnXH4A83lBRptNR4Eo2zalwa~tBQE8Ywrk2gSKAZcM2K-1CN5Ef~VNUecEb8w3ICgZdVvckcri~RkzCOJ-mx4rDKfDa4ytfI3zP-yz1xdXOC0D9Map9t3CvwA5t2I~pPgH~DyO4n-CO-Sie2zhRGxif6TJ5jqK3Ho1O0o9dLbWeCs~IuDIWArVUHRjHPZL44wk~IlUy2MInTRWkJgIuBjfFyeMIOC-~-vd13o-WkEODn2gX6EAY0fJjQKQ7Gxk242JdiIPu-lCTmwnKIdd7zyPV8iTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
            {href: "https://s3-alpha-sig.figma.com/img/8f52/c07a/27af346c7817e036a3d13baeb8943328?Expires=1698019200&Signature=fLaItDJ6SWFWcflhmC4pNh~s7uzgH7kUwTbUFzV34A1X53Vgl8AnJAFtJ4TMnXH4A83lBRptNR4Eo2zalwa~tBQE8Ywrk2gSKAZcM2K-1CN5Ef~VNUecEb8w3ICgZdVvckcri~RkzCOJ-mx4rDKfDa4ytfI3zP-yz1xdXOC0D9Map9t3CvwA5t2I~pPgH~DyO4n-CO-Sie2zhRGxif6TJ5jqK3Ho1O0o9dLbWeCs~IuDIWArVUHRjHPZL44wk~IlUy2MInTRWkJgIuBjfFyeMIOC-~-vd13o-WkEODn2gX6EAY0fJjQKQ7Gxk242JdiIPu-lCTmwnKIdd7zyPV8iTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
        ]
    } as WhyMITIT,
    {
        title: "8. ВІТІ – надає прекрасні умови для заняття спортом.",
        titleText: "Під керівництвом досвідчених офіцерів-фахівців курсанти покращують особистий рівень фізичної підготовки з бігу та силових вправ. Відпрацьовуються також й воєнно-спортивні види спорту – перетин полоси перешкод, вправи на витривалість з озброєнням.\n",
        content: [
            "Кожного року наш інститут представляє команду з військово-спортивного багатоборства, де курсанти показують свої уміння з плавання, бігу та стрільбі з пістолету.\n",
            "Щорічно відбуваються спартакіади київських ВНЗ з різних видів спорту: плавання, легкої атлетики, баскетболу, шахів, волейболу, футболу, настільному тенісу, армспорту та інше.\n"
        ],
        finalText: "Ти будеш добре фізично розвиненим!",
        images: [
            {href: "https://s3-alpha-sig.figma.com/img/8f52/c07a/27af346c7817e036a3d13baeb8943328?Expires=1698019200&Signature=fLaItDJ6SWFWcflhmC4pNh~s7uzgH7kUwTbUFzV34A1X53Vgl8AnJAFtJ4TMnXH4A83lBRptNR4Eo2zalwa~tBQE8Ywrk2gSKAZcM2K-1CN5Ef~VNUecEb8w3ICgZdVvckcri~RkzCOJ-mx4rDKfDa4ytfI3zP-yz1xdXOC0D9Map9t3CvwA5t2I~pPgH~DyO4n-CO-Sie2zhRGxif6TJ5jqK3Ho1O0o9dLbWeCs~IuDIWArVUHRjHPZL44wk~IlUy2MInTRWkJgIuBjfFyeMIOC-~-vd13o-WkEODn2gX6EAY0fJjQKQ7Gxk242JdiIPu-lCTmwnKIdd7zyPV8iTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
            {href: "https://s3-alpha-sig.figma.com/img/8f52/c07a/27af346c7817e036a3d13baeb8943328?Expires=1698019200&Signature=fLaItDJ6SWFWcflhmC4pNh~s7uzgH7kUwTbUFzV34A1X53Vgl8AnJAFtJ4TMnXH4A83lBRptNR4Eo2zalwa~tBQE8Ywrk2gSKAZcM2K-1CN5Ef~VNUecEb8w3ICgZdVvckcri~RkzCOJ-mx4rDKfDa4ytfI3zP-yz1xdXOC0D9Map9t3CvwA5t2I~pPgH~DyO4n-CO-Sie2zhRGxif6TJ5jqK3Ho1O0o9dLbWeCs~IuDIWArVUHRjHPZL44wk~IlUy2MInTRWkJgIuBjfFyeMIOC-~-vd13o-WkEODn2gX6EAY0fJjQKQ7Gxk242JdiIPu-lCTmwnKIdd7zyPV8iTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
        ]
    } as WhyMITIT,
    {
        title: "9. ВІТІ – створює умови повноцінного, змістовного проведення вільного часу.",
        titleText: "Військовий колектив виховує талановитих творчих особистостей, яскраві творчі колективи.\n",
        content: [
            "Курсанти інституту постійно беруть участь та займають призові місця у Всеукраїнських конкурсах, олімпіадах, творчих виступах, в міжвишівські КВК.\n",
            "Під час звільнення та у вихідні дні є можливість знайомства зі столицею, відвідування історичних місць Києва, похід у театри.\n"
        ],
        finalText: "Ти маєш можливість розвинутись як особистість.",
        images: [
            {href: "https://s3-alpha-sig.figma.com/img/8f52/c07a/27af346c7817e036a3d13baeb8943328?Expires=1698019200&Signature=fLaItDJ6SWFWcflhmC4pNh~s7uzgH7kUwTbUFzV34A1X53Vgl8AnJAFtJ4TMnXH4A83lBRptNR4Eo2zalwa~tBQE8Ywrk2gSKAZcM2K-1CN5Ef~VNUecEb8w3ICgZdVvckcri~RkzCOJ-mx4rDKfDa4ytfI3zP-yz1xdXOC0D9Map9t3CvwA5t2I~pPgH~DyO4n-CO-Sie2zhRGxif6TJ5jqK3Ho1O0o9dLbWeCs~IuDIWArVUHRjHPZL44wk~IlUy2MInTRWkJgIuBjfFyeMIOC-~-vd13o-WkEODn2gX6EAY0fJjQKQ7Gxk242JdiIPu-lCTmwnKIdd7zyPV8iTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
            {href: "https://s3-alpha-sig.figma.com/img/8f52/c07a/27af346c7817e036a3d13baeb8943328?Expires=1698019200&Signature=fLaItDJ6SWFWcflhmC4pNh~s7uzgH7kUwTbUFzV34A1X53Vgl8AnJAFtJ4TMnXH4A83lBRptNR4Eo2zalwa~tBQE8Ywrk2gSKAZcM2K-1CN5Ef~VNUecEb8w3ICgZdVvckcri~RkzCOJ-mx4rDKfDa4ytfI3zP-yz1xdXOC0D9Map9t3CvwA5t2I~pPgH~DyO4n-CO-Sie2zhRGxif6TJ5jqK3Ho1O0o9dLbWeCs~IuDIWArVUHRjHPZL44wk~IlUy2MInTRWkJgIuBjfFyeMIOC-~-vd13o-WkEODn2gX6EAY0fJjQKQ7Gxk242JdiIPu-lCTmwnKIdd7zyPV8iTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
        ]
    } as WhyMITIT,
    {
        title: "10. ВІТІ – заохочує іменними стипендіями. ",
        titleText: "Крім постійного щомісячного грошового забезпечення, кращі курсанти за результатами навчання та участі в суспільній діяльності інституту заохочуються іменними стипендіями: Президента України, Верховної Ради України, Кабінету Міністрів України, та іншими\n",
        finalText: "Ти можеш отримувати додаткову стипендію!",
        images: [
            {href: "https://s3-alpha-sig.figma.com/img/8f52/c07a/27af346c7817e036a3d13baeb8943328?Expires=1698019200&Signature=fLaItDJ6SWFWcflhmC4pNh~s7uzgH7kUwTbUFzV34A1X53Vgl8AnJAFtJ4TMnXH4A83lBRptNR4Eo2zalwa~tBQE8Ywrk2gSKAZcM2K-1CN5Ef~VNUecEb8w3ICgZdVvckcri~RkzCOJ-mx4rDKfDa4ytfI3zP-yz1xdXOC0D9Map9t3CvwA5t2I~pPgH~DyO4n-CO-Sie2zhRGxif6TJ5jqK3Ho1O0o9dLbWeCs~IuDIWArVUHRjHPZL44wk~IlUy2MInTRWkJgIuBjfFyeMIOC-~-vd13o-WkEODn2gX6EAY0fJjQKQ7Gxk242JdiIPu-lCTmwnKIdd7zyPV8iTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
            {href: "https://s3-alpha-sig.figma.com/img/8f52/c07a/27af346c7817e036a3d13baeb8943328?Expires=1698019200&Signature=fLaItDJ6SWFWcflhmC4pNh~s7uzgH7kUwTbUFzV34A1X53Vgl8AnJAFtJ4TMnXH4A83lBRptNR4Eo2zalwa~tBQE8Ywrk2gSKAZcM2K-1CN5Ef~VNUecEb8w3ICgZdVvckcri~RkzCOJ-mx4rDKfDa4ytfI3zP-yz1xdXOC0D9Map9t3CvwA5t2I~pPgH~DyO4n-CO-Sie2zhRGxif6TJ5jqK3Ho1O0o9dLbWeCs~IuDIWArVUHRjHPZL44wk~IlUy2MInTRWkJgIuBjfFyeMIOC-~-vd13o-WkEODn2gX6EAY0fJjQKQ7Gxk242JdiIPu-lCTmwnKIdd7zyPV8iTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
        ]
    } as WhyMITIT,
    {
        title: "11. Випусники ВІТІ отримують посвідчення водія категорій “В”, “С”",
        titleText: "Під час основного терміну навчання ти зможеш вивчити складові автомобіля та опанувати його водіння.",
        finalText: "Ти можеш стати класним водієм!",
        images: [
            {href: "https://s3-alpha-sig.figma.com/img/8f52/c07a/27af346c7817e036a3d13baeb8943328?Expires=1698019200&Signature=fLaItDJ6SWFWcflhmC4pNh~s7uzgH7kUwTbUFzV34A1X53Vgl8AnJAFtJ4TMnXH4A83lBRptNR4Eo2zalwa~tBQE8Ywrk2gSKAZcM2K-1CN5Ef~VNUecEb8w3ICgZdVvckcri~RkzCOJ-mx4rDKfDa4ytfI3zP-yz1xdXOC0D9Map9t3CvwA5t2I~pPgH~DyO4n-CO-Sie2zhRGxif6TJ5jqK3Ho1O0o9dLbWeCs~IuDIWArVUHRjHPZL44wk~IlUy2MInTRWkJgIuBjfFyeMIOC-~-vd13o-WkEODn2gX6EAY0fJjQKQ7Gxk242JdiIPu-lCTmwnKIdd7zyPV8iTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
            {href: "https://s3-alpha-sig.figma.com/img/8f52/c07a/27af346c7817e036a3d13baeb8943328?Expires=1698019200&Signature=fLaItDJ6SWFWcflhmC4pNh~s7uzgH7kUwTbUFzV34A1X53Vgl8AnJAFtJ4TMnXH4A83lBRptNR4Eo2zalwa~tBQE8Ywrk2gSKAZcM2K-1CN5Ef~VNUecEb8w3ICgZdVvckcri~RkzCOJ-mx4rDKfDa4ytfI3zP-yz1xdXOC0D9Map9t3CvwA5t2I~pPgH~DyO4n-CO-Sie2zhRGxif6TJ5jqK3Ho1O0o9dLbWeCs~IuDIWArVUHRjHPZL44wk~IlUy2MInTRWkJgIuBjfFyeMIOC-~-vd13o-WkEODn2gX6EAY0fJjQKQ7Gxk242JdiIPu-lCTmwnKIdd7zyPV8iTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
        ]
    } as WhyMITIT,
    {
        title: "12. ВІТІ – це гарант соціального захисту:",
        content: [
            "1. Ти навчаєшся тільки на бюджетній формі навчання (за кошти держави);\n",
            "2. Ти отримуєш щомісячне грошове забезпечення протягом всього терміну навчання, за навчання на «добре» та «відмінно» - підвищене;\n",
            "3. Тебе повністю забезпечують одягом, харчуванням, місцем для проживання;\n",
            "4. Весь термін твого навчання зараховується до загальної вислуги років.\n",
            "Протягом всього терміну військової служби в ЗСУ (інших військових формуваннях) тобі гарантовано отримання стабільного грошового забезпечення!!!"
        ],
        images: [
            {href: "https://s3-alpha-sig.figma.com/img/8f52/c07a/27af346c7817e036a3d13baeb8943328?Expires=1698019200&Signature=fLaItDJ6SWFWcflhmC4pNh~s7uzgH7kUwTbUFzV34A1X53Vgl8AnJAFtJ4TMnXH4A83lBRptNR4Eo2zalwa~tBQE8Ywrk2gSKAZcM2K-1CN5Ef~VNUecEb8w3ICgZdVvckcri~RkzCOJ-mx4rDKfDa4ytfI3zP-yz1xdXOC0D9Map9t3CvwA5t2I~pPgH~DyO4n-CO-Sie2zhRGxif6TJ5jqK3Ho1O0o9dLbWeCs~IuDIWArVUHRjHPZL44wk~IlUy2MInTRWkJgIuBjfFyeMIOC-~-vd13o-WkEODn2gX6EAY0fJjQKQ7Gxk242JdiIPu-lCTmwnKIdd7zyPV8iTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
            {href: "https://s3-alpha-sig.figma.com/img/8f52/c07a/27af346c7817e036a3d13baeb8943328?Expires=1698019200&Signature=fLaItDJ6SWFWcflhmC4pNh~s7uzgH7kUwTbUFzV34A1X53Vgl8AnJAFtJ4TMnXH4A83lBRptNR4Eo2zalwa~tBQE8Ywrk2gSKAZcM2K-1CN5Ef~VNUecEb8w3ICgZdVvckcri~RkzCOJ-mx4rDKfDa4ytfI3zP-yz1xdXOC0D9Map9t3CvwA5t2I~pPgH~DyO4n-CO-Sie2zhRGxif6TJ5jqK3Ho1O0o9dLbWeCs~IuDIWArVUHRjHPZL44wk~IlUy2MInTRWkJgIuBjfFyeMIOC-~-vd13o-WkEODn2gX6EAY0fJjQKQ7Gxk242JdiIPu-lCTmwnKIdd7zyPV8iTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
        ]
    } as WhyMITIT,
]





