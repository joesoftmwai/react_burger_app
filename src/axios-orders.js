import axios from 'axios';

const instance = axios.create({
    baseURL:'https://burger-app-react-7b5e3.firebaseio.com/'
})

export default instance;