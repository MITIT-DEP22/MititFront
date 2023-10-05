import React from 'react';
import css from "./AdditionalLinks.module.scss"
import AdditionalLink from "./AdditionalLink/AdditionalLink";


const links = [
    {
        title: "Новини Міністерства\nОборони України",
        img: "https://s3-alpha-sig.figma.com/img/a98d/f8d3/966a4c8d6b740f653841d623d4c08228?Expires=1697414400&Signature=Kao5769qP9bkP8gAXEjD509We7wT8BeIdz49GSNjCjA~MTt6EKB1F-SXbNPJY5iMdAknqrb2mHSgGs0w80hw2cbyJKgxNBNzQnEsN-4Vpmh~g1j97DjK9oZwdGh3lvC7gSaeQqLQCZPwURJS5K209WXWn3MCa4InVYiGo3N7MC0xfqHi71rT4sF7-8yqMy8fIgdDejlMX5teocO~Ozpiu2XVWCjk001dNwgFi-7hAnkWhXoHTqGh5KbaSyCnVBoacEqoRCFib-KAJv7xeyuT8EWQ9ZyfnjB3YcQJV9nEilW8T1-V-VOyvEG2e4-TvLthBeo~evAF2eaJAiDr7-B8kQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        link: "https://www.mil.gov.ua/en/news/"
    },
    {
        title: "Послухати військове радіо",
        img: "https://s3-alpha-sig.figma.com/img/699d/5f36/d29150a3e48f7f27be0440f1bcc7cc26?Expires=1697414400&Signature=jpgJKdYkkqYSb7VsUEjnWj9vL~O0gCsmX3VrkeUe4WPtoB2RCWiORgU2m9UJAOI2HhcCoshR2B0pICxrV9daea~satyfRPnAWbKRe-kZq5RMajru0STafHheSLAYzkh4UALI1VXHRE6fdxx~AVJHgJO6-TcXx6nvkjU5EFJ2dOn3I2lK9ihzIX5MrzeaMz7MHeGZ~MjgcOifcfWaOVC0RtvbiKLrdwr7hgKveA05yc78k-qClvK4G33vwPDryPtHyC-t80dL79n9B0G1a8Q94dpgPkAo6r2KvEWOUcYvR4uL5XJ53R87imZsoYncEv3zYuzx6CVXF4Fvd-CzGs63BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        link: "https://www.armyfm.com.ua/"
    },
    {
        title: "Новини Командування військ\nзв‘язку та кібербезпеки ЗСУ",
        img: "https://s3-alpha-sig.figma.com/img/2195/0d18/3dcb0374458accf9bff2900e7cfbffef?Expires=1697414400&Signature=Dh55TeCuq3BDNJC9Ac-C3rjwOX0bfhwm2xxaTTK01eiSvTxPVB2mP7BeuqVKsWR1ucOHwnx3Q9zn8rvnMIEOR6V1tFJ0Y3eWHDlhkRG3wbcDpI2mCVsvZy2tmY~uDYQNgTYkxgSRaGPSFWVn2uLnaKNP1WIp7DrlJS5up8E8pgRMrFFsUxAQFVXuoaNrr-XLGn66HE03oD0NK-EgvC-oa8iinXuTVQVk9DLnITIu47WpLTxHesZ~eqJaJixXIBkW5nLzLAAfRqgzrvU9i6KRdhrk9NKgXhxetcVpJeuR878DHyJzDdcH0cwMfEC1yTnqZ3RI4eK0MPU5zBC9L2drfQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        link: "/"
    },

]

export const AdditionalLinks = () => {
    return (
        <div className={css.container}>
            {links.map(item => (
                <AdditionalLink img={item.img} link={item.link} title={item.title}/>
            ))}
        </div>
    );
};
