import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LucnchComponent } from './lucnch.component';

describe('LucnchComponent', () => {
  let component: LucnchComponent;
  let fixture: ComponentFixture<LucnchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LucnchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LucnchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
