import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Webpage } from './webpage';
import { Network } from '../network';

describe('Webpage', () => {
  let component: Webpage;
  let fixture: ComponentFixture<Webpage>;
  let service:Network

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Webpage],
      providers: [Network]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Webpage);
    component = fixture.componentInstance;
    service = TestBed.inject(Network);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call viewAllResources ', () => {
    component.viewAllResources();
    spyOn(service,'getdata');
    expect(service.getdata).toHaveBeenCalledWith('123');
  })
});
