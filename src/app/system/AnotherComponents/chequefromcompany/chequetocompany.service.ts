import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectModel } from 'src/app/components/misc/SelectModel';
import { HttpClient } from '@angular/common/http';
import { AppGlobals } from 'src/app/app.global';
import { CommonService } from 'src/app/components/common/common.service';
import { map, catchError } from 'rxjs/operators';
// import { element, elementClassProp } from '@angular/core/src/render3';
import { Http, Response } from '@angular/http';
import { AuthService } from 'src/app/components/security/auth/auth.service';
import { ChequeToCompanyBatchModel, ChequeToCompanyModel } from './chequetocompany.model';

@Injectable({
providedIn: 'root'
})

// Definition of service class
export class ChequeToCompanyService {

   // Constructor definition
   constructor(
       private _globals: AppGlobals,
       private httpClient: HttpClient,
       private _cf: CommonService,
       private http: Http,
       private _auth: AuthService,
     ) {
     }

   // Get entry method of the model, which fethces data based on provided id (int)
   getChequeToCompanyEntry(id: number): Observable<ChequeToCompanyModel> {
      return this.httpClient.get<ChequeToCompanyModel>(this._globals.baseAPIUrl + 'ChequeFromCompany/' + id).pipe(
      map((result: ChequeToCompanyModel) => {
      return result;
      }), catchError(this._cf.handleError)
      );
     }

     moveToBank(arr: ChequeToCompanyBatchModel){
      return this.http.post(this._globals.baseAPIUrl + 'ChequeFromCompany/movetobank',arr).pipe(
         map((response: any) => {
         return response.json();
         }), catchError(this._cf.handleError));
   }

   // Submit the form data to api through this method, (verify the audit column parameters are passed properly before production version is released)
   getChequeToCompanySubmit(data: ChequeToCompanyModel) {
      data.auditColumns = {
      'userId': 1,
      'hostname': 'test',
      'ipaddress': 'test',
      'devicetype': 'test',
      'macaddress': 'test',
      'companyId': 10001
      };
      switch (data.entryMode) {

          // Case A is for adding a new record
          case 'A': {
          return this.http.post(this._globals.baseAPIUrl + 'ChequeFromCompany/create', data, this._cf.requestOptions()).pipe(
          map((response: Response) => {
          return response.json();
          }), catchError(this._cf.handleError));
          }

          // Case E is for editing an existing record
          case 'E': {
          return this.http.post(this._globals.baseAPIUrl + 'ChequeFromCompany/edit', data, this._cf.requestOptions()).pipe(
          map((response: Response) => {
          return response.json();
          }), catchError(this._cf.handleError));
          }

          // Case D is for deleting a record
          case 'D': {
          return this.http.post(this._globals.baseAPIUrl + 'ChequeFromCompany/delete', data, this._cf.requestOptions()).pipe(
          map((response: Response) => {
          return response.json();
          }), catchError(this._cf.handleError));
          }

          default: {
          break;
          }
      }
     }
}
