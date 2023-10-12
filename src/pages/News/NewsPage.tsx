import React from 'react';
import {PageHead} from "../../widgets/PageHead";
import {NewsBlock} from "../../widgets/NewsBlock";

export const NewsPage = () => {
    return (
        <>
            <PageHead title={"Новини"}
                      img={"https://s3-alpha-sig.figma.com/img/e180/a4a5/154f2ae8816152da9cad5c45648a944e?Expires=1698019200&Signature=J-O7ggSf1g9LyXoAcWNEvM~gj-mqvtMoSyedBBbWJGmWwsi2U4d~4tHz2GRefhbl9jtV0OJsniBt9Zh2WUo-uAIADmK6k3ZvbJ5wgdhr~~GUEGoEa5wmymTiGpaM1-CXO-NWxbc4BzAXuzviggDVlORaBxsUgM~Z-oMLydUTE50KPsMI7GgMGuZzaESo4fAEjmqjquU70bpnGAvGZWpbe0ZpdoQP~y~iV6X1STODc7Ty36XvF8qaSEuLF97znShv9aExNXFOjRsyHFeWCXqziNSRfLUENallX2HrgQ~u0RX3g4hvKTFS-oYw-t~qiEHSHOOvLg-kXIBJc55zO391Ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}/>
            <NewsBlock/>
        </>
    );
};
