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
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//Importamos los services
var login_service_1 = require('../services/login.service');
var upload_service_1 = require('../services/upload.service');
//importamos el modelo
var user_1 = require('../model/user');
var UserEditComponent = (function () {
    function UserEditComponent(loginService, route, router, uploadService) {
        this.loginService = loginService;
        this.route = route;
        this.router = router;
        this.uploadService = uploadService;
        this.titulo = "Actualizar mis datos";
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var data = this.loginService.getData();
        this.data = data;
        if (data == null) {
            this.router.navigate(["/index"]);
        }
        else {
            this.user = new user_1.User(data.sub, data.role, data.name, data.surname, data.email, data.password, "null");
            console.log(this.user);
        }
    };
    UserEditComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.user.password);
        console.log(this.data.password);
        if (this.user.password == this.data.password) {
            this.user.password = "";
            console.log(this.user);
        }
        this.loginService.update_user(this.user).subscribe(function (response) {
            _this.status = response.status;
            if (_this.status != "success") {
                _this.status = "error";
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la peticion");
            }
        });
    };
    UserEditComponent.prototype.fileChangeEvent = function (fileInput) {
        var _this = this;
        console.log("upload service");
        this.filesToUpload = fileInput.target.files;
        var token = this.loginService.getToken();
        var url = "http://kia.com.pe/videos_app/user/upload-image-user";
        this.uploadService.makeFileRequest(token, url, ["image"], this.filesToUpload)
            .then(function (result) {
            _this.resultUpload = result;
            console.log(_this.resultUpload);
        }, function (error) {
            console.log(error);
        });
    };
    UserEditComponent = __decorate([
        core_1.Component({
            selector: 'user-edit',
            templateUrl: 'app/view/user.edit.html',
            providers: [login_service_1.LoginService, upload_service_1.UploadService]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.ActivatedRoute, router_1.Router, upload_service_1.UploadService])
    ], UserEditComponent);
    return UserEditComponent;
}());
exports.UserEditComponent = UserEditComponent;
//# sourceMappingURL=user.edit.component.js.map