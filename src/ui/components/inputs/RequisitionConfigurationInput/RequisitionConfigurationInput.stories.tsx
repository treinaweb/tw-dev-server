import { Story, Meta } from '@storybook/react';

import RequisitionConfigurationInput, {
    RequisitionConfigurationInputProps,
} from './RequisitionConfigurationInput';

export default {
    title: 'inputs/RequisitionConfigurationInput',
    component: RequisitionConfigurationInput,
    argTypes: {},
} as Meta;

const Template: Story<RequisitionConfigurationInputProps> = ({
    children,
    ...args
}) => (
    <RequisitionConfigurationInput {...args}>
        {children}
    </RequisitionConfigurationInput>
);

export const Default = Template.bind({});
Default.args = {
    url: 'localhost:3002',
    onUrlChange: (value) => console.log(value),
    endpoint: 'test',
    onEndpointChange: (value) => console.log(value),
    method: 'GET',
    onMethodChange: (value) => console.log(value),
    onSend: () => {
        console.log('OnSend');
    },
};
