import React from 'react';
import {PageHead} from "../../widgets/PageHead";
import {StudyBlock} from "../../widgets/StudyBlock";

const StudyPage = () => {
    return (
        <>
            <PageHead title={"навчання"}
                      img={"https://s3-alpha-sig.figma.com/img/e24b/bd83/df39a53ab5d80b7f7b47db7d10fcf6df?Expires=1698019200&Signature=deAopcabD9fXx0BBkp5wQG5GxX42QVRuhNiXzh01~cTSQWMVof4w6Z3g4jpbeCM5OTvWDwHpmpPU0xViJBxv5zpg13Ofkz7JKBgi8H4lioYshfxPIAAOX4ZPynrSjd4BLGme9wrqHNbt5U2BxC-qy-Nhcg1tQ1Kh358AOvKKKh-C2ifojbieWAE0IiI4FBM~ytE8zoA35pueqQhnAmRWVYMYfjdkX~Ii7XbV9eJXrsttz2sVqOjN6g0uLokXtiiRsNfwxqsWLQlFS~G56virEN8YSndYW8MExjdkkWLDF4-3lDr1Nc3DHLFiIlVnoB5LJh6lCoPlkBKiAbB9V8OPig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}/>
            <StudyBlock/>
        </>
    );
};

export default StudyPage;