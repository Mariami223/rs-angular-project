import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.css'],
})
export class FeedbackPageComponent {
  constructor(private messageService: MessageService) {}
  selectedNumber: number = 0;

  selectNumber(number: number) {
    this.selectedNumber = number;
    console.log(this.selectedNumber);
  }

  onSuccess(number: any) {
    this.messageService.add({
      severity: 'success',
      summary: 'თქვენი შეფასება',
      detail: `${number}`,
    });
  }

  onError() {
    this.messageService.add({
      severity: 'warn',
      summary: 'გაფრთხილება',
      detail: 'გთხოვთ აირჩიოთ რიცხვი',
    });
  }

  onSubmit() {
    if (this.selectedNumber != 0) {
      this.onSuccess(this.selectedNumber);
      this.selectedNumber = 0;
    } else {
      this.onError();
      this.selectedNumber = 0;
    }
  }
}
