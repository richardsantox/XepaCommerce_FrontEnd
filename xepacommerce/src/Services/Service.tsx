import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://xepacommerce.herokuapp.com'
})