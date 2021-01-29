import { ApiService } from 'data/services/ApiService';
import { LocalStorageService } from 'data/services/StorageService';
import { useState, useEffect, useRef, useMemo } from 'react';

function createBaseUrl(url: string): string {
    return `http://${url}`.trim().replace(/\/*$/, '');
}

export function useIndexPage() {
    const timer = useRef();
    const [isConnected, setConnected] = useState(false);
    const [url, setUrl] = useState(
        LocalStorageService.get('url', 'localhost:3002')
    );
    const [endpoint, setEndpoint] = useState(
        LocalStorageService.get('endpoint', '')
    );
    const [method, setMethod] = useState('GET');
    const [bodyCode, setBodyCode] = useState('');
    const [responseCode, setResponseCode] = useState('');
    const isValidBody = useMemo(() => {
        try {
            JSON.parse(bodyCode);
            return true;
        } catch (error) {
            return false;
        }
    }, [bodyCode]);

    useEffect(() => {
        LocalStorageService.set('url', url);
        clearInterval(timer.current);
        checkConnection();
        timer.current = setInterval(checkConnection, 2500);
        return () => {
            clearInterval(timer.current);
        };
    }, [url]);

    useEffect(() => {
        LocalStorageService.set('endpoint', endpoint);
    }, [endpoint]);

    function checkConnection() {
        ApiService.get(createBaseUrl(url), '!!/version')
            .then(() => {
                setConnected(true);
            })
            .catch(() => {
                setConnected(false);
            });
    }

    function onSend() {
        const baseUrl = createBaseUrl(url);
        if (!url || !endpoint) {
            return;
        }
        switch (method) {
            case 'GET':
                ApiService.get(baseUrl, endpoint).then((response) =>
                    setResponseCode(JSON.stringify(response, null, 4))
                );
                break;
            case 'POST':
                ApiService.post(
                    baseUrl,
                    endpoint,
                    JSON.parse(bodyCode)
                ).then((response) =>
                    setResponseCode(JSON.stringify(response, null, 4))
                );
                break;
            case 'PUT':
                ApiService.put(
                    baseUrl,
                    endpoint,
                    JSON.parse(bodyCode)
                ).then((response) =>
                    setResponseCode(JSON.stringify(response, null, 4))
                );
                break;
            case 'DELETE':
                ApiService.delete(baseUrl, endpoint).then((response) =>
                    setResponseCode(JSON.stringify(response, null, 4))
                );
                break;
        }
    }

    return {
        isConnected,
        setConnected,
        url,
        setUrl,
        endpoint,
        setEndpoint,
        method,
        setMethod,
        onSend,
        bodyCode,
        setBodyCode,
        responseCode,
        setResponseCode,
        isValidBody,
    };
}
