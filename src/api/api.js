import { get, post } from './request';

// nav data
export const API_nav = params => {
    let url = '/nav.json';
    return get(url, params);
}