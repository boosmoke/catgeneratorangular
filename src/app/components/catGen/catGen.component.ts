import { Component, OnInit } from '@angular/core';
import { GetcatService } from '../../services/getcat.service';

@Component({
  selector: 'app-catGen',
  templateUrl: './catGen.component.html',
  styleUrls: ['./catGen.component.scss']
})
export class CatGenComponent implements OnInit {
  cat:string;
  allCats = [];
  currentCats=[];
  categories=[];
  currentCategory:string;
  categorieLength:number;
  constructor(private getcatService:GetcatService) { }

  ngOnInit() {
    this.getNewCat();
    this.getLocalStorage();
  }

  categorySwitcher(category){
    this.currentCategory = category;
    this.currentCats = this.allCats.filter(cat => (cat.catCategory === category ? this.currentCats.push(cat) : null ))    
  }
  countCategory(category){
    let collection = [];
    this.allCats.filter(cat => (cat.catCategory === category ? collection.push(cat) : null ))
    return collection.length;
  }
  addCat(category){
    let catObj = category;
    catObj.catUrl = this.cat;
    this.allCats.push(catObj)
    this.categories.push(category.catCategory);
    this.filterCategories(this.categories);
    this.getNewCat();
    this.setLocalStorage(this.allCats, this.categories);
  }
  filterCategories(arr){
    this.categories = arr.filter(this.onlyUnique);
  }
  onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
  }

  getNewCat(){
    this.getcatService.getCat().subscribe(cat => {
      this.cat = cat.file;
    });
  }


  setLocalStorage(cats, categories){
    localStorage.setItem("cats", JSON.stringify(cats));
    localStorage.setItem("categories", JSON.stringify(categories));
  }

  getLocalStorage(){
    if (localStorage.getItem("cats") === null) {
      return;
    }else{
      this.allCats = JSON.parse(localStorage.getItem("cats"));
      this.categories = JSON.parse(localStorage.getItem("categories"));
    }
  }

  clearLocalHistory(){
    localStorage.clear();
    this.allCats = [];
    this.categories = [];
    this.currentCats = [];
  }

}
