import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeedetailsForm } from './employeedetailsform';


describe('EmployeedetailsForm', () => {
  let component: EmployeedetailsForm;
  let fixture: ComponentFixture<EmployeedetailsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeedetailsForm],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeedetailsForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call',()=>{
    component.saveData();
    expect(component.saveData).toBeTruthy();
  })
});
