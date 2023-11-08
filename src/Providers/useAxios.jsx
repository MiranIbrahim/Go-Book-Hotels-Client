import axios from 'axios';

const instance  = axios.create({
    baseURL: 'https://go-book-hotel-server-bthxclbni-miran-ibrahims-projects.vercel.app/',
    withCredentials: true,
});

const useAxios = () => {
    return instance;
};

export default useAxios;