import React from 'react';
// import {  } from '@material-ui/core';
import { FooterContainer } from './Footer.style';

export interface FooterProps {
    children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = () => {
    const currentYear = new Date().getFullYear();
    return (
        <FooterContainer>
            <div>
                <div>
                    © 2004 - {currentYear} TreinaWeb Tecnologia LTDA - CNPJ:
                    06.156.637/0001-58
                </div>
                <address>
                    <span>Av. Paulista, 1765, Conj 71 e 72 -</span>
                    <span>Bela Vista - São Paulo - SP -</span>
                    <span>01311-200</span>
                </address>
            </div>
        </FooterContainer>
    );
};

export default Footer;
