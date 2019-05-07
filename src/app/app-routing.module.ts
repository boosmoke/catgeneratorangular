import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CatGenComponent } from './components/catGen/catGen.component';
import { AboutComponent } from './components/pages/about/about.component';

const routes : Routes = [
  {path: '', component: CatGenComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
