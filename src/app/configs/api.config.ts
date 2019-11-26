import { Injectable } from '@angular/core';

@Injectable()
export class ApiConfig {
    // provider api config

    // BASE_URL_API_VS = ' v1';
    // BASE_URL_API_TOKEN = 'api';

    // config port
    public apiPort = '3000';

    public apiProtocol: string;

    // localhost name
    // public apiHostName = 'localhost';
    public apiHostName = '127.0.0.1';

    public baseApiPath: string;

    constructor() {
        if (this.apiProtocol === undefined) {
            this.apiProtocol = window.location.protocol;
        }
        if (this.apiPort === undefined) {
            this.apiPort = window.location.port;
        } else {
            this.baseApiPath = this.apiProtocol + '//' + this.apiHostName + ':' + this.apiPort;
        }
    }
}

