import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Selectmovieseat } from './selectmovieseat';

describe('Selectmovieseat', () => {
  let component: Selectmovieseat;
  let fixture: ComponentFixture<Selectmovieseat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Selectmovieseat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Selectmovieseat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
