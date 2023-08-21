import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryComponent } from './dictionary.component';

describe('DictionaryComponent', () => {
  let component: DictionaryComponent;
  let fixture: ComponentFixture<DictionaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DictionaryComponent]
    });
    fixture = TestBed.createComponent(DictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
