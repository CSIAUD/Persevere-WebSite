import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PWorkComponent } from './p-work.component';

describe('PWorkComponent', () => {
  let component: PWorkComponent;
  let fixture: ComponentFixture<PWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
