import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DahsboarComponent } from './dahsboar.component';

describe('DahsboarComponent', () => {
  let component: DahsboarComponent;
  let fixture: ComponentFixture<DahsboarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DahsboarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DahsboarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
