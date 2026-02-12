import React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ion-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                name?: string;
                src?: string;
                mode?: 'ios' | 'md';
                lazy?: boolean;
                class?: string; // Add class property specifically for custom element usage if needed
            };
        }
    }
}
