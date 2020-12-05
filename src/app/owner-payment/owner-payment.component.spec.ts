import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerPaymentComponent } from './owner-payment.component';

describe('OwnerPaymentComponent', () => {
  let component: OwnerPaymentComponent;
  let fixture: ComponentFixture<OwnerPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
