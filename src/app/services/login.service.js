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
// Observable Version
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
//Libreria que permite mapear los datos que recogemos de las peticiones ajax 
require('rxjs/add/operator/map');
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.url = "http://kia.com.pe/videos_app";
    }
    //Recibimos como parámetro el user_to_login(hash)
    LoginService.prototype.signup = function (user_to_login) {
        var json = JSON.stringify(user_to_login);
        var params = "json=" + json;
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.url + "/login", params, { headers: headers })
            .map(function (res) { return res.json(); });
        //return "HOla desde el servicio";
    };
    LoginService.prototype.getIdentity = function () {
        var identity = JSON.parse(localStorage.getItem('identity'));
        if (identity != "undefined") {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    };
    LoginService.prototype.getToken = function () {
        var token = localStorage.getItem('token');
        if (token != "undefined") {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    };
    //Recibimos como parámetro el user_to_login(hash)
    LoginService.prototype.register = function (user_to_register) {
        var json = JSON.stringify(user_to_register);
        var params = "json=" + json;
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.url + "/user/new", params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.update_user = function (user_to_update) {
        var json = JSON.stringify(user_to_update);
        var params = "json=" + json + "&authorization=" + this.getToken();
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.url + "/user/edit", params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map