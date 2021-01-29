import { Story, Meta } from '@storybook/react';

import CodeEditor, { CodeEditorProps } from './CodeEditor';

export default {
    title: 'inputs/CodeEditor',
    component: CodeEditor,
    argTypes: {},
} as Meta;

const Template: Story<CodeEditorProps> = ({ children, ...args }) => (
    <CodeEditor {...args}>{children}</CodeEditor>
);

export const Default = Template.bind({});
Default.args = {
    editorId: 'codeEditor',
};
