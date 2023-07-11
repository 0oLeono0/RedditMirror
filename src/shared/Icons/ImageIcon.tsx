import * as React from 'react';
import { IIconProps } from '../Icon/Icon';

export function ImageIcon({ size }: IIconProps) {
    return (
        <svg 
        width={size || '18'} 
        height={size || '18'} 
        viewBox="0 0 18 18" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
            <path id="Vector" d="M18 16V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16ZM5.5 10.5L8 13.51L11.5 9L16 15H2L5.5 10.5Z" fill="#999999"/>
        </svg>
    );
}