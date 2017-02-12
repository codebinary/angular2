import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

//Importamos los services
import { LoginService } from '../services/login.service';
//importamos el modelo
import { User } from '../model/user';


@Component({
  selector: 'user-edit',
  templateUrl: 'app/view/user.edit.html',
  providers: [LoginService]
})
export class UserEditComponent implements OnInit  {

	public titulo:string = "Actualizar mis datos";
	public user: User;
	public errorMessage;
	public status;

	public identity;

	constructor(
		private loginService: LoginService,
		private route: ActivatedRoute,
		private router: Router
	){}

	ngOnInit(): void{
		let identity = this.loginService.getIdentity();
		if(identity == null){
			this.router.navigate(["/index"]);
		}else{
			this.user = new User(identity.sub, 
								identity.role, 
								identity.name, 
								identity.surname,
								identity.email, 
								identity.password, 
								"null");
			console.log(this.user);
		}
	}

	onSubmit(){
		console.log(this.user);
		if(this.user.password == this.identity.password) {
			this.user.password = "";
		}
		
		this.loginService.update_user(this.user).subscribe(
			response => {
				this.status = response.status;
				if(this.status != "success"){
					this.status = "error";
				}
			},
			error => {
				this.errorMessage = <any>error;
				if(this.errorMessage != null) {
					console.log(this.errorMessage);
					alert("Error en la peticion");
				}
			}
		);
	}

}