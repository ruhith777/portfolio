import { Component, HostListener } from '@angular/core';
import { ScrollingService } from '../scrolling.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private _scrolling : ScrollingService){}

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check the scroll position and update isScrolled accordingly
    this.isScrolled = window.scrollY > 0;
  }

  scrolltopHomeArea(){
    this._scrolling.scrollToElement('homearea');

  }
  scrolltopAboutArea(){
    this._scrolling.scrollToElement('aboutarea');

  }

  scrolltopEducationArea(){
    
    
    this._scrolling.scrollToElement('educationarea');

  }
  

  scrolltopExperienceArea(){
    this._scrolling.scrollToElement('experiencearea');

  }
  scrolltopAchievementArea(){
    this._scrolling.scrollToElement('achievementarea');

  }
  scrolltopCertificationsArea(){
    this._scrolling.scrollToElement('certificationsarea');

  }
  scrolltopSkillsArea(){
    this._scrolling.scrollToElement('skillsarea');

  }
  scrolltopContactArea(){
    this._scrolling.scrollToElement('contactarea');
    // this._scrolling.scrollToElementgap('contactarea',20)

  }
  scrolltopTalksArea(){
    this._scrolling.scrollToElement('talksarea');

  }


  
  scrolltopProgammingArea(){
    this._scrolling.scrollToElement('proglangarea');

  }

  scrolltopHobbiesArea(){
    this._scrolling.scrollToElement('hobbiesarea');

  }
  scrolltopResponsibilitiesArea(){
    this._scrolling.scrollToElement('responsibilitiesarea');

  }

  scrolltopprojectsArea(){
    this._scrolling.scrollToElement('projectsarea');

  }

  scrolltopmore(){
    this._scrolling.scrollToElement('morearea');
  }


//animation trying after scrolling
  

}
