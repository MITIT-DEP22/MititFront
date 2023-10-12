import React from 'react';
import {PageHead} from "../../widgets/PageHead";
import {EntranceBlock} from "../../widgets/EntranceBlock";

const EntrancePage = () => {
    return (
        <>
            <PageHead title={"Вступникам"} img={"https://s3-alpha-sig.figma.com/img/d075/506a/7500797a70d3d63568d15aae09b5be17?Expires=1698019200&Signature=jt3Xbh4cqe2Fr~aT27-3H5Zx20Yrn26t7OaRtsHsHUIEWO1R-d~ZWfyQKDyN4ofmPujrP-wsYNAxvEA-FphV9HaP00Sz1w5DmH973iLdvrVxsGN4ywhPFQyhewoChk4UBLu0gprifZyDi10Ei4O4Z0WJaJFBUO9fUd-Uhbpm-KyriNYSXVJFwBHsFVEIHMHvI6hsEXWvLqScdZNfq0YJIYuNgrYFzTPgEwsOUTv1rqxf7M5FqEi3hnvSskGsvDUyGJHzOg0yhJppJINcs8Qs8WGuTQ1MF~zKbosTMJQCpbEBnUb2WJVMQHIVJMyyGGL6eYBPik2-aO76oTfW912gOw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}/>
            <EntranceBlock/>
        </>
    );
};

export default EntrancePage;