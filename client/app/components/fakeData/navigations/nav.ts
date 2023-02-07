import { IMenu, IMenuAddrePhone, IMenuAdress } from "./nav.types"

export const menus: IMenu = {
    items: [
        {
            id: 1,
            icon: 'MdHome',
            link: '/',
            title: 'ГЛАВНАЯ',
        },
        {
            id: 2,
            icon: 'MdRecycling',
            link: '/about',
            title: 'О КОМПАНИИ',
        },
        {
            id: 3,
            icon: 'MdRealEstateAgent',
            link: '/services',
            title: 'УСЛУГИ',
        },
        {
            id: 4,
            icon: 'MdOutlineRepeatOn',
            link: '/news',
            title: 'НОВОСТИ',
        },
        {
            id: 5,
            icon: 'MdLocalFireDepartment',
            link: '/coments',
            title: 'ОТЗЫВЫ',
        },
        {
            id: 6,
            icon: 'MdOutlineLocalPhone',
            link: '/contact',
            title: 'КОНТАКТЫ',
        },
    ],
}

export const address: IMenuAdress = {
    items: [
        { id: 1, icon: 'MdLocalLibrary', title: "г. Ташкент, ул. Калужская, 80, офис 315" },
        { id: 2, icon: 'MdOutlineAccessTimeFilled', title: "Пн - Пт: c 8.00 - 19.00 Сб - Вс: c 9.00 - 15.00" }
    ]
}

export const addressPhone: IMenuAddrePhone = {
    items: [
        {id: 1,  icon: "MdOutlineLocalPhone", title: "998 90 999 99 99"},
        {id: 2,  icon: "MdOutlineLocalPhone", title: "998 90 999 99 99"}
    ]
}