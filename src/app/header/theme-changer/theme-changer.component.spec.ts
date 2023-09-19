import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeChangerComponent } from './theme-changer.component';

describe('ThemeChangerComponent', () => {
  let component: ThemeChangerComponent;
  let fixture: ComponentFixture<ThemeChangerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeChangerComponent]
    });
    fixture = TestBed.createComponent(ThemeChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
