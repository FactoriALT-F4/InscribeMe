import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsadmincardsComponent } from './detailsadmincards.component';

describe('DetailsadmincardsComponent', () => {
  let component: DetailsadmincardsComponent;
  let fixture: ComponentFixture<DetailsadmincardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsadmincardsComponent]
    });
    fixture = TestBed.createComponent(DetailsadmincardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
