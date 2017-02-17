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
//Libreria que permite mapear los datos que recogemos de las peticiones ajax 
require('rxjs/add/operator/map');
var UploadService = (function () {
    function UploadService(http) {
        this.http = http;
    }
    UploadService.prototype.makeFileRequest = function (token, url, params, files) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            var name_file_input = params[0];
            for (var i = 0; i < files.length; i++) {
                formData.append(name_file_input, files[i], files[i].name);
            }
            formData.append("authorization", token);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            document.getElementById("upload-progress-bar").setAttribute("value", "0");
            document.getElementById("upload-progress-bar").style.width = "0%";
            xhr.upload.addEventListener("progress", function (event) {
                var percent = (event.loaded / event.total) * 100;
                var prc = Math.round(percent).toString();
                document.getElementById("upload-progress-bar").setAttribute("value", prc);
                document.getElementById("upload-progress-bar").style.width = prc + "%";
                document.getElementById("status").innerHTML = Math.round(percent) + "% subido.. por favor espera a que termine";
            }, false);
            //Cuando ya ha terminado de cargar
            xhr.addEventListener("load", function () {
                document.getElementById("status").innerHTML = "Subido completada";
                var prc = "100";
                document.getElementById("upload-progress-bar").setAttribute("value", prc);
                document.getElementById("upload-progress-bar").setAttribute("aria-valuenow", prc);
                document.getElementById("upload-progress-bar").style.width = prc + "%";
            }, false);
            //Capturamos el error que pueda haber
            xhr.addEventListener("error", function () {
                document.getElementById("status").innerHTML = "Error en la subida";
            }, false);
            //Capturamos el error que pueda haber
            xhr.addEventListener("abort", function () {
                document.getElementById("status").innerHTML = "Subida abortada";
            }, false);
            //Enviamos los datos 
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    };
    UploadService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UploadService);
    return UploadService;
}());
exports.UploadService = UploadService;
//# sourceMappingURL=upload.service.js.map