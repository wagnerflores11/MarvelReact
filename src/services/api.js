import axios from 'axios';
import md5 from 'md5';

const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;
const ts = Date.now();  



const api = axios.create({
    baseURL: `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${md5(`${ts}${privateKey}${publicKey}`)}`, 
    version: 'Cable',
});



export default api; 