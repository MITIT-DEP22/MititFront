import React from 'react';
import {PageHead} from "../../widgets/PageHead";
import {ScienceBlock} from "../../widgets/ScienceBlock";

const SciencePage = () => {
    return (
        <>
            <PageHead title={"наука"} img={"https://s3-alpha-sig.figma.com/img/a2f9/b984/b47080cf6de70c050e29e34bffc66659?Expires=1698019200&Signature=O2twSQ8STZ69K7xqOZSIMfIO4r89ePcsCHhso-Niyoz3I4Y1WJOJ9H1cUxJZjVbC6tzr5vDqA0M8cvUyspqUsuRdll5jCILVhTBP-NYK3NW~AcyI17PCNpVpbY~sUT52J80ROFgsbEh1Uid0UCj7Bq9dkqKxU9T9zhQFndqQuQp0pWs7QNsyJCZ4gu0s5j4piRK56OzQvb26euiZ2lbpqID~IG9SjUjTyXJAJNtSA6~kbrcD5kPwlPacMjiUsOdqwvCzwvVzLcIFEQa6O2mnIA36-p22Dr3QBMm~lnbCadbYcYui6p5Nl8G7QIONiuty8j-X4CRBOI3~pXdo3BNs9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}/>
            <ScienceBlock/>
        </>
    );
};

export default SciencePage;