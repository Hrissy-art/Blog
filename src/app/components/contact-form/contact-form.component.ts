import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../../models/message.model';

@Component({
  selector: 'contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  newMessage: Message = {
    lastname: "",
    firstname: "",
    email: "",
    content: ""
  };
contactForm: any;

  onSubmit(): void {
    console.log(this.newMessage);
  }
}
