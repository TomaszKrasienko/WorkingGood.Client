import {Component, Input, OnInit} from '@angular/core';
import {SkillModel} from "../../../core/models/skills/skill.model";

@Component({
  selector: 'app-skill-view',
  templateUrl: './skill-view.component.html',
  styleUrls: ['./skill-view.component.css']
})
export class SkillViewComponent implements OnInit {
  @Input() skillModel: SkillModel;
  constructor() { }

  ngOnInit(): void {

  }

  getFilledIcons(): number[]{
    console.log(this.skillModel?.level);
    return new Array(this.skillModel?.level);
  }

  getEmptyIcons(): number[]{
    return new Array(5-this.skillModel?.level);
  }

}
