import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeadmincardsComponent } from './homeadmincards.component';

describe('HomeadmincardsComponent', () => {
  let component: HomeadmincardsComponent;
  let fixture: ComponentFixture<HomeadmincardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeadmincardsComponent]
    });
    fixture = TestBed.createComponent(HomeadmincardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
