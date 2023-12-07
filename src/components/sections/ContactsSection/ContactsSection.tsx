import React from 'react';
import {
    ContactsSectionInfo, ContactsSectionInfoLeft, ContactsSectionInfoRight,
    ContactsSectionTitle,
    Container
} from '@/components/sections/ContactsSection/ContactsSection.styled';


export interface ContactsSectionProps {

}

const ContactsSection: React.FC<ContactsSectionProps> = ({  }) => {



    return (
        <Container>
            <ContactsSectionTitle>
                Контакты
            </ContactsSectionTitle>
            <ContactsSectionInfo>
                <ContactsSectionInfoLeft>
                    <div>ООО Партнер Сервис</div>
                    <div>Пн-Сб 9:00 - 21:00</div>
                    <a href={'tel:+7(812)409-98-03'}>+7(812)409-98-03</a>
                    <a href={'mailto:sn@sever-gaz.ru'}>sn@sever-gaz.ru</a>
                    <div>г. Санкт-Петербург, ул. Бухарестская д. 1</div>
                </ContactsSectionInfoLeft>
                <ContactsSectionInfoRight>
                    <div><span>ООО Партнер Сервис</span><br/>ОГРН 1167847403680, ИНН 7816340660, КПП 781601001,  </div>
                    <div><span>Юридический адрес:</span><br />192102, г. Санкт-Петербург, ул. Бухарестская, д.1, лит. А, офис 501</div>
                    <div><span>Банковские реквизиты:</span><br />Р/с 40702810732370000645 в Филиал «Санкт-Петербургский» АО «АЛЬФА-БАНК»к/с 30101810600000000786, БИК 044030786</div>
                </ContactsSectionInfoRight>
            </ContactsSectionInfo>
        </Container>
    );
};

export default ContactsSection;
