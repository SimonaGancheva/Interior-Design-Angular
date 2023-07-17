import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatTheySayComponent } from './what-they-say.component';

describe('WhatTheySayComponent', () => {
  let component: WhatTheySayComponent;
  let fixture: ComponentFixture<WhatTheySayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatTheySayComponent]
    });
    fixture = TestBed.createComponent(WhatTheySayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
