"use client";
import Header from "@/components/layout/Header";
import EmployeeView from "@/pages/View";
import { Box } from "@mui/material";

export default function Employee() {
  return (
    <Box>
      <Header/>
      <EmployeeView />
    </Box>
  );
}
