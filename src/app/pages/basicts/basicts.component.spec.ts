import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasictsComponent } from './basicts.component';

describe('BasictsComponent', () => {
  let component: BasictsComponent;
  let fixture: ComponentFixture<BasictsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasictsComponent]
    });
    fixture = TestBed.createComponent(BasictsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
