import React, { useMemo } from 'react';
import { InputAdornment, MenuItem } from '@material-ui/core';
import {
    ConnectionStatus,
    ControlContainer,
    UrlTextField,
    EndpointTextField,
    MethodSelect,
    SendButton,
} from './RequisitionConfigurationInput.style';

export interface RequisitionConfigurationInputProps {
    children?: React.ReactNode;
    isConnected: boolean;
    url: string;
    onUrlChange: (url: string) => void;
    endpoint: string;
    onEndpointChange: (endpoint: string) => void;
    method: string;
    onMethodChange: (method: string) => void;
    onSend: () => void;
    isValidBody?: boolean;
}

const methodsList = ['GET', 'POST', 'PUT', 'DELETE'];

const RequisitionConfigurationInput: React.FC<RequisitionConfigurationInputProps> = ({
    isConnected,
    url = 'localhost:3002',
    onUrlChange,
    endpoint,
    onEndpointChange,
    method = 'GET',
    onMethodChange,
    onSend,
    isValidBody,
}) => {
    const canSend = useMemo(() => {
        let isValidBodyForMethod = true;
        if (method === 'POST' || method === 'PUT') {
            isValidBodyForMethod = isValidBody as boolean;
        }
        return isConnected && url && endpoint && isValidBodyForMethod;
    }, [isConnected, url, endpoint, isValidBody, method]);

    return (
        <ControlContainer>
            <ConnectionStatus isConnected={isConnected} />
            <UrlTextField
                label="URL"
                value={url}
                onChange={(event) => onUrlChange(event.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            http://
                        </InputAdornment>
                    ),
                }}
            />
            <EndpointTextField
                label="Endpoint"
                value={endpoint}
                onChange={(event) => onEndpointChange(event.target.value)}
                disabled={!isConnected}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">/api/</InputAdornment>
                    ),
                }}
            />
            <MethodSelect
                label="Method"
                value={method}
                onChange={(event) =>
                    onMethodChange(event.target.value as string)
                }
                disabled={!isConnected}
                variant={'outlined'}
            >
                {methodsList.map((method) => (
                    <MenuItem key={method} value={method}>
                        {method}
                    </MenuItem>
                ))}
            </MethodSelect>
            <SendButton color={'primary'} disabled={!canSend} onClick={onSend}>
                <i className={'fas fa-play'} />
            </SendButton>
        </ControlContainer>
    );
};

export default RequisitionConfigurationInput;
