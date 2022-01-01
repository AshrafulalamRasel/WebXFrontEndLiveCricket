import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastComponentComponent } from './toast-component.component';

describe('ToastComponentComponent', () => {
  let component: ToastComponentComponent;
  let fixture: ComponentFixture<ToastComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
