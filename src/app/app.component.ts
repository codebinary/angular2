import { Component, OnInit } from '@angular/core';

import { LoginService } from './services/login.service';

@Component({
  selector: 'my-app',
  templateUrl: `app/view/layout.html`,
  providers: [LoginService]
})
export class AppComponent implements OnInit {

	public identity;
	public token;
	public data;

	constructor(private loginService: LoginService){}

	ngOnInit(){
		this.identity = this.loginService.getIdentity();
		this.token = this.loginService.getToken();
		this.data = this.loginService.getData();
		console.log(this.data);
	}

}
