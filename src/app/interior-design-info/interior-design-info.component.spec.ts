import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorDesignInfoComponent } from './interior-design-info.component';

describe('InteriorDesignInfoComponent', () => {
  let component: InteriorDesignInfoComponent;
  let fixture: ComponentFixture<InteriorDesignInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InteriorDesignInfoComponent]
    });
    fixture = TestBed.createComponent(InteriorDesignInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
