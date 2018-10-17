import {environment} from '../../environments/environment';

let PORT: number;
let HOST: string;

if (environment.production) {
    PORT = 80;
    HOST = 'http://uscis-naturalization.herokuapp.com';
} else {
    PORT = 5000;
    HOST = 'http://localhost';
}

const VIEW_ADDRESS = `${HOST}:${PORT}`;
const API_ADDRESS = `${VIEW_ADDRESS}/api`;

export { VIEW_ADDRESS, API_ADDRESS, PORT, HOST };