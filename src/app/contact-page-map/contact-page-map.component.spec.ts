import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPageMapComponent } from './contact-page-map.component';

describe('ContactPageMapComponent', () => {
  let component: ContactPageMapComponent;
  let fixture: ComponentFixture<ContactPageMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactPageMapComponent]
    });
    fixture = TestBed.createComponent(ContactPageMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
