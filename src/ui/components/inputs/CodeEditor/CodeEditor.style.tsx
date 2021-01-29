import { experimentalStyled as styled } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { CodeEditorProps } from './CodeEditor';

export const CodeEditorContainer = styled('div')`
    position: relative;
`;

export const CopyButton = styled(IconButton)`
    position: absolute;
    top: 0;
    right: ${({ theme }) => theme.spacing()};
    &.MuiIconButton-root {
        color: white;
    }
`;

export const LanguageLabel = styled('div')`
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #333;
    padding: ${({ theme }) => theme.spacing(2) + ' ' + theme.spacing(3)};
    pointer-events: none;
    opacity: 0.7;
`;
