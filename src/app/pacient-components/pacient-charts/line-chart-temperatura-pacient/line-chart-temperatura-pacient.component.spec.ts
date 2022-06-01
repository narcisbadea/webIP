import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartTemperaturaPacientComponent } from './line-chart-temperatura-pacient.component';

describe('LineChartTemperaturaPacientComponent', () => {
  let component: LineChartTemperaturaPacientComponent;
  let fixture: ComponentFixture<LineChartTemperaturaPacientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartTemperaturaPacientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartTemperaturaPacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
