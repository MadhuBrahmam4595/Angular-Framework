import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpReactiveFormsComponent } from './emp-reactive-forms.component';

describe('EmpReactiveFormsComponent', () => {
  let component: EmpReactiveFormsComponent;
  let fixture: ComponentFixture<EmpReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpReactiveFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
