import React, { useState } from 'react';
import {
    IconButton,
    Toolbar,
    Container,
    MenuList,
    MenuItem,
    Divider,
    useTheme,
    useMediaQuery,
    Link,
} from '@material-ui/core';
import { HeaderAppBar, HeaderDrawer, HeaderLogo, Blink } from './Header.style';

export interface HeaderProps {
    children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    return (
        <HeaderAppBar>
            <Toolbar component={Container}>
                <IconButton
                    edge={'start'}
                    onClick={() => setDrawerOpen(true)}
                    color={'inherit'}
                >
                    <i className={'fas fa-bars'} />
                </IconButton>

                <HeaderLogo
                    href={'https://treinaweb.com.br'}
                    target={'_blank'}
                    rel="noopener noreferrer"
                    color={'inherit'}
                >
                    <img
                        src={'/tw-dev-server/img/logos/logo-white-icon.svg'}
                        alt={'Tw Dev Server'}
                    />
                    <span>
                        Tw Dev Server<Blink>_</Blink>
                    </span>
                </HeaderLogo>

                <HeaderDrawer
                    open={isDrawerOpen}
                    onClose={() => setDrawerOpen(false)}
                    onClick={() => setDrawerOpen(false)}
                >
                    <MenuList>
                        <Link
                            href={'https://www.treinaweb.com.br'}
                            target={'_blank'}
                            rel="noopener noreferrer"
                            color={'inherit'}
                        >
                            <i className={'fas fa-home fa-fw'} />
                            &nbsp;&nbsp;TreinaWeb
                        </Link>

                        <Divider />
                        <Link
                            href={
                                'https://www.npmjs.com/package/@treinaweb/tw-dev-server'
                            }
                            target={'_blank'}
                            rel="noopener noreferrer"
                            color={'inherit'}
                        >
                            <i className={'fab fa-npm fa-fw'} />
                            &nbsp;&nbsp;Documentation
                        </Link>

                        <Divider />

                        <Link
                            href={'https://github.com/treinaweb/tw-dev-server/'}
                            target={'_blank'}
                            rel="noopener noreferrer"
                            color={'inherit'}
                        >
                            <i className={'fab fa-github fa-fw'} />
                            &nbsp;&nbsp;GitHub
                        </Link>
                        <Divider />

                        <Link
                            href={
                                'https://marketplace.visualstudio.com/items?itemName=treinaweb.tw-dev-server'
                            }
                            target={'_blank'}
                            rel="noopener noreferrer"
                            color={'inherit'}
                        >
                            <i className={'fas fa-code fa-fw'} />
                            &nbsp;&nbsp;VS Code Extension
                        </Link>
                    </MenuList>
                </HeaderDrawer>
            </Toolbar>
        </HeaderAppBar>
    );
};

export default Header;
