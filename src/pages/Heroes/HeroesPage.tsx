import React from 'react';
import {PageHead} from "widgets/PageHead";
import {HeroesBlock} from "widgets/HeroesBlock";

export const HeroesPage = () => {
    return (
        <>
            <PageHead title={"Герої не вмирають"}
                      img={"https://s3-alpha-sig.figma.com/img/866d/e375/d3da7cdfb784bc5fa4d15952f4c29d98?Expires=1698019200&Signature=gkSDR4HAj87tmm2UBWzdXMO4dMpj~mWq3NOJoj7I9Yg48ao4VwGuY1VsxAz5lKLTRixwijn5ijbP58s4qCbxMsbcS9BxeCmGOTE23sdhEIt~qrypQoIXvSlRi2zx-PZGxTLsEC8Oj9EmDlDygqXuYfWNUy6nOHNPvPclQMs~duEzxl1M~GUvK1AJu8CmGpqB-luu7N~VEePgMpU2mjfGwhnsMTH0u46~G950EaneEiSrAjGpoWrC9SQHWtgzus1YNOh8KRAoLhzfhaRZ3agoyalVYJMj50~EHzht7faCn1CajvRaDCRk7uZ7d5Mv6lyGnFreNJ0XjOGxqxp0tclJrg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}/>
            <HeroesBlock/>
        </>
    );
};
