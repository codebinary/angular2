import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

//Importamos los services
import { LoginService } from '../services/login.service';
import { UploadService } from '../services/upload.service';
//importamos el modelo
import { User } from '../model/user';


@Component({
  selector: 'user-edit',
  templateUrl: 'app/view/user.edit.html',
  providers: [LoginService, UploadService]
})
export class UserEditComponent implements OnInit  {

	public titulo:string = "Actualizar mis datos";
	public user: User;
	public errorMessage;
	public status;

	public identity;
	public data;

	constructor(
		private loginService: LoginService,
		private route: ActivatedRoute,
		private router: Router,
		private uploadService: UploadService
	){}

	ngOnInit(): void{
		let data = this.loginService.getData();
		this.data = data;
		if(data == null){
			this.router.navigate(["/index"]);
		}else{
			this.user = new User(data.sub, 
								data.role, 
								data.name, 
								data.surname,
								data.email, 
								data.password, 
								"null");
			console.log(this.user);
		}
	}

	onSubmit(){
		console.log(this.user.password);
		console.log(this.data.password);
		if(this.user.password == this.data.password) {
			this.user.password = "";
			console.log(this.user);
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

	public filesToUpload: Array<File>;
	public resultUpload;

	fileChangeEvent(fileInput: any){
		console.log("upload service");
		this.filesToUpload = <Array<File>>fileInput.target.files;

		let token = this.loginService.getToken();
		let url = "http://kia.com.pe/videos_app/user/upload-image-user";
		this.uploadService.makeFileRequest(token, url, ["image"], this.filesToUpload)
			.then(
				(result) => {
					this.resultUpload = result;
					console.log(this.resultUpload)
				},
				(error) => {
					console.log(error);
				}
			);
	}

}
