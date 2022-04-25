import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorManager } from './errorManager';
import { QueryParams } from '../helpers/model/query-params';
/**
 * This class manage the http connections with internal REST services. Use the response format {
 *  Code: 'xxxxx',
 *  Body: 'Some Data' (this element is returned if the request is success)
 *  ...
 * }
 */
@Injectable({
  providedIn: 'root',
})
export class RequestManager {
  private path: string;
  public httpOptions: any;
  constructor(private http: HttpClient, private errManager: HttpErrorManager) {
    this.initHttpOptions();
  }

  /**
   * Set http options to initial state
   */
  private initHttpOptions() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }),
    };
  }

  /**
   * Use for set the source path of the service (service's name must be present at src/app/app-config.ts)
   * @param service: string
   */
  setPath(service: string) {
    this.path = environment[service];
  }

  /**
   *
   * @param endpoint service's end-point
   * @param id object id
   * @param query (a Key, Value object with que query params for the request)
   * @param fields array of strings with field names
   * @param sortby array of strings with field names
   * @param order array of strings with asc, desc for each sortby field names
   * @param limit Limit the size of result set. Must be an integer
   * @param offset Start position of result set. Must be an integer
   * @returns
   */
  getv2(endpoint: string, parameters?: QueryParams) {
    const params = {};
    const id = parameters ? parameters.id : undefined;
    if (parameters) {
      if (parameters.query) {
        let queryParams = '';
        for (const [key, value] of Object.entries(parameters.query))
          queryParams += `${key}:${value},`;
        queryParams = queryParams.substr(0, queryParams.length - 1);
        params['query'] = queryParams;
      }
      if (parameters.fields) params['fields'] = parameters.fields.join(',');
      if (parameters.sortby) params['sortby'] = parameters.sortby.join(',');
      if (parameters.order) params['order'] = parameters.order;
      if (parameters.detailed) params['detailed'] = parameters.detailed;
      if (parameters.limit !== null && parameters.limit !== undefined) params['limit'] = parameters.limit;
      if (parameters.offset != null && parameters.offset !== undefined) params['offset'] = parameters.offset;
    }
    return this.get(endpoint + (id ? `/${id}` : ''), params);
  }

  /**
   * Perform a GET http request
   * @param endpoint service's end-point
   * @param params (a Key, Value object with que query params for the request)
   * @returns Observable<any>
   */
  get(endpoint, params?) {
    let queryParams = new HttpParams();
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        queryParams = queryParams.append(key, value + '');
      }

    }
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      }),
    };
    this.httpOptions.params = queryParams;
    return this.http.get<any>(`${this.path}${endpoint}`, this.httpOptions).pipe(
      map(
        (res) => {

          if (res && res.hasOwnProperty('Body') && res['Type'] !== 'error') {
            return res['Body'];
          } else {
            return res;
          }
        },
      ),
    );
  }

  /**
   * Perform a POST http request
   * @param endpoint service's end-point
   * @param element data to send as JSON
   * @returns Observable<any>
   */
  post(endpoint, element) {
    this.initHttpOptions();
    return this.http.post<any>(`${this.path}${endpoint}`, element, this.httpOptions).pipe(
      catchError(this.errManager.handleError),
      map(
        (res) => {

          if (res && res.hasOwnProperty('Body') && res['Type'] !== 'error') {
            return res['Body'];
          } else {
            return res;
          }
        },
      ),
    );
  }

  /**
   * Perform a PUT http request
   * @param endpoint service's end-point
   * @param element data to send as JSON, With the id to UPDATE
   * @returns Observable<any>
   */
  put(endpoint, element, id) {
    this.initHttpOptions();
    return this.http.put<any>(`${this.path}${endpoint}${id}`, JSON.stringify(element), this.httpOptions).pipe(
      catchError(this.errManager.handleError),
    );
  }

  /**
   * Perform a PUT http request
   * @param endpoint service's end-point
   * @param element data to send as JSON, With the params to UPDATE
   * @returns Observable<any>
   */
  putParams(endpoint, element) {
    this.initHttpOptions();
    return this.http.put<any>(`${this.path}${endpoint}`, element, this.httpOptions).pipe(
      catchError(this.errManager.handleError),
    );
  }

  /**
   * Perform a DELETE http request
   * @param endpoint service's end-point
   * @param id element's id for remove
   * @returns Observable<any>
   */
  delete(endpoint, id) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'authorization': `Bearer ${window.localStorage.getItem('access_token')}`,
      }),
    };
    return this.http.delete<any>(`${this.path}${endpoint}/${id}`, this.httpOptions).pipe(
      catchError(this.errManager.handleError),
    );
  }
}
