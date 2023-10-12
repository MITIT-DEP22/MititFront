import React from 'react';
import {PageHead} from "widgets/PageHead";
import {PublicInfoBlock} from "widgets/PublicInfoBlock";

const PublicInfoPage = () => {
    return (
        <>
            <PageHead title={"Публічна інформація"}  img={"https://s3-alpha-sig.figma.com/img/8b73/af20/774f301a8a15ca977b2e411ab6936c4f?Expires=1698019200&Signature=Y35vJS0gK8ilyx3k48jYUWuCVPsJTHUmeqkoW7Rr7dm43o3Q5xW5252CQceyM9RnfjNYhZSFl106g3pOAmp9NqLOkH1ZORO24Tu3DZYvT1O0DUMT6tdvmy-wMb-r~yeP23lVVU6VGn3dUjUD0mLP~MJPLY1jIJz3b98EWQvIIHGgTD75HySAgzrVlnXpOVnGucZKIr6KnYG~aX7OksKooNuQhNlxjyQUy5z1enP4PfblAouiE5F45OdVFtsuc2Hc3VipJ~L-mJwIa9GxjfmxqKG3585ynVtardYs0lK~6hHeK8Vc0qocbita9q~R1wnNNEMirUtBOqjgzgsNzO04oQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}/>
            <PublicInfoBlock/>
        </>
    );
};

export default PublicInfoPage;