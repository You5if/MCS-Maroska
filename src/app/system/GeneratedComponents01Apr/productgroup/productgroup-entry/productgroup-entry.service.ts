import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {catchError, map} from 'rxjs/operators';


import { Send } from '../../../../send.model';
import { AppGlobals } from 'src/app/app.global';
import { CommonService } from 'src/app/components/common/common.service';
import { Http } from '@angular/http';
import { AuthService } from 'src/app/components/security/auth/auth.service';


@Injectable({
    providedIn: 'root'
})
export class ProductGroupEntryService {
    
    
    constructor(private _globals: AppGlobals,
        private httpClient: HttpClient,
        private _cf: CommonService,
        private http: Http,
        private _auth: AuthService) {}



        productGroupControllers(model: Send) {
            return this.http.post(this._globals.baseAPIUrl + 'ProductGroup/getuniventry', model, this._cf.requestOptions()).pipe(
           map((response: any) => {
               console.log('here: ', response.json());
           return response.json();
           }), catchError(this._cf.handleError));
           }

           productGroupEntryA(arr: any){
           return this.http.post(this._globals.baseAPIUrl + 'ProductGroup/createuniv',arr).pipe(
            map((response: any) => {
                console.log('here: ', response.json());
            return response.json();
            }), catchError(this._cf.handleError));
        }

        productGroupEntryE(arr: any){
           return this.http.post(this._globals.baseAPIUrl + 'ProductGroup/edituniv',arr).pipe(
            map((response: any) => {
                console.log('here: ', response.json());
            return response.json();
            }), catchError(this._cf.handleError));
        }
        



//Bank


}
