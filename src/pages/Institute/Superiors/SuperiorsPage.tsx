import React from 'react';
import {PageHead} from "../../../widgets/PageHead";
import {CompositionOfSuperiors} from "../../../widgets/CompositionOfSuperiors";
import SectionTitle from "../../../shared/ui/SectionTitle/SectionTitle";
import {superiors} from "../../../shared/enums/Data";


export const SuperiorsPage = () => {
    return (
        <>
            <PageHead title={"Керівний склад"}
                      img={"https://s3-alpha-sig.figma.com/img/5c41/9563/5e1e05c495fd8d22205867191b8ee876?Expires=1697414400&Signature=dyurgyqJtQpPKU0G28osJ-xxwHESIp9a8C-jC6~zwUy2uL3rGHi9AX60tgJFJQpzb1o6ySUGBJSm8nCr~nIsVnG2Ab8RQBsyjnTjXpjVLLTZJCYWee-0I68WNLJ6~Yr79EbceopqBDCOTUpf0IIfN12BUe0-0l80lJGyTHucsraztWFAfBRM4qeCnIBhC1Ct5zIw50Ldddg4gRewR6hsC972crwO5y86Rsrp9tmpmpT6p51Ejl588fY-OCkzzL08ojzhHZoWGXXXZryHJuU3-07-GKqpWrrkO6nw~b~qP56Kix0XJbPPHZRZcR~xv7IpHDePVzEf4LGqY8-YiFHkoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}/>
            <SectionTitle margin={"2% 0 "} title={"Керівний склад"}/>
            <CompositionOfSuperiors superiors={superiors}/>
        </>
    );
};
