import { experimentalStyled as styled } from '@material-ui/core/styles';
// import {  } from '@material-ui/core';

export const AppContainer = styled('div')`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
`;
