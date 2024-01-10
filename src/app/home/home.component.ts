import { Component } from '@angular/core';
import Typed from 'typed.js';
import { ScrollingService } from '../scrolling.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private _scrolling : ScrollingService, ){}
  scrolltopContactArea(){
    this._scrolling.scrollToElement('contactarea');
    // this._scrolling.scrollToElementgap('contactarea',20)

  }


  downloadResume(): void {
    
    this._scrolling.downloadResume().subscribe((data: Blob) => {
      const blob = new Blob([data], { type: 'application/pdf' });

      // Create a link element and trigger the download
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'ruhith.pdf';
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
    });
  }
 

}

