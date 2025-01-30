import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPracticaComponent } from './consulta-practica.component';

describe('ConsultaPracticaComponent', () => {
  let component: ConsultaPracticaComponent;
  let fixture: ComponentFixture<ConsultaPracticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaPracticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaPracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
