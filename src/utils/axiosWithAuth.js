import axios from 'axios';

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'http://localhost:3001',
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
}
