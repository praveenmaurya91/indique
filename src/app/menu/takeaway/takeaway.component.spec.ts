import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeawayComponent } from './takeaway.component';

describe('TakeawayComponent', () => {
  let component: TakeawayComponent;
  let fixture: ComponentFixture<TakeawayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeawayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeawayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
