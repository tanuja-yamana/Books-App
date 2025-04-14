import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContactPageService {

  constructor() { }

  saveData(contactData: any) {
    let existingData = JSON.parse(localStorage.getItem('contactData') || '[]');
    existingData.push(contactData);
    localStorage.setItem('contactData', JSON.stringify(existingData));
  }

  getData() {
    const data = localStorage.getItem('contactData');
    return data ? JSON.parse(data) : [];
  }


}
