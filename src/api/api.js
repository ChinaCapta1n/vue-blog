import { get, post } from './request';

// nav data
export const API_nav = params => {
    let url = '/nav.json';
    return get(url, params);
}

// about data
export const API_about = params => {
    let url = '/about.json';
    return get(url, params);
}