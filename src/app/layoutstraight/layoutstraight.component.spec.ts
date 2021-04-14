import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutstraightComponent } from './layoutstraight.component';

describe('LayoutstraightComponent', () => {
  let component: LayoutstraightComponent;
  let fixture: ComponentFixture<LayoutstraightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutstraightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutstraightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
