import { Component, OnInit, Input, EventEmitter, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent {
	rows = [];
	//public rawConfigData:any;

	constructor() {
		this.fetch((data) => {
		  this.rows = data;
		});
	}



	key: string = 'username'; //set default
	reverse: boolean = true;
	sort(key){
		this.key = key;
		console.log("reserve:"+this.reverse+this.key);
		this.reverse = !this.reverse;
		console.log("reserve:"+this.reverse);
	}


    fetch(cb) {
		const req = new XMLHttpRequest();
		req.open('GET', `assets/data/TT_raw.json`);

		req.onload = () => {
		  cb(JSON.parse(req.response));
		};

		req.send();
	  }


}
