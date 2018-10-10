import {environment} from '../../environments/environment';

let PORT: number;
let HOST: string;

if (environment.production) {
    PORT = 80;
    HOST = '';
} else {
    PORT = 5000;
    HOST = 'localhost';
}

const VIEW_ADDRESS = `http://${HOST}:${PORT}`;
const API_ADDRESS = `http://${HOST}:${PORT}/api`;

export { VIEW_ADDRESS, API_ADDRESS, PORT, HOST };