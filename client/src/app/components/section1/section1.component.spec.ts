import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section1Component } from './section1.component';

describe('Section1Component', () => {
  let component: Section1Component;
  let fixture: ComponentFixture<Section1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
