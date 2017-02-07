import { Component, OnInit } from '@angular/core';

//Importamos los services
import { LoginService } from '../services/login.service';



@Component({
  selector: 'login',
  templateUrl: `app/view/login.html`,
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {

	public titulo: string = "Identificate";

	public errorMessage;
	//Aqui guardaremos los datos del usuario
	public user;

	//Para cargar el servicio dentro del component utilizamos el constructor
	constructor(private loginService: LoginService){}

	ngOnInit(){
		//alert(this._loginService.signup())
		this.user = {
			"email": "",
			"password": "",
			"gethash": "false"
		};

	}

	onSubmit(){
		console.log(this.user);

		//utilizamos el servicio, utilizamos el método suscribe para recoger la respuesta del servicio
		this.loginService.signup(this.user).subscribe(
				response => {
					console.log(response);
				},
				error => {
					this.errorMessage = <any>error;
					if(this.errorMessage != null) {
						console.log(this.errorMessage);
						alert("Error en la peticion");
					}
				}
			)
	}

}
