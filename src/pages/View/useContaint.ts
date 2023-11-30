import useDialogStore from '@/store/Alert';
import axios from 'axios';
import { useEffect, useState } from 'react';
type EmployeeType = {
    id: number;
    employee_name: string;
    employee_salary: number;
    employee_age: number;
    profile_image: string;
};
const useContaint = () => {
    const [employeeData, setEmployeeData] = useState<EmployeeType[]>()
    const { openDialog } = useDialogStore();
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const fetchEmploye = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get("https://dummy.restapiexample.com/api/v1/employees")
            setEmployeeData(response.data.data)
            setIsLoading(false)
        }
        catch (e: any) {
            setIsLoading(false)
            openDialog({
                isOpen: true,
                text: e.response.data.message,
                iconType: "error",
                CancelText: "Ok",
            });
        }
    }

    useEffect(() => {
        fetchEmploye()
    }, [])

    const confirmDelete = async (id: number) => {
        try {
            await axios.delete(`https://dummy.restapiexample.com/api/v1/delete/${id}`)
            fetchEmploye()
        }
        catch (e: any) {
            openDialog({
                isOpen: true,
                text: e.response.data.message,
                iconType: "error",
                CancelText: "Ok",
            });
        }
    }

    const employeeDelete = (details: EmployeeType) => {
        openDialog({
            isOpen: true,
            text: `Are you sure You want to delete ${details.employee_name}`,
            iconType: "delete",
            CancelText: "Cancel",
            ConfirmText: "Confirm",
            handleConfirm: () => {
                confirmDelete(details.id);
            },
        });
    }

    return {
        employeeData: employeeData,
        employeeDelete: employeeDelete,
        isLoading: isLoading
    }
}

export default useContaint