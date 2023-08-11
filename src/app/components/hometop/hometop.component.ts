import {Component} from "@angular/core";

@Component({
  selector: 'app-hometop',
  templateUrl: 'hometop.component.html',
  styleUrls: ['hometop.component.scss']
})
export class HometopComponent {

  redirectToSocialMedia(): void{
    window.location.href ="https://about.me/semehuk";
  }
}
