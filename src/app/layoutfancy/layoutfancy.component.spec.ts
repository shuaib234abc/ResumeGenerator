import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutfancyComponent } from './layoutfancy.component';

describe('LayoutfancyComponent', () => {
  let component: LayoutfancyComponent;
  let fixture: ComponentFixture<LayoutfancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutfancyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutfancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
