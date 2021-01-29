import { Story, Meta } from '@storybook/react';

import Header, { HeaderProps } from './Header';

export default {
    title: 'surfaces/Header',
    component: Header,
    argTypes: {},
} as Meta;

const Template: Story<HeaderProps> = ({ children, ...args }) => (
    <Header {...args}>{children}</Header>
);

export const Default = Template.bind({});
Default.args = {};