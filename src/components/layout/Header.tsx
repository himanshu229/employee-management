import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  const pathName = usePathname();
  const route = useRouter()
  return (
    <AppBar position="fixed">
      <Toolbar
        variant="dense"
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          style={{ marginBottom: 0 }}
        >
          Employee Details
        </Typography>

        <Box style={{ display: "flex", gap: 20 }}>
          {pathName === "/" ? (
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              className="cursor-pointer"
              style={{ marginBottom: 0 }}
              onClick={()=>route.push("/create")}
            >
              Add Employee
            </Typography>
          ) : (
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              className="cursor-pointer"
              style={{ marginBottom: 0 }}
              onClick={()=>route.push("/")}
            >
              Back
            </Typography>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
