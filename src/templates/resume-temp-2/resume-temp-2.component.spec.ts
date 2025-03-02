import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemp2Component } from './resume-temp-2.component';

describe('ResumeTemp2Component', () => {
  let component: ResumeTemp2Component;
  let fixture: ComponentFixture<ResumeTemp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeTemp2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeTemp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
