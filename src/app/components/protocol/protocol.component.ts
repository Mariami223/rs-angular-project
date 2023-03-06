import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-protocol',
  templateUrl: './protocol.component.html',
  styleUrls: ['./protocol.component.css'],
})
export class ProtocolComponent {
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

  detailInfo(detail: string) {
    this.messageService.add({
      severity: 'warn',
      summary: 'Warn',
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
    this.detailInfo(item.details);
  }
}
