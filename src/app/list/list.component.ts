import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  itemList: any[] | undefined;
  @Input()
  type: string | undefined;
  @Input()
  columns: {key:string, name: string}[] | undefined;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    if (this.type)
    this.apiService.getItems(this.type).subscribe((data: any) =>  {
      this.itemList = data;
    });
  }

  extractField(key: string, obj: any): any{
    if (typeof obj === 'string')
      return obj;
    const idxDot = key.indexOf('.');
    if (idxDot > -1){
      return this.extractField(key.substring(idxDot + 1), obj[key.substring(0, idxDot)]);
    }
    return obj[key];
  }

}
