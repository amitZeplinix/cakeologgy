import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-discover-and-offers',
  templateUrl: './discover-and-offers.component.html',
  styleUrls: ['./discover-and-offers.component.css']
})
export class DiscoverAndOffersComponent implements OnInit {
  ngOnInit(): void {
    feather.replace();
  }
  @ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent!: ElementRef<any>;

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  }
}
