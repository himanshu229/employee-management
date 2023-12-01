"use client";

import { useHelper } from "@/helper/useHelper";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  const { getLocalizedURL, isHeaderBackButton } = useHelper();

  const route = useRouter();
  const t = useTranslations("Index");
  const handleRoute = (url: string) => {
    route.push(getLocalizedURL(url));
  };
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
          {t.rich("app_title")}
        </Typography>

        <Box style={{ display: "flex", gap: 20 }}>
          {isHeaderBackButton ? (
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              className="cursor-pointer"
              style={{ marginBottom: 0 }}
              onClick={() => handleRoute("/create")}
            >
              {t.rich("app_button_employ")}
            </Typography>
          ) : (
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              className="cursor-pointer"
              style={{ marginBottom: 0 }}
              onClick={() => handleRoute("/")}
            >
              {t.rich("app_button_back")}
            </Typography>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
