import React from 'react';
import {PageHead} from "widgets/PageHead";
import {HistoricalReference} from "widgets/HistoricalReference/"
import SectionTitle from "shared/ui/SectionTitle/SectionTitle";


export const HistoricalPage = () => {
    return (
        <>
            <PageHead title={"Історична довідка"}
                      img={"https://s3-alpha-sig.figma.com/img/5d63/b30a/27acf76050c2ca716b70c21d12e45486?Expires=1697414400&Signature=AU1dSGk8k9xneS9iqLCpaH0NxYO1M5xyc9aIkMFvzSlsXYQdo2dZFkzrLXUyDsLFeADTagJfHDLVPanYvzscWn9n9pQxu4mfP23lorvTbGZE0WRiulW1Sgn9WfKGOZ7scQY5bxhJcBDc6qgt96ReMY6UTtfwsikrWqVUNSiy9X27qBpeE7y7Tf-J9lnq36WSNrdDBdnbdgHeL-1ifZWK9UeWEEPBPQfJKX8BUg2fieUFheuUJjROdqQ1W-l260CJ78M4kVzx-TlWJfR7DCPfLJjoeUvXs3MoEUQ7nbvmf1IwH3lWzCpjvgnfxThFdl~VZUNtJ3JVAZoIIXgbOdDZfA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}/>
            <SectionTitle margin={"2% 0 "} title={"Історична довідка"}/>
            <HistoricalReference/>
        </>
    );
};
