import React from 'react';
import {PageHead} from "widgets/PageHead";
import {WhyPageBlock} from "widgets/WhyPageBlock";

export const WhyPage = () => {
    return (
        <>
            <PageHead title={"Чому віті?"}
                      img={"https://s3-alpha-sig.figma.com/img/4b50/b6da/2ac5367672c66335a9586fd29a287691?Expires=1698019200&Signature=clTwUDNoxG-CPW9vVpf7-MRyB-7Hg4Lvbdz0vBy60jINRkhkyipIkfpA2YbcNs31DazLsWva5EOolxJKQAllKAxH6Hd0wseiQnHWpTj-RXGQGZmVbLxTDtjf5QuXB7CgMoMYOcaQSm25BUyiHAwCcRE6AIh4MkR5m1UBqJaNvN9E0sQyP1nMYlb~Pr5tMPkwi213fgIVw5nAIQWPl9OvEgTIbLQLMYkAlI7iavzX3zfTOutJPovizcTtl8mD40vhUZYr~w4leL1VRmo8hC8SFjedNlg6nRfechbWYjgDyXpu1coSAYiDv0~xqbdtjCui3nB5ubTacIdmkE9E2y8Vrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}/>
            <WhyPageBlock/>
        </>
    );
};
