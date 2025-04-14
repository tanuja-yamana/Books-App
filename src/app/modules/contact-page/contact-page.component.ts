import { Component, OnInit } from '@angular/core';
import { ContactPageService } from './services/contact-page.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(private contactPageService: ContactPageService) { }
  ngOnInit(): void {
    
  }
  username: string = '';
  email: string = '';
  gender: string = '';
  message: string = '';

  storeData() {

    if (!this.username || !this.email || !this.gender || !this.message) {
      alert('Please fill out all fields.');
      return; 
    }
    const formData = {
      username: this.username,
      email: this.email,
      gender: this.gender,
      message: this.message,
      timestamp: new Date().toISOString() 
    };
    this.contactPageService.saveData(formData);
    this.username = '';
    this.email = '';
    this.gender = '';
    this.message = '';
  }
  getStoredData() {
    return this.contactPageService.getData();
  }
}
