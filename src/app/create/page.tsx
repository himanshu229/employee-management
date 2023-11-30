"use client";
import Header from "@/components/layout/Header";
import CreateEmployee from "@/pages/createEmployee";
import { Box, Typography } from "@mui/material";

export default function create() {
  return (
    <Box>
      <Header/>
      <CreateEmployee />
    </Box>
  );
}
