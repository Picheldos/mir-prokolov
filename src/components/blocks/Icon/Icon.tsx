import React from 'react';
import Water from '@/icons/water.svg';
import Compact from '@/icons/compact.svg';

export interface IconProps {
    icon: string;

}

const Icon: React.FC<IconProps> = ({ icon }) => {
    const getIcon = () => {
        switch (icon) {
            case 'water':
                return <Water/>;
            case 'compact':
                return <Compact/>;
            default:
                break;
        }
    }
    return getIcon() || <></>;
};

export default Icon;
