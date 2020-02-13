import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarTimePickerComponent } from './calendar-time-picker.component';

describe('CalendarTimePickerComponent', () => {
  let component: CalendarTimePickerComponent;
  let fixture: ComponentFixture<CalendarTimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarTimePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
