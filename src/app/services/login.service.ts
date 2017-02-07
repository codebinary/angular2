// Observable Version
import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';


import { Observable } from 'rxjs/Observable';
//Libreria que permite mapear los datos que recogemos de las peticiones ajax 
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService{

	public url = "http://kia.com.pe/videos_app";

	constructor(private http: Http){}

	//Recibimos como parámetro el user_to_login(hash)
	signup(user_to_login){

		let json = JSON.stringify(user_to_login);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this.http.post(this.url+"/login", params, {headers: headers})
				.map(res => res.json());
				

		//return "HOla desde el servicio";

	}

}