import useDialogStore from '@/store/Alert';
import useEmployeeStore from '@/store/Employee';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useMemo } from 'react';

const useContaint = () => {
    const { employees, setEmployees } = useEmployeeStore();
    const { openDialog, closeDialog } = useDialogStore();
    const params = useParams()
    const getemployeeDetails = async (id: number) => {
        try {
            const { data } = await axios.get("https://dummy.restapiexample.com/api/v1/employee/" + id)
            setEmployees({
                employee_name: data.data.employee_name,
                employee_salary: data.data.employee_salary,
                employee_age: data.data.employee_age,
                profile_image: data.data.profile_image
            })
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

    const employeeUpdate = async () => {
        try {
            const formData = new FormData()
            formData.append("employee_name", employees.employee_name)
            formData.append("employee_salary", employees.employee_salary)
            formData.append("employee_age", employees.employee_age)
            formData.append("profile_image", employees.profile_image as any)
            await axios.put(`https://dummy.restapiexample.com/api/v1/update/${parseInt(params?.userid as string)}`, formData)
            openDialog({
                isOpen: true,
                text: "Employee Details Update Succefully",
                iconType: "success",
                CancelText: "Ok",
            });
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

    const employeeCreate = async () => {
        try {
            const formData = new FormData()
            formData.append("employee_name", employees.employee_name)
            formData.append("employee_salary", employees.employee_salary)
            formData.append("employee_age", employees.employee_age)
            formData.append("profile_image", employees.profile_image as any)
            await axios.post("https://dummy.restapiexample.com/api/v1/create", formData)
            openDialog({
                isOpen: true,
                text: "Employee Create Succefully",
                iconType: "success",
                CancelText: "Ok",
            });
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

    const isEdit = useMemo(() => {
        if (params?.userid) {
            getemployeeDetails(parseInt(params?.userid as string))
        }
        return !!params?.userid
    }, [])

    const handleSubmit = () => {
        if (isEdit) {
            employeeUpdate()
        }
        else {
            employeeCreate()
        }
    };

    const isButtonDisable = useMemo(() => {
        return !employees.employee_age || !employees.employee_name || !employees.employee_salary || !employees.profile_image
    }, [employees])

    useEffect(() => {
        return () => {
            setEmployees({
                employee_name: '',
                employee_salary: '',
                employee_age: '',
                profile_image: null
            });
            closeDialog();
        }
    }, [])

    return {
        handleSubmit: handleSubmit,
        isButtonDisable: isButtonDisable,
        isEdit: isEdit
    }
}

export default useContaint