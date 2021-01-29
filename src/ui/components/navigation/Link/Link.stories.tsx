import { Story, Meta } from '@storybook/react';

import Link, { LinkProps } from './Link';

export default {
    title: 'navigation/Link',
    component: Link,
    argTypes: {},
} as Meta;

const Template: Story<LinkProps> = ({ children, ...args }) => (
    <Link {...args}>{children}</Link>
);

export const Default = Template.bind({});
Default.args = {
    href: '/#',
    children: 'Click Here',
};
