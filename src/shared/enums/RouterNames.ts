import { SubLink} from "../../widgets/WrapperParts/Header/model/types";

export const RouterNames = {
    HOME: {to: "/", name: "home", titleUA: "Головна", titleENG: "Main"} ,
    INSTITUTE: {to: "/institute", name: "institute", titleUA: "Інститут", titleENG: "Institute"},
    ENTRANTS: {to: "/page/entrants", name: "entrants", titleUA: "Вступникам", titleENG: "Entrances"},
    STUDY: {to: "/page/study", name: "study", titleUA: "Навчання", titleENG: "Study"},
    CONTACTS: {to: "/page/contacts", name: "contacts", titleUA: "Контакти", titleENG: "Contacts"},

    NEWS: {to: "/news", name: "news", titleUA: "Новини", titleENG: "News"},
    NOT_FOUND: {to: "/404", name: "not_found", titleUA: "Не знайдено", titleENG: "Not Found"},
    SPECIALITIES: {to: "/specialities", name: "specialities", titleUA: "Спеціальності", titleENG: "Specialities"},
    SCIENCE: {to: "/page/science", name: "science", titleUA: "Наука", titleENG: "Science"},

    FACULTIES: {
        titleUA: "Факультети",
        titleENG: "Faculties",
        subLinks: [
            {
                to: "/page/faculty1",
                name: "faculty1",
                titleUA: "Факультет телекомунікаційних систем",
                titleENG: "Faculty of Telecommunication Systems"
            },
            {
                to: "/page/faculty2",
                name: "faculty2",
                titleUA: "Факультет інформаційних технологій",
                titleENG: "Faculty of Information Technologies"
            },
            {
                to: "/page/faculty3",
                name: "faculty3",
                titleUA: "Факультет бойового застосування систем управління та звʼязку",
                titleENG: "Faculty of the combat usage of control  and communications systems"
            },
        ] as SubLink[]
    },
    DEPARTMENTS: {
        titleUA: "Кафедри",
        titleENG: "Departments",
        subLinks: [
            {
                to: "/page/department1",
                name: "department1",
                titleUA: "Кафедра загально-військових дисциплін ",
                titleENG: "Department of Combined Arms Disciplines"
            },
            {
                to: "/page/department2",
                name: "department2",
                titleUA: "Кафедра іноземних мов ",
                titleENG: "Department of Foreign Languages"
            },
            {
                to: "/page/department3",
                name: "department3",
                titleUA: "Кафедра фізичного виховання, спеціальної фізичної підготовки і спорту ",
                titleENG: "Department of Physical Education, Special Physical training and Sports"
            },
            {
                to: "/page/department4",
                name: "department4",
                titleUA: "Кафедра військово-гуманітарних дисциплін ",
                titleENG: "Department of Military and Humanitarian Disciplines"
            },
            {
                to: "/page/department5",
                name: "department5",
                titleUA: "Кафедра математики та фізики ",
                titleENG: "Department Foreign Languages"
            },
            {
                to: "/page/department6",
                name: "department6",
                titleUA: "Кафедра військової підготовки ",
                titleENG: "Department of Military Training"
            },
        ] as SubLink[]
    },
    UNITS: {
        titleUA: "Підрозділи",
        titleENG: "Units",
        subLinks: [
            {
                to: "/page/unit1",
                name: "unit1",
                titleUA: "Науковий центр зв’язку та інформатизації",
                titleENG: "Science center of signal and information technologies"
            },
            {
                to: "/page/unit2",
                name: "unit2",
                titleUA: "Батальйон забезпечення навчального процесу",
                titleENG: "Supplement Battalion of studying courses"
            },
            {
                to: "/page/unit3",
                name: "unit3",
                titleUA: "5-ті Курси перепідготовки та підвищення кваліфікації",
                titleENG: "5th Courses of retraining and advanced training"
            },
        ] as SubLink[]
    },
    COOPERATION: {
        titleUA: "Співробітництво",
        titleENG: "Cooperation",
        subLinks: [
            {
                to: "/page/cooperation_international",
                name: "cooperation_international",
                titleUA: "Міжнародне співробітництво",
                titleENG: "International Cooperation"
            },
            {
                to: "/page/cooperation-inside",
                name: "cooperation_inside",
                titleUA: "Внутрішнє співробітництво",
                titleENG: "Inside Cooperation"
            },
        ] as SubLink[]
    },


    OUR_WINS: {to: "/page/wins", name: "our_wins", titleUA: "Наші перемоги", titleENG: "Our Wins"},
    SUPERIORS: {to: "/page/superiors", name: "superiors", titleUA: "Керівний склад", titleENG: "Superiors"},
    WHY_MITIT: {to: "/page/why", name: "why", titleUA: "Чому ВІТІ?", titleENG: "Why MITIT?"},
    HISTORY: {to: "/page/history", name: "history", titleUA: "Історична довідка", titleENG: "History"},
    PUBLIC_INFO: {to: "/page/public", name: "public", titleUA: "Публічна інформація", titleENG: "Public Info"},
    HEROES: {to: "/page/heroes", name: "heroes", titleUA: "Наші Герої", titleENG: "Heroes"},
}
