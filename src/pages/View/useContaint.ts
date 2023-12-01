import useDialogStore from "@/store/Alert";
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

type EmployeeType = {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
};

const useContaint = () => {
  const [employeeData, setEmployeeData] = useState<EmployeeType[]>();
  const { openDialog, closeDialog } = useDialogStore();
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const t = useTranslations("Index");
  const fetchEmploye = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://dummy.restapiexample.com/api/v1/employees"
      );
      setEmployeeData(response.data.data);
      setIsLoading(false);
    } catch (e: any) {
      setIsLoading(false);
      openDialog({
        isOpen: true,
        text: `${t.rich("app_error_1")}`,
        iconType: "error",
        CancelText: `${t.rich("app_button_ok")}`,
      });
    }
  };

  useEffect(() => {
    fetchEmploye();
    return () => {
      closeDialog();
    };
  }, []);

  const confirmDelete = async (id: number) => {
    try {
      await axios.delete(
        `https://dummy.restapiexample.com/api/v1/delete/${id}`
      );
      fetchEmploye();
    } catch (e: any) {
      openDialog({
        isOpen: true,
        text: `${t.rich("app_error_2")}`,
        iconType: "error",
        CancelText: `${t.rich("app_button_ok")}`,
      });
    }
  };

  const employeeDelete = (details: EmployeeType) => {
    openDialog({
      isOpen: true,
      text: `${t.rich("app_message_delete")}`,
      iconType: "delete",
      CancelText: `${t.rich("app_button_cancel")}`,
      ConfirmText: `${t.rich("app_button_confirm")}`,
      handleConfirm: () => {
        confirmDelete(details.id);
      },
    });
  };

  return {
    employeeData: employeeData,
    employeeDelete: employeeDelete,
    isLoading: isLoading,
  };
};

export default useContaint;
