import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderfilesComponent } from './tenderfiles.component';

describe('TenderfilesComponent', () => {
  let component: TenderfilesComponent;
  let fixture: ComponentFixture<TenderfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenderfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenderfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
