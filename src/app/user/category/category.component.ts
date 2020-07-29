import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title= "Kategori"
  categories:Category[] = [
    {id:1,name:"Elektronik",routeUrl:"electronics"},
    {id:2,name:"Araba",routeUrl:"cars"},
    {id:3,name:"Ayakkabı",routeUrl:"shoes"},
    {id:4,name:"Bahçe",routeUrl:"garden"}

  ]

  ngOnInit(): void {
  }


}
