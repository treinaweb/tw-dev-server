import { experimentalStyled as styled } from '@material-ui/core/styles';
import isPropValid from '@emotion/is-prop-valid';
import { TextField, Select, IconButton } from '@material-ui/core';
import { RequisitionConfigurationInputProps } from './RequisitionConfigurationInput';

export const ControlContainer = styled('div')`
    display: grid;
    grid-template-columns: 20px 80px 1fr 50px;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
        'status url url play'
        'method method endpoint play';
    align-items: center;
    gap: ${({ theme }) => theme.spacing(3)};

    ${({ theme }) => theme.breakpoints.down('sm')} {
        grid-template-columns: 20px 1fr;
        grid-template-rows: repeat(4, auto);
        grid-template-areas:
            'status url '
            'method method '
            'endpoint endpoint '
            'play play';
    }
`;

export const ConnectionStatus = styled('div', {
    shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'isConnected',
})<{
    isConnected: boolean;
}>`
    grid-area: status;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: ${({ theme, isConnected }) =>
        isConnected ? theme.palette.success.main : theme.palette.error.main};
`;

export const UrlTextField = styled(TextField)`
    grid-area: url;
`;

export const EndpointTextField = styled(TextField)`
    grid-area: endpoint;
`;

export const MethodSelect = styled(Select)`
    grid-area: method;
`;

export const SendButton = styled(IconButton)`
    grid-area: play;
    background-color: ${({ theme }) => theme.palette.primary.main};
    &.MuiIconButton-colorPrimary:hover {
        background-color: ${({ theme }) => theme.palette.primary.dark};
    }
    &.Mui-disabled {
        .MuiIconButton-label {
            color: ${({ theme }) => theme.palette.grey[700]};
        }
    }
    .MuiIconButton-label {
        color: ${({ theme }) =>
            theme.palette.getContrastText(theme.palette.primary.main)};
    }

    ${({ theme }) => theme.breakpoints.down('sm')} {
        justify-self: center;
    }
`;
