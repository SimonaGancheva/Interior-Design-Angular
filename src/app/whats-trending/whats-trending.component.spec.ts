import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsTrendingComponent } from './whats-trending.component';

describe('WhatsTrendingComponent', () => {
  let component: WhatsTrendingComponent;
  let fixture: ComponentFixture<WhatsTrendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatsTrendingComponent]
    });
    fixture = TestBed.createComponent(WhatsTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
