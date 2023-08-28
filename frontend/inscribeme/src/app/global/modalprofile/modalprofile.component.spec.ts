import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalprofileComponent } from './modalprofile.component';

describe('ModalprofileComponent', () => {
  let component: ModalprofileComponent;
  let fixture: ComponentFixture<ModalprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalprofileComponent]
    });
    fixture = TestBed.createComponent(ModalprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
