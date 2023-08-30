import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscardsComponent } from './detailscards.component';

describe('DetailscardsComponent', () => {
  let component: DetailscardsComponent;
  let fixture: ComponentFixture<DetailscardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailscardsComponent]
    });
    fixture = TestBed.createComponent(DetailscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
