import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockavailabilityComponent } from './stockavailability.component';

describe('StockavailabilityComponent', () => {
  let component: StockavailabilityComponent;
  let fixture: ComponentFixture<StockavailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockavailabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockavailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
