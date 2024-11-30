import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepDiveLib1Component } from './deep-dive-lib-1.component';

describe('DeepDiveLib1Component', () => {
  let component: DeepDiveLib1Component;
  let fixture: ComponentFixture<DeepDiveLib1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeepDiveLib1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeepDiveLib1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
