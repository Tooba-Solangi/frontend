import { HttpClient, HttpHeaders, HttpErrorResponse, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { Params } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

export class ApiServiceBase {

    protected baseUri: string;
    constructor(protected http: HttpClient) {
        this.baseUri = environment.API; 
    }

    get<T>(uri: string, payload?: Params): Observable<T> {
        return this.http.get<T>(uri, payload);
    }

    post<T>(uri: string, body: any): Observable<T> {
        let reqHeaders = new HttpHeaders().set('Content-Type','application/json');
        return this.http.post<T>(uri, body, {headers: reqHeaders});
    }

    put<T>(uri: string, body: any): Observable<T> {
        let reqHeaders = new HttpHeaders().set('Content-Type','application/json');
        return this.http.put<T>(uri, body, {headers: reqHeaders});
    }

    delete(uri: string): Observable<any> {
        return this.http.delete(uri);
    }
}