import { ScrollingModule } from '@angular/cdk/scrolling';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { switchAll } from 'rxjs';
import Swal from 'sweetalert2';
import { ScrollingService } from '../scrolling.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 


  contactForm: FormGroup;
  isContact : boolean=true;

  constructor(private fb: FormBuilder,private yourService : ScrollingService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Number: ['', Validators.required],
      Message: ['', Validators.required],
    });
  }

  submitForm() {
    
    if (this.contactForm.valid) {
      // Process your form submission here
      const formData = this.contactForm.value;

      // Call the service to submit the form
      this.yourService.submitForm(formData).subscribe(
        (response) => {
          console.log('Form submitted successfully:', response);
          // Handle success, e.g., show a success message
          Swal.fire({
            icon: 'success',
            title: 'Form submitted successfully!',
            text: 'Thank you for your submission.',
          });
          this.contactForm.reset();          
        },
        (error) => {
          console.error('Form submission failed:', error);
          // Handle error, e.g., show an error message
        }
      );
    } else {
      // Handle invalid form
    }
   

  }
}

