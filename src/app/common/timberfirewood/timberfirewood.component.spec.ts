import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimberfirewoodComponent } from './timberfirewood.component';

describe('TimberfirewoodComponent', () => {
  let component: TimberfirewoodComponent;
  let fixture: ComponentFixture<TimberfirewoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimberfirewoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimberfirewoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
