import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavTwoComponent } from './side-nav-two.component';

describe('SideNavTwoComponent', () => {
  let component: SideNavTwoComponent;
  let fixture: ComponentFixture<SideNavTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
