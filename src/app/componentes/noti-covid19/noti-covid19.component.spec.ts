import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiCovid19Component } from './noti-covid19.component';

describe('NotiCovid19Component', () => {
  let component: NotiCovid19Component;
  let fixture: ComponentFixture<NotiCovid19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotiCovid19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotiCovid19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
