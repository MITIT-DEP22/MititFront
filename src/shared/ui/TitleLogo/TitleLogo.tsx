import React, {FC} from 'react';
import css from "./TitleLogo.module.scss";
import logo from "../../../assets/logo/logo.png"

interface TitleNameProps extends React.HTMLProps<HTMLElement>{
    value: string;
    logoSize?:string;
}

const TitleLogo: FC<TitleNameProps> = ({value,logoSize}) => {
    return (
        <div className={css.containerTitleLogo}>
            <img style={{width:logoSize, height: "100%"}} className={css.logo} src={logo} alt=""/>
            <pre className={css.titleName}>
            {value}
            </pre>
        </div>
    );
};

export default TitleLogo;