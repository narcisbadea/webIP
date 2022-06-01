import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartPulsPacientComponent } from './line-chart-puls-pacient.component';

describe('LineChartPulsPacientComponent', () => {
  let component: LineChartPulsPacientComponent;
  let fixture: ComponentFixture<LineChartPulsPacientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartPulsPacientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartPulsPacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
