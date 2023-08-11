import {Component, Input} from '@angular/core'

@Component({
  selector: 'app-skills-card',
  templateUrl: 'skillscard.component.html',
  styleUrls: ['skillscard.component.scss']
})

export class SkillscardComponent {
  @Input() title: string = '';
  @Input() src: string = '';
}
