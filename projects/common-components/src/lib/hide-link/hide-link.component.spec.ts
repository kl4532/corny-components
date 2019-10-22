import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HideLinkComponent } from './hide-link.component';

describe('HideLinkComponent', () => {
  let component: HideLinkComponent;
  let fixture: ComponentFixture<HideLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HideLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HideLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
