import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <Box>
      <Typography>{t("app.heading")}</Typography>
    </Box>
  );
}
