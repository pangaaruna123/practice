import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Movielogin } from './movielogin';

describe('Movielogin', () => {
  let component: Movielogin;
  let fixture: ComponentFixture<Movielogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Movielogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Movielogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
