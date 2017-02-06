import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: `app/view/login.html`,
})
export class LoginComponent implements OnInit {

	public titulo: string = "Identificate";
	//Aqui guardaremos los datos del usuario
	public user;

	ngOnInit(){

		this.user = {
			"email": "",
			"password": "",
			"gethas": "false"
		};

	}

	onSubmit(){
		console.log(this.user);
	}

}
