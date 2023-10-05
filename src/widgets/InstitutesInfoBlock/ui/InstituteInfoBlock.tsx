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
        img: "https://s3-alpha-sig.figma.com/img/ce9c/8400/28d879f775e635368d0a9bd73ea1a4be?Expires=1697414400&Signature=HtzABhaZwZs17926PxqzYVWHLXSo6Ny~IT-LhvYdld~JBS3Gi-G9Sb6j~y1BKB5xn1MO5bE1rkkZyiw4hAZ3NsH2n4uTx46P6XyMj9BHT2IVjw5hNr5sRTyKpfCtqDE6R9u1L1i~Uef4NrlozU9-a8DqH2gBrP-s4vLYgFa-1WBi2eENJ8Vi3wUBagdxSjsQ1Z~XAeOOVYUqKrJd2KCzkFqgXnC-7~DvnFpbGjDSPeSu6rQP3~7TBN~KUU0fl06HUtBRpZTHBlAw6QUqQEuS8NMazaeMg03CDyDcBi2lY4EZn20SDFCllsHpzNvX8S34~PgtNXcQMKdOzPSWV-JElg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        link: "/"
    },
    {
        title: "Керівний склад",
        img: "https://s3-alpha-sig.figma.com/img/ce9c/8400/28d879f775e635368d0a9bd73ea1a4be?Expires=1697414400&Signature=HtzABhaZwZs17926PxqzYVWHLXSo6Ny~IT-LhvYdld~JBS3Gi-G9Sb6j~y1BKB5xn1MO5bE1rkkZyiw4hAZ3NsH2n4uTx46P6XyMj9BHT2IVjw5hNr5sRTyKpfCtqDE6R9u1L1i~Uef4NrlozU9-a8DqH2gBrP-s4vLYgFa-1WBi2eENJ8Vi3wUBagdxSjsQ1Z~XAeOOVYUqKrJd2KCzkFqgXnC-7~DvnFpbGjDSPeSu6rQP3~7TBN~KUU0fl06HUtBRpZTHBlAw6QUqQEuS8NMazaeMg03CDyDcBi2lY4EZn20SDFCllsHpzNvX8S34~PgtNXcQMKdOzPSWV-JElg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        link: "/"
    },
    {
        title: "Публічна інформація",
        img: "https://s3-alpha-sig.figma.com/img/ce9c/8400/28d879f775e635368d0a9bd73ea1a4be?Expires=1697414400&Signature=HtzABhaZwZs17926PxqzYVWHLXSo6Ny~IT-LhvYdld~JBS3Gi-G9Sb6j~y1BKB5xn1MO5bE1rkkZyiw4hAZ3NsH2n4uTx46P6XyMj9BHT2IVjw5hNr5sRTyKpfCtqDE6R9u1L1i~Uef4NrlozU9-a8DqH2gBrP-s4vLYgFa-1WBi2eENJ8Vi3wUBagdxSjsQ1Z~XAeOOVYUqKrJd2KCzkFqgXnC-7~DvnFpbGjDSPeSu6rQP3~7TBN~KUU0fl06HUtBRpZTHBlAw6QUqQEuS8NMazaeMg03CDyDcBi2lY4EZn20SDFCllsHpzNvX8S34~PgtNXcQMKdOzPSWV-JElg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        link: "/"
    },
    {
        title: "Герої не вмирають",
        img: "https://s3-alpha-sig.figma.com/img/ce9c/8400/28d879f775e635368d0a9bd73ea1a4be?Expires=1697414400&Signature=HtzABhaZwZs17926PxqzYVWHLXSo6Ny~IT-LhvYdld~JBS3Gi-G9Sb6j~y1BKB5xn1MO5bE1rkkZyiw4hAZ3NsH2n4uTx46P6XyMj9BHT2IVjw5hNr5sRTyKpfCtqDE6R9u1L1i~Uef4NrlozU9-a8DqH2gBrP-s4vLYgFa-1WBi2eENJ8Vi3wUBagdxSjsQ1Z~XAeOOVYUqKrJd2KCzkFqgXnC-7~DvnFpbGjDSPeSu6rQP3~7TBN~KUU0fl06HUtBRpZTHBlAw6QUqQEuS8NMazaeMg03CDyDcBi2lY4EZn20SDFCllsHpzNvX8S34~PgtNXcQMKdOzPSWV-JElg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
