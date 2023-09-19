import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryNotFoundComponent } from './country-not-found.component';

describe('CountryNotFoundComponent', () => {
  let component: CountryNotFoundComponent;
  let fixture: ComponentFixture<CountryNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryNotFoundComponent]
    });
    fixture = TestBed.createComponent(CountryNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
