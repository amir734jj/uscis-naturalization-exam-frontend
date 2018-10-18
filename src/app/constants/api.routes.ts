import {environment} from '../../environments/environment';

let PORT: number;
let HOST: string;

if (environment.production) {
    PORT = 80;
    HOST = '';
} else {
    PORT = 5000;
    HOST = 'http://localhost';
}

const VIEW_ADDRESS = `${HOST}${PORT === 80 ? '' : `:${PORT}`}`;
const API_ADDRESS = `${VIEW_ADDRESS}/api`;

export { VIEW_ADDRESS, API_ADDRESS, PORT, HOST };