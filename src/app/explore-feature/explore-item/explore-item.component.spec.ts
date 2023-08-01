import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreItemComponent } from './explore-item.component';

describe('ExploreItemComponent', () => {
  let component: ExploreItemComponent;
  let fixture: ComponentFixture<ExploreItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreItemComponent]
    });
    fixture = TestBed.createComponent(ExploreItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
