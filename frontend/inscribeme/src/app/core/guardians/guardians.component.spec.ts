import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardiansComponent } from './guardians.component';

describe('GuardiansComponent', () => {
  let component: GuardiansComponent;
  let fixture: ComponentFixture<GuardiansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardiansComponent]
    });
    fixture = TestBed.createComponent(GuardiansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
