import {RouterNames} from "./RouterNames";
import {NavLink} from "entities/link";
import {Faculty} from "../../entities/faculty";
import {Superior} from "../../entities/superior";
import {Department} from "../../entities/department";
import {Image, TextBlock, List} from "../../entities/text-block";

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
            title: "Кафедри", to: RouterNames.DEPARTMENTS,
            sublinks: [
                {id: 10, title: "Кафедра загально-військових дисциплін", to: RouterNames.DEPARTMENTS},
                {id: 11, title: "Кафедра іноземних мов", to: RouterNames.DEPARTMENTS},
                {
                    id: 12,
                    title: "Кафедра фізичного виховання, спеціальної фізичної підготовки і спорту",
                    to: RouterNames.DEPARTMENTS
                },
                {id: 13, title: "Кафедра військово-гуманітарних дисциплін", to: RouterNames.DEPARTMENTS},
                {id: 14, title: "Кафедра математики та фізики", to: RouterNames.DEPARTMENTS},
                {id: 15, title: "Кафедра військової підготовки", to: RouterNames.DEPARTMENTS},
            ]
        },
        {
            id: 16,
            title: "Підрозіли", to: RouterNames.UNITS,
            sublinks: [
                {
                    id: 17, title: "Науковий центр зв’язку та інформатизації", to: RouterNames.UNITS
                },
                {
                    id: 18, title: "Батальйон забезпечення навчального процесу", to: RouterNames.UNITS
                },
                {
                    id: 19, title: "5-ті Курси перепідготовки та підвищення кваліфікації", to: RouterNames.UNITS
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

export const faculties = [
    {
        id: 7,
        title: "Факультет телекомунікаційних систем",
        headerImg: "https://s3-alpha-sig.figma.com/img/67a1/9317/ef1598cffaba0a5ce84bb6ec1cc39fa0?Expires=1698019200&Signature=Eb9Bp8GBbH4lc4FjPsuIyl6SK2uukB92c2lXOahwMAakB4oy94L-AvzmWuLhyG~0nr7ZW7Pyp3~FxF6zQa30hkMy99z0Q8wMic19OfsTFUyscsKNsozfwKSLkYTyDyYu5tWpuZ5NkFf2jNIL60MUbUxX3P7FLmCIPdLOz8CFQkhVhP2UiNPQmrmBCUc5DzOz74Yhq5-HRk9ER5USNyIgA5GecrwLghi4E839Fgd9pmRKbD7E4ZgGRwvQEvhnROS5g3vT--uSTCfIo3s4lLs3hCpy5vdr2cJVwWUr8T534pquiK4GujpOF23KbQDmDp9Q7nGrrGlJ2MpJXIbcySk21g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
                content: [
                    "На факультеті потужний науково-педагогічний потенціал, сучасна навчально-матеріальна база, комп’ютерні та спеціалізовані класи. Лекційні аудиторії оснащені новітньою телекомунікаційною технікою та засобами зв’язку. Серед курсантів факультету навчаються іменні стипендіати премій Президента України, Верховної Ради України, Кабінету Міністрів України і переможці конкурсів наукових робіт в різних галузях знань.\n"
                ],
                lists: [
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
                content: [
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
                content: [
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
                content: [
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
                content: [
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
                content: [
                    "На факультеті потужний науково-педагогічний потенціал, сучасна навчально-матеріальна база, комп’ютерні та спеціалізовані класи. Лекційні аудиторії оснащені новітньою телекомунікаційною технікою та засобами зв’язку. Серед курсантів факультету навчаються іменні стипендіати премій Президента України, Верховної Ради України, Кабінету Міністрів України і переможці конкурсів наукових робіт в різних галузях знань.\n"
                ],
                lists: [
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
                content: [
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
                content: [
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
                content: [
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
                content: [
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
                content: [
                    "На факультеті потужний науково-педагогічний потенціал, сучасна навчально-матеріальна база, комп’ютерні та спеціалізовані класи. Лекційні аудиторії оснащені новітньою телекомунікаційною технікою та засобами зв’язку. Серед курсантів факультету навчаються іменні стипендіати премій Президента України, Верховної Ради України, Кабінету Міністрів України і переможці конкурсів наукових робіт в різних галузях знань.\n"
                ],
                lists: [
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
                content: [
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
                content: [
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
                content: [
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
                content: [
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
        img:{href: "https://s3-alpha-sig.figma.com/img/355c/14a8/ed5f3a04159810242d8c7f4daca9b740?Expires=1697414400&Signature=pYbgUtQuj3fOqH2ERhS3vqPvpw6UCjpScaVH-m1qnwgPEFV8Ua7UP30GhmpLaDoJPospS6dJfP-~THZVhvw83f1GGqlrL8C~Y2P3XKP-lnHfh~wqlaYqki1v8THBxeAW5nCqkp3VvXYZbCt8N-6OLV9ShlMi1eqepaEI-nZAF95JdxXEQo6F4Z-nplemCbM2rrQDN2AQQgQh~X2cOC4EN2nCwie6L5mRiuPrjaG1Z5QSiD-aTFRrS0mvW9Sjtw76YIMC-Q7CpWRRAEFc49dv4SxhkTTQirFEJcvOJk3of2qbDTLBlnQ0iu6sJT4WFXfrqdIPKBpWHp1TldlDuX8qvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
        name: "ОСТАПЧУК Віктор Миколайович",
        position: "Начальник інституту",
        rang: "генерал-майор",
        achievements: [
            "лицар ордена Богдана Хмельницького III ступеня",
            "учасник бойових дій"
        ],
    },
    {
        img:{href: "https://s3-alpha-sig.figma.com/img/c194/0e3b/17d945552491142a3e2561d91d8b7239?Expires=1697414400&Signature=fDjm33SmQ4z448dANXL0g9wpFIsknrm60QYobhjRv69UKamDsR5CNfgu3SbIHRA5iaChTgi0yKEee4VPV6o3Co1pmqMJRjBsMY8RNEMXSNwQm5dX~gOfpb8lt8~n0gEOlkqnLCUY~ua9W61qS0dFXXEYnTySjqf08J~vywIomPPYfl4d35hHEG5LoP6aZC9c~8Pax9A2tmrqJ6JDexPTCFqRhSpwKLvNOiedQ3nhF8K8RK2UDoKOt20BuV~TLQrC~ToYf26G6dpmng4b6bccbwFn1BzGlBlUoUGoJHic4DaPnnIiKykR3jJhNLc~KORnSLlmi25YmLzgE0bGxK0~TA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
        name: "ТАРАСОВ Віталій Віталійович",
        position: "Заступник начальника інституту",
        rang: "полковник",
        achievements: [
            "учасник бойових дій"
        ],
        telephone: "+38 (044) 256-23-08"
    },
    {
        img:{href: "https://s3-alpha-sig.figma.com/img/1c09/48e2/4bad7600f256a07ca533a892467ee962?Expires=1697414400&Signature=YkqoyE5rSnE7JCiHxkj0iFVHCkfmr6APRbnSo7szS3S~j6OoKK3TSNc7BMo1A~Wnb2Pn4FnKBlkVWBPTpH812BQcDS64rWr40Y1i-hYLNtLTgdkNzsK5cFjezpx1UZbBTPYKFc0W4soDqb~KUnnPFAyEF~c4DGmFNnnwB1NJcV12em31eNXBN-VEBJKMSNLZhkn3eaG68JiHEsV0kWucMP2S-e~fzzuj2k773osVRHIf2iYQ2m6g9ZSigvJ32zCrnXFcyVcJ0TiPX93cJNW5ERp0kHr6zEHZTl93Pf4gNm6SAgJolCIv2ynQfFjzxgxxHqgRFrmzrxID4WkAEz3SOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
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
        img:{href: "https://s3-alpha-sig.figma.com/img/944e/2b83/ecba4b3b1d08543c39690e5c986f2484?Expires=1697414400&Signature=htu5V6bUz97CqVFhyDBFWuXksIl~NdxsJQZre2O00VedU-1O2AG4Cd2utjoH7OIscwhiGnAVg50dJl~Wz~X-uew26a6iq7zO2eVcl6CKwWvrU1hSbrY4QlCa-AwtXDW8h~3dzL7DrfZWG1AmSsDzVK9d1MPzWuNcOWFjzFMh57xMqERGDJT4Y0oJzOap-zy67JJwkUjCqwZXq7IfWF78KI1uLeO0pJExQ9XU2cBY1vr-BiJqwsF17wZN65cOGKIBpVirkLwbj~jGBiXF8cq3SLwgcar1Ieo5FKqNH8TEvlNq9VLDEuOKXiJE2nOP8BOINzE2sh2HZJJMBiqNdH76Nw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} as Image,
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
        img:{href: "https://s3-alpha-sig.figma.com/img/b645/1941/87d0a843d776391a15f0bc50720c1877?Expires=1697414400&Signature=Q1x6oGIqOij8RfjwWOqyhbOVCfllOpYKCV~kqED54N-ZtByGyXI2NkcrAQtESbnn8m3GDFYCcrY2c-7AjkxYr2D95u4Ck9DuZWmwq0DmGOxNlj6zE2HAZqiBT5HqpOt7EyHZnfKF4fTBFZYUAtB0fTOiVWdMgWAjdTOXMbL-LVuT26gz~ISh1-jECnqrQV6GZwjE07UnuvWpfZir6PJf6Ousqe6O~pKvPeKPl-Lfm1NgalKy5EcSDsms1GSVnJjes~EWyhsjwJF2ZAfbONk1awInumS52SlOQWnu35A9lWwWQgv27vz3u12RVtPR9scysJudN9ob2sE9aKdCVuyqcg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
        name: "ПЕТРОВСЬКИЙ Олег Євгенович",
        position: "Заступник начальника інституту з морально-психологічного забезпечення",
        rang: "полковник",
        achievements: [
            "учасник бойових дій"
        ],
        telephone: "+38 (044) 256-22-09"
    },
    {
        img:{href: "https://s3-alpha-sig.figma.com/img/ea15/b3d6/41d2612a47275af0834cf310a23d92ea?Expires=1697414400&Signature=ZMewPOVBlfrD1PlJRw4CrpDv20KNneq43FOadHiYYQZHPELyUZ3hSQvB1vBH40OjNAHRzjj0cuscLPf8aNNTd5KZf1~2aQu~up5QEA4gl6CuCruNGvR6UNL1~YVhlGD5DapqfCZvHUSKZtPjimBnGd8TWegPke1zeyVhjpGvce4w-tiq8zGOV0~gKI1BzYHXfeqbWh2gH5stIME-z-sNk36L06GMr07MLyOqz9EQIKKUWv~TPo5w~h1ItkhHp23eSByQC4xc9kVVz-xQ0GSoi6~D~TCJJMCoNGY2Ro-YMV5bHe1zw5ktt3hok7qwuW4zMjfIH3mWkp-MecRjco09xA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
        name: "КІМ Олексій Сергійович",
        position: "Заступник начальника інституту з озброєння - начальник озброєння",
        rang: "полковник",
        achievements: [
            "лицар ордена Богдана Хмельницького III ступеня",
            "учасник бойових дій"
        ],
    },
    {
        img:{href: "https://s3-alpha-sig.figma.com/img/cc44/cdd3/a8142a2b66e0100e2f5771b86feb3b45?Expires=1697414400&Signature=PtG~RYNIbVL9jvHvHWhIhA7o3oh2IaFzf9-LTC69hqFN58-HYFdnAVbdW6TnQYGZW7JhMld1Le5YRy-xpRJEPED0-7sRSDhuRxzbZgzKXLsUolbT48csqEuQvIMjYfqGVaIYRwfgUKvBdIcNruJAIz5TErOEjrElZ~~N7sYXggxy7xliVAnklV6-Ib~bYVoQlY7t1wCLr1tkb9VB7sj0YxdJSFeFrrro-jH7KL-ygHkqLranbw~JefI3fDZjkgQArlaBXCEnOGDaebo~uDFIIqo9R3bBvHCVEEQThpbSXDnl7buAasaHVdAvU5zbuH1caopDX4ESV9pg-b-7FVh3jQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
        name: "СТАНІЛОГА Олександр Григорович",
        position: "Заступник начальника інституту з тилу - начальник тилу",
        rang: "полковник",
        achievements: [
            "учасник бойових дій"
        ],
        telephone: "+38 (044) 256-24-44"
    }
]
