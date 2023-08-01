import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreWorkComponent } from './explore-work.component';

describe('ExploreWorkComponent', () => {
  let component: ExploreWorkComponent;
  let fixture: ComponentFixture<ExploreWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreWorkComponent]
    });
    fixture = TestBed.createComponent(ExploreWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
