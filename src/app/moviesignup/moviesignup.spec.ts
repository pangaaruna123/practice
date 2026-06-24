import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moviesignup } from './moviesignup';

describe('Moviesignup', () => {
  let component: Moviesignup;
  let fixture: ComponentFixture<Moviesignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Moviesignup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Moviesignup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
