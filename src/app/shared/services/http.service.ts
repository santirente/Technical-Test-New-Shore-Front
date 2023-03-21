import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface DataResult<T> {
  message: string;
  success: boolean;
  result: T;
  errorMessages?: T;
}

export interface Options {
  headers?: HttpHeaders;
  params?: HttpParams;
  contentType?: string;
}

@Injectable()
export class HttpService {
  constructor(
    protected http: HttpClient,
  ) {}

  public createDefaultOptions(): Options {
    const token = window.localStorage.getItem('token');
    if (token) {
      return {
        headers: new HttpHeaders({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      };
    }
    return {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    };
  }

  public optsName(name: string): Options {
    return this.setHeader('xhr-name', name);
  }

  private setHeader(name: string, value: string): Options {
    const newOpts = this.createDefaultOptions();
    newOpts.headers = newOpts.headers?.set(name, value);
    return newOpts;
  }

  private createOptions(opts?: Options): Options {
    const defaultOpts: Options = this.createDefaultOptions();

    if (!!opts) {
      opts = {
        params: opts.params || defaultOpts.params,
        headers: opts.headers || defaultOpts.headers,
      };

      if (!opts.headers?.get('Content-Type')) {
        opts.headers?.set(
          'Content-Type',
          defaultOpts.headers?.get('Content-Type') || ''
        );
      }
    }

    return opts || defaultOpts;
  }

  public get<T>(serviceUrl: string, opts?: Options): Observable<T> {
    const ropts = this.createOptions(opts);
    return this.http.get<T>(environment.ApiUrl + serviceUrl, ropts);
  }

  public post<T, R>(
    serviceUrl: string,
    body: T,
    opts?: Options
  ): Observable<R> {
    const ropts = this.createOptions(opts);
    return this.http.post<R>(environment.ApiUrl + serviceUrl, body, ropts);
  }

  public put<T, R>(serviceUrl: string, body: T, opts?: Options): Observable<R> {
    const ropts = this.createOptions(opts);
    return this.http.put<R>(environment.ApiUrl + serviceUrl, body, ropts);
  }

}
