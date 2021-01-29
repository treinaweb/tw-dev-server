import React, { useMemo, useRef } from 'react';
import AceEditor, {
    IAceEditorProps,
    IAceOptions,
    IEditorProps,
} from 'react-ace';
import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-dracula';
import { Tooltip } from '@material-ui/core';
import {
    CodeEditorContainer,
    CopyButton,
    LanguageLabel,
} from './CodeEditor.style';

const isBrowser = typeof window !== 'undefined';

export interface CodeEditorProps {
    children?: React.ReactNode;
    editorId: string;
    value?: string;
    ace?: {
        setOptions?: IAceOptions;
        editorProps?: IEditorProps;
    };
    onChange?: (code: string) => void;
    canCopy?: boolean;
}

const defaultEditorProps: IEditorProps = {
    $blockScrolling: true,
};

const defaultOptions: IAceOptions = {
    minLines: 10,
    maxLines: 20,
    cursorStyle: 'smooth',
    showPrintMargin: false,
};

const defaultProps: IAceEditorProps = {
    fontSize: 16,
    width: '100%',
    height: '130px',
};

const CodeEditor: React.FC<CodeEditorProps> = (props) => {
    const componentRoot = useRef<HTMLElement>();
    const canCopy = props.canCopy || false;
    const aceProps = useMemo(() => {
        const ace = props.ace || {};
        const setOptions = { ...defaultOptions, ...(ace.setOptions || {}) };
        const editorProps = {
            ...defaultEditorProps,
            ...(ace.editorProps || {}),
        };
        return { ...defaultProps, ...ace, editorProps, setOptions };
    }, [props.ace]);

    function copyToClipboard(
        str = '',
        rootElement: HTMLElement = document.body
    ) {
        const el = document.createElement('textarea');
        el.value = str;
        el.innerText = str;
        rootElement.appendChild(el);
        // el.focus();
        el.select();
        document.execCommand('copy');
        rootElement.removeChild(el);
    }

    return (
        //@ts-ignore
        <CodeEditorContainer ref={componentRoot}>
            {isBrowser && (
                <AceEditor
                    mode={'json'}
                    theme={'dracula'}
                    value={props.value}
                    {...aceProps}
                    onChange={props.onChange}
                />
            )}
            {canCopy && (
                <Tooltip
                    title={'Copy'}
                    PopperProps={{ container: componentRoot.current }}
                >
                    <CopyButton
                        onClick={() =>
                            copyToClipboard(props.value, componentRoot.current)
                        }
                    >
                        <i className="fas fa-copy" />
                    </CopyButton>
                </Tooltip>
            )}
            <LanguageLabel>JSON</LanguageLabel>
        </CodeEditorContainer>
    );
};

export default CodeEditor;
