import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCavalierComponent } from './p-cavalier.component';

describe('PCavalierComponent', () => {
  let component: PCavalierComponent;
  let fixture: ComponentFixture<PCavalierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCavalierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PCavalierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
