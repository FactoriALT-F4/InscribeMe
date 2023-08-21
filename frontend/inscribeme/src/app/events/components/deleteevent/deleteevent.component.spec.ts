import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteeventComponent } from './deleteevent.component';

describe('DeleteeventComponent', () => {
  let component: DeleteeventComponent;
  let fixture: ComponentFixture<DeleteeventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteeventComponent]
    });
    fixture = TestBed.createComponent(DeleteeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
