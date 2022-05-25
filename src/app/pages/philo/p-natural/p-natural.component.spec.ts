import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PNaturalComponent } from './p-natural.component';

describe('PNaturalComponent', () => {
  let component: PNaturalComponent;
  let fixture: ComponentFixture<PNaturalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PNaturalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PNaturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
