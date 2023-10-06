import React from 'react';
import {PageHead} from "widgets/PageHead";
import {InstituteInfo} from "widgets/InstitutesInfo";
import SectionTitle from "shared/ui/SectionTitle/SectionTitle";


export const InstitutePage = () => {
    return (
        <>
            <PageHead title={"Інститут"}
                      img={"https://s3-alpha-sig.figma.com/img/5fe0/a91a/6361e3aea499b986a20efd16eab1d240?Expires=1697414400&Signature=POm-gD2msWwGH4nVPpK1C7LkRYoelnL6UMDD6Bguk0Wd7I~0ZsCLk4M2tcjIH~~Q15Pk5D~bnS2libZdqwR2kSEUdGNxRLcK4MQUVeFHjbNqevJ6cteNpybrYGFA92b~o2PsWvKnNi3NGydbRjEQHPZiEWCT9vAMThBQf1uR8fbj7Ac45UuZ8Te3hbH-owADw6RALoX~2VI6IEyxa30PQ02Yi05RiNLIJD9KOwyg0cIKce6mxDJQ~Vo1HX87lqCScHUdIyYsJnezF7wfNKZQeGvNPQO1kO5aMVggvc58r-L1Y4MuAcGYC4QALlAB-o6qGUBsLZuNZ-hmkj5LozyNPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}/>
            <SectionTitle margin={"2% 0 "} title={"Інститут"}/>
            <InstituteInfo/>
        </>
    );
};
