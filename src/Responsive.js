import {css} from 'styled-components';

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 380px){
            ${props}
        }
    `;
};


/* Tablet */

// export const mobile = (props) => {
//     return css`
//         @media only screen and (max-width: 380px){
//             ${props}
//         }
//     `;
// };