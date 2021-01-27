import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalPickerComponent } from './portal-picker.component';

describe('PortalPickerComponent', () => {
  let component: PortalPickerComponent;
  let fixture: ComponentFixture<PortalPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
