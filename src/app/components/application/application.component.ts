import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
})
export class ApplicationComponent {
  public data: any = [];
  filteredItems = [];
  searchText: string = '';

  constructor(
    private fakeData: DataService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.data = this.fakeData.getFakeData();
  }

  info(detail: string) {
    this.messageService.add({
      severity: 'info',
      summary: 'თქვენს მიერ არჩეული ქარდია',
      detail: detail,
    });
  }

  detailInfo(detail: string, item: string) {
    this.messageService.add({
      severity: 'warn',
      summary: item,
      detail: detail,
    });
  }

  onFilteredItemsChanged(filteredItems: any): void {
    this.filteredItems = filteredItems;
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
  }

  cardClick(item: any) {
    console.log('card cliked ' + item.title);

    this.info(item.title);
  }

  onTitleClick(event: { stopPropagation: () => void }, item: any) {
    event?.stopPropagation();
    this.detailInfo(item.title, item.details);
  }
}
