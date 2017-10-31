import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MethodService {
  private methodUrl = 'api/method/';

  constructor(private http: Http) { }

  sendRequest(method: string): Promise<string> {
    switch (method) {
      case 'GET':
        return this.http.get(this.methodUrl)
          .toPromise()
          .then(response => response.text())
          .catch(this.handleError);
      case 'POST':
        return this.http.post(this.methodUrl, '')
          .toPromise()
          .then(response => response.text())
          .catch(this.handleError);
      case 'PUT':
        return this.http.put(this.methodUrl, '')
          .toPromise()
          .then(response => response.text())
          .catch(this.handleError);
      case 'DELETE':
        return this.http.delete(this.methodUrl)
          .toPromise()
          .then(response => response.text())
          .catch(this.handleError);
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
