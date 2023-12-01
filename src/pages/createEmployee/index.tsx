import useEmployeeStore from "@/store/Employee";
import { Box, Button, Container, TextField } from "@mui/material";
import { ChangeEvent, FunctionComponent, useMemo } from "react";
import useContaint from "./useContaint";
import { useTranslations } from "next-intl";

const CreateEmployee: FunctionComponent = () => {
  const { handleSubmit, isButtonDisable, isEdit } = useContaint();
  const { employees, errorEmployees, setEmployees, setErrorEmployees } =
    useEmployeeStore();
  const t = useTranslations("Index");
  const handleNumber = (value: string, key: string) => {
    setEmployees({
      ...employees,
      [key]: !!value ? parseInt(value) : "",
    });
  };

  const handleError = (value: string, key: string, error: string) => {
    if (!value) {
      setErrorEmployees({
        ...errorEmployees,
        [key]: error,
      });
    } else {
      setErrorEmployees({
        ...errorEmployees,
        [key]: "",
      });
    }
  };

  return (
    <Container maxWidth="sm" className="mt-[100px]">
      <Box className="max-w-[60%] flex flex-col gap-[10px] mx-auto">
        <TextField
          fullWidth
          value={employees.employee_name}
          label={t.rich("app_field_name")}
          id="fullWidth"
          error={!!errorEmployees.employee_name}
          helperText={errorEmployees.employee_name}
          onBlur={(e) =>
            handleError(
              e.target.value,
              "employee_name",
              `${t.rich("app_field_name_error")}`
            )
          }
          onChange={(e) => {
            handleError(e.target.value, "employee_name", "");
            setEmployees({
              ...employees,
              employee_name: e.target.value,
            });
          }}
        />
        <TextField
          fullWidth
          label={t.rich("app_field_age")}
          id="fullWidth"
          type="number"
          error={!!errorEmployees.employee_age}
          helperText={errorEmployees.employee_age}
          value={employees.employee_age}
          onBlur={(e) =>
            handleError(
              e.target.value,
              "employee_age",
              `${t.rich("app_field_age_error")}`
            )
          }
          onChange={(e) => {
            handleError(e.target.value, "employee_age", "");
            handleNumber(e.target.value, "employee_age");
          }}
        />
        <TextField
          fullWidth
          label={t.rich("app_field_salary")}
          id="fullWidth"
          type="number"
          error={!!errorEmployees.employee_salary}
          helperText={errorEmployees.employee_salary}
          value={employees.employee_salary}
          onBlur={(e) =>
            handleError(
              e.target.value,
              "employee_salary",
              `${t.rich("app_field_salary_error")}`
            )
          }
          onChange={(e) => {
            handleError(e.target.value, "employee_salary", "");
            handleNumber(e.target.value, "employee_salary");
          }}
        />

        <TextField
          type="file"
          fullWidth
          id="fullWidth"
          style={{ height: "unset" }}
          error={!!errorEmployees.imageError}
          helperText={errorEmployees.imageError}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
            if (e.target?.files) {
              if (allowedTypes.includes(e.target?.files[0].type)) {
                setErrorEmployees({
                  ...errorEmployees,
                  imageError: "",
                });
                setEmployees({
                  ...employees,
                  profile_image: e.target?.files[0],
                });
              } else {
                setErrorEmployees({
                  ...errorEmployees,
                  imageError: `${t.rich("app_field_image_error")}`,
                });
              }
            }
          }}
        />
        <Button
          disabled={isButtonDisable}
          variant="outlined"
          onClick={() => handleSubmit()}
        >
          {isEdit ? t.rich("app_button_update") : t.rich("app_button_save")}
        </Button>
      </Box>
    </Container>
  );
};

export default CreateEmployee;
