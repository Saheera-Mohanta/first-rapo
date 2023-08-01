import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackvalidformComponent } from './trackvalidform.component';

describe('TrackvalidformComponent', () => {
  let component: TrackvalidformComponent;
  let fixture: ComponentFixture<TrackvalidformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackvalidformComponent]
    });
    fixture = TestBed.createComponent(TrackvalidformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
