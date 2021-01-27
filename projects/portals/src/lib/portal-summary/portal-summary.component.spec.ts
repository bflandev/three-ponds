import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalSummaryComponent } from './portal-summary.component';

describe('PortalSummaryComponent', () => {
  let component: PortalSummaryComponent;
  let fixture: ComponentFixture<PortalSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
