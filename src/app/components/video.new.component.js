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
var router_1 = require('@angular/router');
var login_service_1 = require('../services/login.service');
var upload_service_1 = require('../services/upload.service');
var video_1 = require('../model/video');
var VideoNewComponent = (function () {
    function VideoNewComponent(loginService, uploadService, route, router) {
        this.loginService = loginService;
        this.uploadService = uploadService;
        this.route = route;
        this.router = router;
        this.titulo = "Crear un nuevo video";
    }
    VideoNewComponent.prototype.ngOnInit = function () {
        this.video = new video_1.Video(1, "", "", "public", "null", null, null, null);
    };
    VideoNewComponent = __decorate([
        core_1.Component({
            selector: 'video-new',
            templateUrl: 'app/view/video.new.html',
            providers: [login_service_1.LoginService, upload_service_1.UploadService]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, upload_service_1.UploadService, router_1.ActivatedRoute, router_1.Router])
    ], VideoNewComponent);
    return VideoNewComponent;
}());
exports.VideoNewComponent = VideoNewComponent;
//# sourceMappingURL=video.new.component.js.map