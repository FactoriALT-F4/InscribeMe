import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaladdeventComponent } from './modaladdevent.component';

describe('ModaladdeventComponent', () => {
  let component: ModaladdeventComponent;
  let fixture: ComponentFixture<ModaladdeventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModaladdeventComponent]
    });
    fixture = TestBed.createComponent(ModaladdeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
