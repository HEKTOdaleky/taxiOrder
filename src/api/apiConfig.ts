import axios from 'axios';

export const apiUrl = 'localhost:8001';

export const queryInstance = axios.create({
    baseURL: apiUrl,
});

export const queryGet = (url: string, config = {}) => {
    return queryInstance.get(url, config);
};

export const queryPost = (url: string, data: any = null, config = {}) => {
    return queryInstance.post(url, data, config);
};