import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePacientComponent } from './update-pacient.component';

describe('UpdatePacientComponent', () => {
  let component: UpdatePacientComponent;
  let fixture: ComponentFixture<UpdatePacientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePacientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
