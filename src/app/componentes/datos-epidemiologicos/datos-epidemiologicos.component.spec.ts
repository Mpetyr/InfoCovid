import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosEpidemiologicosComponent } from './datos-epidemiologicos.component';

describe('DatosEpidemiologicosComponent', () => {
  let component: DatosEpidemiologicosComponent;
  let fixture: ComponentFixture<DatosEpidemiologicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosEpidemiologicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosEpidemiologicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
