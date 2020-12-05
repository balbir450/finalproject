import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MRregisterComponent } from './mrregister.component';

describe('MRregisterComponent', () => {
  let component: MRregisterComponent;
  let fixture: ComponentFixture<MRregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MRregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MRregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
