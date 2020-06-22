import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationtestComponent } from './interpolationtest.component';

describe('InterpolationtestComponent', () => {
  let component: InterpolationtestComponent;
  let fixture: ComponentFixture<InterpolationtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpolationtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
