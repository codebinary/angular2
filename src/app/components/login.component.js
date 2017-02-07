"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//Importamos los services
var login_service_1 = require('../services/login.service');
var LoginComponent = (function () {
    //Para cargar el servicio dentro del component utilizamos el constructor
    function LoginComponent(loginService) {
        this.loginService = loginService;
        this.titulo = "Identificate";
    }
    LoginComponent.prototype.ngOnInit = function () {
        //alert(this._loginService.signup())
        this.user = {
            "email": "",
            "password": "",
            "gethash": "false"
        };
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.user);
        //utilizamos el servicio, utilizamos el método suscribe para recoger la respuesta del servicio
        this.loginService.signup(this.user).subscribe(function (response) {
            console.log(response);
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la peticion");
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: "app/view/login.html",
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map