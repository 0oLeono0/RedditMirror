import * as React from 'react';
import { IIconProps } from '../Icon/Icon';

export function PenIcon({ size }: IIconProps) {
    return (
        <svg 
        width={size || '19'} 
        height={size || '19'} 
        viewBox="0 0 20 20" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
            <path d="M0 15.2501V19.0001H3.75L14.81 7.94006L11.06 4.19006L0 15.2501ZM17.71 5.04006C18.1 4.65006 18.1 4.02006 17.71 3.63006L15.37 1.29006C14.98 0.900059 14.35 0.900059 13.96 1.29006L12.13 3.12006L15.88 6.87006L17.71 5.04006Z" fill="#999999"/>
        </svg>
    );
}