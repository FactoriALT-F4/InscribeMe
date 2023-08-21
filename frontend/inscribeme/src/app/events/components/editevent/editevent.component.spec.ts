import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeventComponent } from './editevent.component';

describe('EditeventComponent', () => {
  let component: EditeventComponent;
  let fixture: ComponentFixture<EditeventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditeventComponent]
    });
    fixture = TestBed.createComponent(EditeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
