import React from 'react';
import InfoCard from "./InfoCard/InfoCard";
import css from "./InstituteInfoBlock.module.scss"

const infoCards = [
    {
        title: "Чому ВІТІ?",
        img: "https://s3-alpha-sig.figma.com/img/ce9c/8400/28d879f775e635368d0a9bd73ea1a4be?Expires=1697414400&Signature=HtzABhaZwZs17926PxqzYVWHLXSo6Ny~IT-LhvYdld~JBS3Gi-G9Sb6j~y1BKB5xn1MO5bE1rkkZyiw4hAZ3NsH2n4uTx46P6XyMj9BHT2IVjw5hNr5sRTyKpfCtqDE6R9u1L1i~Uef4NrlozU9-a8DqH2gBrP-s4vLYgFa-1WBi2eENJ8Vi3wUBagdxSjsQ1Z~XAeOOVYUqKrJd2KCzkFqgXnC-7~DvnFpbGjDSPeSu6rQP3~7TBN~KUU0fl06HUtBRpZTHBlAw6QUqQEuS8NMazaeMg03CDyDcBi2lY4EZn20SDFCllsHpzNvX8S34~PgtNXcQMKdOzPSWV-JElg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        link: "/"
    },
    {
        title: "Історична довідка",
        img: "https://s3-alpha-sig.figma.com/img/f239/8d60/8c1c2bc907ef5d21cac09169ffabed0d?Expires=1697414400&Signature=Wu3V-O5QYM1iaf74I6h-SkVAG6HGrXjmfNdazlr8lynRDeKyRja8e4u-u8rP6FySxjGoieFf9x0FFb~l0oBWR-~yFpp6nSVa4RkqEDq0XQilYmBMoCiWYTYA2s9Xv--pJoeP942sjM9r45Ed3diFuF0-tx6jJSHAJIJWV3pckDmkL9alpY~skzUQcKZTlMrFXPmCkatxNapf2BG3xPWZTeXW5n2Ngg5UzskiuaPeTBkCNWUZwKnNtVa1Pie13K8rHNp18EI0NOaLwf7GBu~CCeYEcvuyS9RHTijt1VpThSrG8FioIUzaZ4y12gqcBNYAG8j8tM4PX-cKJcfE76tEQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        link: "/"
    },
    {
        title: "Керівний склад",
        img: "https://s3-alpha-sig.figma.com/img/193b/3bea/11990510684a455b899f40709d0daccd?Expires=1697414400&Signature=GUH1HgQol1fTMfzMG5GVNXB0EUH~fVPXLho575nIrjlYV6sLSmoMASg-~0AFKFPX73atS1-k8FNUt2TZ0O1uDrtWxVAzAHK3mZ6pwqu5vACllbkvOsVSbFVhgHI1w6~o0bC4idlXjY4tSO7FrUfY-FHwr7hZtO1D4~CUA4JjzwdbbOaxKMrbE-PJM43L~x35-kuNYb5TTyGyKAqauOcwWazFzpSNPleB5Bzn0lkfVKFSfdeqaBTNgLGHWDJV6dsqywReoKhtVS5fKJ-YQpe-FnK3yX7qSJKI6nnEKW~hbh8jo-wDkjgW6MKqWcOQdB5dOGEKXT38zNfmq9DrcTDXPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        link: "/"
    },
    {
        title: "Публічна інформація",
        img: "https://s3-alpha-sig.figma.com/img/c156/b083/deb076b1ea9691e50ceeb5e28a47f161?Expires=1697414400&Signature=moNUU11EdhgrqH6qjz2XGUq9n2mWE3L11rNt4irwzpQa~NAR5sy35Ekv9WmIkkwZ4wV95qqFvdOlnNxZxmgOtiWohHKP0R0GHaHx7nPcRLZvp6vozE8dVZRvtJDrvr6Y55-5qXI1EAbV2cCMxhMQ0LzfLpNXmKHvGlao0itOHSyaCGwCTT1Rmnma~OhnIMVnTE-KJyo~aPSNyRj3SfW1bVcwVwJFucOvV7G5crut2mX5gXMBvAKH2XWAJJ-jKditNpX7AYvyA66sQ~9f6HqP5V4fFZUzcZxI7GWRl3UHo193S-EpGE9B2oNxiNCFKo8tb03ZSPWpLOuyy-HwDJr6~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        link: "/"
    },
    {
        title: "Герої не вмирають",
        img: "https://s3-alpha-sig.figma.com/img/304f/f455/f713b41579f04758f1cc8fb1c489db5a?Expires=1697414400&Signature=kwApnyLm9Kd35m6NI~~MAcxDqxsLznkPahXlEq3tap0VDjkM~VkHY9HQOqjFK1QRtw6Mvl5XjLO5SD62LsKTlrXjUKwcURfzFFoWiXEBB8lfDEPAID7m~BHgEa9xWpBlMVBBtvp9b6P4-HJ1uWflLHJmHIni-mxGJ~DkRoJX8ISkBZYw0yH-NJqGHW~60q-cB0GLXFqFA791BVom6OQNV7-j0p54S31CTlb-lg2ny0P9zVfQdJWHjKhpPPuKkfXIPur-Hz57LOrz9n5NZjHXdzPk3oOVsVH6CuuYMuu18MGnQr2Zvv5G6sUE2aLIw8A-Rw4vC9BqKhDO0GaHMtRhwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        link: "/"
    },
]

export const InstituteInfoBlock = () => {

    return (
        <div className={css.container}>
            {infoCards.map(item => (
                <InfoCard link={item.link} img={item.img} title={item.title}/>
            ))}
        </div>
    );
};
