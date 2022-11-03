import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreivanceregistrationComponent } from './greivanceregistration.component';

describe('GreivanceregistrationComponent', () => {
  let component: GreivanceregistrationComponent;
  let fixture: ComponentFixture<GreivanceregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreivanceregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreivanceregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
