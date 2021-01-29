import { experimentalStyled as styled } from '@material-ui/core/styles';
// import {  } from '@material-ui/core';
import { FooterProps } from './Footer';

export const FooterContainer = styled('footer')`
    padding: ${({ theme }) => theme.spacing(2)};
    margin-top: auto;
    background-color: #1f1f1f;
    color: #616161;
    font-size: ${({ theme }) => theme.typography.pxToRem(12)};
    text-align: center;
`;
