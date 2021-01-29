function getHeaders(): Headers {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    return headers;
}
function createUrl(baseUrl: string, endpoint: string): string {
    return `${baseUrl}/api/${endpoint}`.trim().replace(/\/*$/, '');
}

function handleResponse(response: any): any {
    return response
        .json()
        .then((error: any) => handleError(response, error))
        .catch((error: any) => handleError(response, error));
}
function handleError(response: any, error: any) {
    if (response.status === 200) {
        if (error.data) {
            return error;
        } else if (error instanceof Error) {
            return {};
        }
    }
    return error;
}

export const ApiService = {
    get(baseUrl: string, endpoint: string): any {
        const headers = getHeaders();
        return fetch(`${createUrl(baseUrl, endpoint)}`, {
            headers,
        }).then(handleResponse);
    },
    post(baseUrl: string, endpoint: string, data: any): any {
        const headers = getHeaders(),
            body = JSON.stringify(data);
        return fetch(`${createUrl(baseUrl, endpoint)}`, {
            method: 'POST',
            body,
            headers,
        }).then(handleResponse);
    },
    put(baseUrl: string, endpoint: string, data: any): any {
        const headers = getHeaders();
        return fetch(`${createUrl(baseUrl, endpoint)}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers,
        }).then(handleResponse);
    },
    delete(baseUrl: string, endpoint: string): any {
        const headers = getHeaders();
        return fetch(`${createUrl(baseUrl, endpoint)}`, {
            method: 'DELETE',
            headers,
        }).then(handleResponse);
    },
};
