import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartUmiditatePacientComponent } from './line-chart-umiditate-pacient.component';

describe('LineChartUmiditatePacientComponent', () => {
  let component: LineChartUmiditatePacientComponent;
  let fixture: ComponentFixture<LineChartUmiditatePacientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartUmiditatePacientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartUmiditatePacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
