import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteclearanceComponent } from './siteclearance.component';

describe('SiteclearanceComponent', () => {
  let component: SiteclearanceComponent;
  let fixture: ComponentFixture<SiteclearanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteclearanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteclearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
