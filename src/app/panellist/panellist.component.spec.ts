import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanellistComponent } from './panellist.component';

describe('PanellistComponent', () => {
  let component: PanellistComponent;
  let fixture: ComponentFixture<PanellistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanellistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanellistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
