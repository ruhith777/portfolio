import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScrollingService {

  constructor(private http: HttpClient) { }
  scrollToElement(elementId: string,): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      //  window.scrollBy(0, 200);
    }
  }
//download resume.pdf
downloadResume(): Observable<Blob> {
  debugger
  return this.http.get('assets/ruhith.pdf', { responseType: 'blob' });
}

downloadthreatdoc(): Observable<Blob> {
  debugger
  return this.http.get('assets/Projects/p33xerox.pdf', { responseType: 'blob' });
}

submitForm(formData: any): Observable<any> {
  const url = 'https://formspree.io/f/mrgngwra'; // Replace with your actual URL
  return this.http.post(url, formData);
}



}


