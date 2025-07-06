import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  contactForm: FormGroup;
  showPopup = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      countryCode: ['+91', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const { name, email, phone, message, countryCode } = this.contactForm.value;
      const fullPhone = `${countryCode}${phone}`;

      const encodedMsg = encodeURIComponent(
        `📬 Hi Ravindra, please find the response from New Contact Form Submission:\n\n` +
        `👤 Name: ${name}\n` +
        `📧 Email: ${email}\n` +
        `📱 Phone: ${fullPhone}\n` +
        `📝 Message: ${message}`
      );

      const whatsappURL = `https://wa.me/917767081367?text=${encodedMsg}`;
      window.open(whatsappURL, '_blank');

      this.contactForm.reset();
      this.showPopup = true;
    }
  }


  closePopup(): void {
    this.showPopup = false;
  }

  openWhatsApp() {
    window.open('https://wa.me/917767081367', '_blank');
  }

  openEmail() {
    window.location.href = 'mailto:ravindraborse49@gmail.com';
  }

  openMap() {
    window.open('https://maps.app.goo.gl/VqH7hCyqjSCqhL696', '_blank');
  }

}
