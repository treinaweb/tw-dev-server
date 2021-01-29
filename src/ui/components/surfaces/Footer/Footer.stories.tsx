import { Story, Meta } from '@storybook/react';

import Footer, { FooterProps } from './Footer';

export default {
    title: 'surfaces/Footer',
    component: Footer,
    argTypes: {},
} as Meta;

const Template: Story<FooterProps> = ({ children, ...args }) => (
    <Footer {...args}>{children}</Footer>
);

export const Default = Template.bind({});
Default.args = {};