import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonaddeventComponent } from './buttonaddevent.component';

describe('ButtonaddeventComponent', () => {
  let component: ButtonaddeventComponent;
  let fixture: ComponentFixture<ButtonaddeventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonaddeventComponent]
    });
    fixture = TestBed.createComponent(ButtonaddeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
