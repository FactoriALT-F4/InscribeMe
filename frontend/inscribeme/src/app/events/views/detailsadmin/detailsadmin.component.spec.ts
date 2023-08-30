import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsadminComponent } from './detailsadmin.component';

describe('DetailsadminComponent', () => {
  let component: DetailsadminComponent;
  let fixture: ComponentFixture<DetailsadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsadminComponent]
    });
    fixture = TestBed.createComponent(DetailsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
