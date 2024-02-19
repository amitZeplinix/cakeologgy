import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(){
    feather.replace();
  }

  isSearchShow :boolean | undefined;
  ngOnInit(): void {
    
    this.isSearchShow =false;
  }

  toggleSearchBar() {
    this.isSearchShow =! this.isSearchShow;
    console.log(this.isSearchShow)
  }
}
