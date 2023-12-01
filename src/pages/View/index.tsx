import { useHelper } from "@/helper/useHelper";
import { BorderColor, DeleteOutlineOutlined } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import useContaint from "./useContaint";

const EmployeeView = () => {
  const router = useRouter();
  const { getLocalizedURL } = useHelper();
  const { employeeData, employeeDelete, isLoading } = useContaint();
  return (
    <Container maxWidth="sm">
      <div className="mt-[100px]">
        {isLoading ? (
          <div className="flex justify-center items-center h-[80vh]">
            <CircularProgress />
          </div>
        ) : (
          employeeData?.map((ele, i) => {
            return (
              <Card sx={{ margin: 1 }} key={i}>
                <CardContent style={{ paddingBottom: 16 }}>
                  <div className="grid grid-cols-12 gap-4 items-start">
                    <div className="col-span-2 h-full">
                      <Avatar
                        style={{ height: 50, width: 50, objectFit: "cover" }}
                        alt="Remy Sharp"
                        src={ele.profile_image ?? ""}
                      >
                        {ele.employee_name.charAt(1).toUpperCase()}
                      </Avatar>
                    </div>
                    <div className="col-span-8">
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        style={{ lineHeight: "normal" }}
                      >
                        {ele.employee_name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Age: {ele.employee_age}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Salary: RS {ele.employee_salary}
                      </Typography>
                    </div>
                    <div className="col-span-2 flex gap-[20px]">
                      <BorderColor
                        onClick={() =>
                          router.push(getLocalizedURL("/edit/" + ele.id))
                        }
                        style={{ cursor: "pointer", color: "green" }}
                      />
                      <DeleteOutlineOutlined
                        style={{ cursor: "pointer", color: "red" }}
                        onClick={() => employeeDelete(ele)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>
    </Container>
  );
};

export default EmployeeView;
