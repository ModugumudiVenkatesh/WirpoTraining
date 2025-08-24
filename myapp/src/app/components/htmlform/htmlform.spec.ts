import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Htmlform } from './htmlform';

describe('Htmlform', () => {
  let component: Htmlform;
  let fixture: ComponentFixture<Htmlform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Htmlform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Htmlform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
