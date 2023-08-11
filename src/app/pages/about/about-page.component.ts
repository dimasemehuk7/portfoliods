import {Component} from "@angular/core";
import {Skill} from "../../models/skill";

@Component({
    templateUrl: 'about-page.component.html',
    styleUrls: ['about-page.component.scss']
})

export class AboutPageComponent {
  skills: Skill[] = [
    {
      title: "Typescript",
      srcIcon: "/assets/skillsIcons/typescript.svg"
    },
    {
      title: "Java Script",
      srcIcon: "/assets/skillsIcons/javascript.svg"
    },
    {
      title: "Angular",
      srcIcon: "/assets/skillsIcons/angular.svg"
    },
    {
      title: "MongoDb",
      srcIcon: "/assets/skillsIcons/typescript.svg"
    },
    {
      title: "WebPack",
      srcIcon: "/assets/skillsIcons/webpack.svg"
    },
    {
      title: "Sass",
      srcIcon: "/assets/skillsIcons/sass.svg"
    },
    {
      title: "NodeJs",
      srcIcon: "/assets/skillsIcons/nodejs.svg"
    },
    {
      title: "Git",
      srcIcon: "/assets/skillsIcons/git.svg"
    }
  ]
}
