import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonloginComponent } from './buttonlogin.component';

describe('ButtonloginComponent', () => {
  let component: ButtonloginComponent;
  let fixture: ComponentFixture<ButtonloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonloginComponent]
    });
    fixture = TestBed.createComponent(ButtonloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
