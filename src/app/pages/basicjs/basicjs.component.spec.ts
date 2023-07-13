import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicjsComponent } from './basicjs.component';

describe('BasicjsComponent', () => {
  let component: BasicjsComponent;
  let fixture: ComponentFixture<BasicjsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicjsComponent]
    });
    fixture = TestBed.createComponent(BasicjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
