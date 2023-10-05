import React from 'react';
import {PageHead} from "../../widgets/PageHead";
import {Contacts} from "../../widgets/Contacts";

const ContactPage = () => {
    return (
        <>
            <PageHead title={"Контакти"}
                      img={"https://s3-alpha-sig.figma.com/img/c1f0/a1ac/cb1d7fdc04900440e3e38f1e2760a3cc?Expires=1697414400&Signature=etg4Tr-lPkLoemNIGnzsklYRtLABvx8rWaO-PgnEWlA6D-n0RRPCgpMp~A5A1sJju6pO~olQHOXWQ5FUPQ7CjxAeyXyZfSN96IvWpoBvaeuHBZN2eKliQo6MhEhI9hT3oKAgl8nSQBaTnXd4uPGGLhQf1edzp5aViKcsVnNQyMnYwLWYxeAf7UGTv8MqrIXqErgRUTVUxcio5bOMoSroiR7~-Q8Jsra~fU0TXHXPwb3awWZfG23~aQffMa959VQVS~rXTbzu1WwgDKZuz~6Q0Zb0orI09ZE1g9kblTeP-clOchnfUb1VKYZlCH9WomZxkf2gp40EJKdXSSkxxkuqlQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}/>
            <Contacts/>
        </>
    );
};

export default ContactPage;