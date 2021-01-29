import { experimentalStyled as styled } from '@material-ui/core/styles';
import { keyframes } from '@emotion/react';

import { AppBar, AppBarProps, Drawer, Link } from '@material-ui/core';
import { HeaderProps } from './Header';

export const HeaderAppBar = styled((props: AppBarProps) => (
    <AppBar position={'sticky'} {...props} />
))`
    &.MuiAppBar-root {
        background-color: ${({ theme }) => theme.palette.background.paper};
        color: ${({ theme }) => theme.palette.text.secondary};
        box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);
    }

    .MuiToolbar-root {
        display: grid;
        grid-template-columns: 52px auto 52px;
        justify-content: space-between;
    }
`;

export const HeaderLogo = styled(Link)`
    display: flex;
    align-items: center;
    width: 230px;
    justify-content: space-between;
    font-size: 25px;
    img {
        height: 35px;
    }
`;

export const HeaderDrawer = styled(Drawer)`
    .MuiPaper-root {
        padding: ${({ theme }) => theme.spacing()};
        background-color: ${({ theme }) => theme.palette.primary.main};
        min-width: 200px;
    }
    .MuiDivider-root {
        border-color: ${({ theme }) => theme.palette.primary.light};
        margin: ${({ theme }) => theme.spacing(2)};
    }

    img {
        filter: drop-shadow(0px 0px 2px white);
    }
`;

const blinkAnimation = keyframes`
    from, to {
        color: transparent;
    }
    50% {
        color: currentColor;
    }
`;

export const Blink = styled('span')`
    animation: 1s ${blinkAnimation} step-end infinite;
`;
