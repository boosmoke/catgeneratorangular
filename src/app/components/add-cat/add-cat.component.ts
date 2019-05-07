import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.scss']
})
export class AddCatComponent implements OnInit {
  @Output() addCat:EventEmitter<any> = new EventEmitter();
  category:string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.category = this.category.toLocaleLowerCase();
    const catObj = {
      catCategory: this.category,
      catUrl: null
    }
    this.addCat.emit(catObj);
  }

  

}
