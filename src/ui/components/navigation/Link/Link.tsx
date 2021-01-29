import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import Router from 'next/router';
import {
    Link as MuiLink,
    LinkProps as MuiLinkProps,
    ButtonProps,
} from '@material-ui/core';
// import { Component } from './Link.style';

export interface LinkProps {
    children?: React.ReactNode;
    href: string;
    Component?: React.ElementType;
    mui?: MuiLinkProps | ButtonProps;
    next?: NextLinkProps;
}

const Link: React.FC<LinkProps> = ({
    children,
    href,
    Component = MuiLink,
    mui,
    next,
    ...props
}) => {
    const isNextEnv = Boolean(Router.router);

    return isNextEnv ? (
        <NextLink href={href} passHref {...next}>
            <Component {...mui} {...props}>
                {children}
            </Component>
        </NextLink>
    ) : (
        <Component href={href} {...mui} {...props}>
            {children}
        </Component>
    );
};

export default Link;
