import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ApiConfig } from '../configs/api.config';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, filter, map } from 'rxjs/operators';
import { RequestMethod } from '../configs/req.method';
@Injectable()
export class ApiService {

    headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(private http: HttpClient, private apiConfig: ApiConfig) { }

    // private handleError(error: HttpErrorResponse) {
    //     if (error.error instanceof ErrorEvent) {
    //         // A client-side or network error occurred. Handle it accordingly.
    //         console.error('An error occurred:', error.error.message);
    //     } else {
    //         // The backend returned an unsuccessful response code.
    //         // The response body may contain clues as to what went wrong,
    //         console.error(
    //             `Backend returned code ${error.status}, ` +
    //             `body was: ${error.error}`);
    //     }
    //     // return an observable with a user-facing error message
    //     return throwError(
    //         'Something bad happened; please try again later.');
    // }

    private request(path: string, body: any, method = RequestMethod.Post, custumHeaders?: HttpHeaders): Observable<any> {
        const req = new HttpRequest(method, path, body, {
            headers: custumHeaders || this.headers,
        });
        return this.http.request(req)
            .pipe(
                filter(response => response instanceof HttpResponse),
                map((response: HttpResponse<any>) => response.body),
                // catchError(error => this.handleError(error))
            );
    }

    get(path: string, args?: any): Observable<any> {
        const options = {
            headers: this.headers,
        };
        return this.http.get(this.apiConfig.baseApiPath + path, options);
            // .pipe(
            //     retry(3),
            //     catchError(this.handleError)
            // );
    }

    post(path: string, body: any, customHeaders?: HttpHeaders): Observable<any> {
        return this.request(this.apiConfig.baseApiPath + path, body, RequestMethod.Post, customHeaders);
    }

    put(path: string, body: any): Observable<any> {
        return this.request(this.apiConfig.baseApiPath + path, body, RequestMethod.Put);
    }

    delete(path: string, body?: any): Observable<any> {
        return this.request(this.apiConfig.baseApiPath + path, body, RequestMethod.Delete);
    }
}
