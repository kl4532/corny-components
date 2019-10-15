import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerMenuComponent } from './hamburger-menu.component';

fdescribe('HamburgerMenuComponent', () => {
  let component: HamburgerMenuComponent;
  let fixture: ComponentFixture<HamburgerMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamburgerMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburgerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add/remove visible class', () => {
    const hamburger = ((document.getElementsByClassName('hamburger')[0])as HTMLElement);
    const menu = ((document.getElementsByClassName('menu')[0])as HTMLElement) 

    hamburger.click();
    fixture.detectChanges();

    expect(menu).toHaveClass('visible');

    hamburger.click();
    fixture.detectChanges();

    expect(menu).not.toHaveClass('visible');
    
  })
});
