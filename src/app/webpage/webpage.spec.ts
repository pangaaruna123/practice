import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Webpage } from './webpage';

describe('Webpage', () => {
  let component: Webpage;
  let fixture: ComponentFixture<Webpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Webpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Webpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
