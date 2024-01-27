import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
   showAnimation = false;

  // Trigger the animation, for example, on component initialization
  ngOnInit() {
    this.animationtext();
  }

  animationtext(){
    this.showAnimation = true;

  }
    
}
