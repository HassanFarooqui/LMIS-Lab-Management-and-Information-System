import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabbookingComponent } from './labbooking.component';

describe('LabbookingComponent', () => {
  let component: LabbookingComponent;
  let fixture: ComponentFixture<LabbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
