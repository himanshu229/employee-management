"use client";
import Header from "@/components/layout/Header";
import CreateEmployee from "@/pages/createEmployee";
import { Box } from "@mui/material";

export default function edit() {
  return (
    <Box>
      <Header/>
      <CreateEmployee />
    </Box>
  );
}
