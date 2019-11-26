import { Injectable } from '@angular/core';

@Injectable()
export class ConfigUrlService {
    private BASE_URL_API_VS = '/v1';
    private BASE_URL_API_TOKEN = '/api';

    // tslint:disable-next-line: variable-name
    // private _get_user = this.BASE_URL_API_TOKEN + this.BASE_URL_API_VS + '/user';
    // auth
    // tslint:disable-next-line: variable-name
    private _auth_login = this.BASE_URL_API_TOKEN + this.BASE_URL_API_VS + '/users/authenticate';
    // get all user
    // tslint:disable-next-line:variable-name
    private _get_all_user = this.BASE_URL_API_TOKEN + this.BASE_URL_API_VS + '/users';

    constructor() { }

    get auth(): string {
        return this._auth_login;
    }


    get getAllUser(): string {
        return this._get_all_user;
    }


}
