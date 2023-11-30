import create from 'zustand';

export interface Employee {
  employee_name: string;
  employee_salary: string;
  employee_age: string;
  profile_image: File | null;
  imageError?: string; 
}

export interface EmployeeStore {
  employees: Employee;
  errorEmployees: Employee;
  setEmployees: (data: Employee) => void;
  setErrorEmployees: (data: Employee) => void;
}



const useEmployeeStore = create<EmployeeStore>((set) => ({
  employees: {
    employee_name: '',
    employee_salary: '',
    employee_age: '',
    profile_image: null
  },
  errorEmployees: {
    employee_name: '',
    employee_salary: '',
    employee_age: '',
    profile_image: null
  },
  setEmployees: (employee) => set({ employees: employee }),
  setErrorEmployees: (employee) => set({ errorEmployees: employee })
}));

export default useEmployeeStore;