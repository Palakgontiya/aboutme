import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemp1Component } from './resume-temp-1.component';

describe('ResumeTemp1Component', () => {
  let component: ResumeTemp1Component;
  let fixture: ComponentFixture<ResumeTemp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeTemp1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeTemp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
