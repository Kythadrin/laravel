import { apiEndpoints, ApiEndpoints } from './api-endpoints.ts';

const makeRequest = async (
    url: string,
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    body?: object
): Promise<Response> => {
    try {
        const options: RequestInit = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (body && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
            options.body = JSON.stringify(body);
        }

        return await fetch(url, options);
    } catch (error) {
        console.error('Error making request:', error);
        throw error;
    }
};

const setId = (url: string, id: number): string => {
    return url.replace(':id', String(id));
};

export const postRequest = async (url: ApiEndpoints, body: object, id?: number): Promise<Response> => {
    return makeRequest(id !== undefined ? setId(apiEndpoints[url], id) : url, 'POST', body);
};

export const getRequest = async (url: ApiEndpoints, id?: number): Promise<Response> => {
    return makeRequest(id !== undefined ? setId(apiEndpoints[url], id) : url, 'GET');
};

export const putRequest = async (url: ApiEndpoints, body: object, id?: number): Promise<Response> => {
    return makeRequest(id !== undefined ? setId(apiEndpoints[url], id) : url, 'PUT', body);
};

export const pathRequest = async (url: ApiEndpoints, body: object, id?: number): Promise<Response> => {
    return makeRequest(id !== undefined ? setId(apiEndpoints[url], id) : url, 'PATCH', body);
};

export const deleteRequest = async (url: ApiEndpoints, id?: number): Promise<Response> => {
    return makeRequest(id !== undefined ? setId(apiEndpoints[url], id) : url, 'DELETE');
};
