import useDialogStore from '@/store/Alert';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
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
    const fetchEmploye = async () => {
        try {
            const response = await axios.get("https://dummy.restapiexample.com/api/v1/employees")
            setEmployeeData(response.data.data)
        }
        catch (e) {
            console.log(e)
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
        catch (e) {
            console.log(e)
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
        employeeDelete: employeeDelete
    }
}

export default useContaint