import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverAndOffersComponent } from './discover-and-offers.component';

describe('DiscoverAndOffersComponent', () => {
  let component: DiscoverAndOffersComponent;
  let fixture: ComponentFixture<DiscoverAndOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverAndOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverAndOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
