// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// RxJs
import { Observable } from 'rxjs';

@Injectable()
export class ApiHttpService {

    constructor(
        // Angular Modules
        private http: HttpClient
    ) { }
    private baseURL: String = "https://budget-planner-quail.herokuapp.com/api/";

    public get = (url: string, options?: any): Observable<any> => this.http.get(this.baseURL + url, options);

    public post = (url: string, data: any, options?: any): Observable<any> => this.http.post(this.baseURL + url, data, options);

    public put = (url: string, data: any, options?: any): Observable<any> => this.http.put(this.baseURL + url, data, options);

    public delete = (url: string, options?: any): Observable<any> => this.http.delete(this.baseURL + url, options);
}