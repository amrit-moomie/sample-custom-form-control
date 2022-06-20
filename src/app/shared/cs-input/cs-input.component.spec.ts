import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsInputComponent } from './cs-input.component';

describe('CsInputComponent', () => {
  let component: CsInputComponent;
  let fixture: ComponentFixture<CsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
