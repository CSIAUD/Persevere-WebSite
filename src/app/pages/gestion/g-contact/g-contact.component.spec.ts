import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GContactComponent } from './g-contact.component';

describe('GContactComponent', () => {
  let component: GContactComponent;
  let fixture: ComponentFixture<GContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
