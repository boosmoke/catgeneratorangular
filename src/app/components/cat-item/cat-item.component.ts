import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cat-item',
  templateUrl: './cat-item.component.html',
  styleUrls: ['./cat-item.component.scss']
})
export class CatItemComponent implements OnInit {
  @Input() currentCats:any;
  @Input() currentCategory:any;
  constructor() { }

  ngOnInit() {
    
  }


}










