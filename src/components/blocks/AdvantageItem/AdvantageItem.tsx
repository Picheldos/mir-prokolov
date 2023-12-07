import React  from 'react';
import { AdvantageItemText, AdvantageItemTop, Container } from '@/components/blocks/AdvantageItem/AdvantageItem.styled';
import Icon from '@/components/blocks/Icon/Icon';
import { useInView } from 'react-intersection-observer';

export interface AdvantageItemProps {
    icon?: string;
    title?: string;
    text: string;
}

const AdvantageItem: React.FC<AdvantageItemProps> = ({ icon, title, text }) => {

    const { ref: ref, inView: inView } = useInView({ triggerOnce: true });


    return (
        <Container ref={ref} inView={inView}>
            {title && icon &&
                <AdvantageItemTop>
                    <Icon icon={icon}/>
                    <h3 dangerouslySetInnerHTML={{ __html: title }}/>
                </AdvantageItemTop>
            }
            <AdvantageItemText dangerouslySetInnerHTML={{__html: text}} />
        </Container>
    );
};

export default AdvantageItem;
