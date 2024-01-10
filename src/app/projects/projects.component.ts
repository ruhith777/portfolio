import { Component } from '@angular/core';
import { ScrollingService } from '../scrolling.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private _scrolling : ScrollingService){}

  documentation(): void {
    
    this._scrolling.downloadthreatdoc().subscribe((data: Blob) => {
      const blob = new Blob([data], { type: 'application/pdf' });

      // Create a link element and trigger the download
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'report.pdf';
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
    });
  }

  

}
