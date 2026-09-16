import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Popupcomponent } from './popupcomponent';

describe('Popupcomponent', () => {
  let component: Popupcomponent;
  let fixture: ComponentFixture<Popupcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Popupcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Popupcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
