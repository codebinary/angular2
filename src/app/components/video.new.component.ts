import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { LoginService } from '../services/login.service';
import { UploadService } from '../services/upload.service';

import { User } from '../model/user';
import { Video } from '../model/video';

@Component({
	selector: 'video-new',
	templateUrl: 'app/view/video.new.html',
	providers: [LoginService, UploadService]
})

export class VideoNewComponent implements OnInit {

	public titulo: string = "Crear un nuevo video";
	public video: Video;

	constructor(
		private loginService: LoginService,
		private uploadService: UploadService,
		private route: ActivatedRoute,
		private router: Router
	){}

	ngOnInit(){
		this.video = new Video(1, "", "", "public", "null", null, null, null);
	}

}