"use client";
import useDialogStore from "@/store/Alert";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import ErrorIcon from '@mui/icons-material/Error';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import { FunctionComponent } from "react";
const CustomAlert: FunctionComponent = () => {
  const {
    closeDialog,
    isOpen,
    handleConfirm,
    text,
    iconType,
    CancelText,
    ConfirmText,
  } = useDialogStore();
  return (
    <Dialog onClose={() => closeDialog()} open={isOpen}>
      <DialogContent className="p-3 pb-0 min-w-[300px] max-w-[400px]">
        <div className="">
          <div
            className={`${
              iconType === "success" ? "bg-[green]" : "bg-[red]"
            } w-[50px] h-[50px] rounded-full flex items-center justify-center p-[10px] mx-auto`}
          >
            {iconType === "success" && (
              <CheckIcon className="text-3xl text-[white]" />
            )}
            {iconType === "error" && (
              <ErrorIcon className="text-3xl text-[ErrorIcon]" />
            )}
            {iconType === "delete" && (
              <DeleteIcon className="text-3xl text-[white]" />
            )}
          </div>
          <div className="mt-3 w-[355px]">
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              className="break-all text-center"
            >
              {text}
            </Typography>
          </div>
        </div>
      </DialogContent>
      <DialogActions
        className={`flex ${
          !!ConfirmText ? "justify-between" : "justify-center"
        } p-3`}
      >
        <Button variant="outlined" onClick={() => closeDialog()}>
          {CancelText}
        </Button>
        {!!ConfirmText && (
          <Button
            variant="outlined"
            onClick={() => {
              handleConfirm && handleConfirm();
              closeDialog();
            }}
            autoFocus
          >
            {ConfirmText}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default CustomAlert;
