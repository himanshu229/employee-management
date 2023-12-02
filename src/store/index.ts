import { create } from 'zustand'
import useEmployeeStore, { EmployeeStore } from './Employee';
import useDialogStore, { DialogStore } from './Alert';

export interface CombinedStore extends EmployeeStore, DialogStore { }

const useCombinedStore = create<CombinedStore>((set) => {
    const employeeStore = useEmployeeStore(set);
    const dialogStore = useDialogStore(set);

    return {
        ...employeeStore as unknown as EmployeeStore,
        ...dialogStore as unknown as DialogStore,
    };
});

export default useCombinedStore;
