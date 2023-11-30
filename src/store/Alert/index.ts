import create from "zustand";

export interface DialogStoreValue {
  isOpen: boolean;
  text: string;
  iconType: "delete" | "success" | "error";
  CancelText?: string;
  ConfirmText?: string;
  handleConfirm?:()=>void;
}

export interface DialogStore {
  isOpen: boolean;
  text: string;
  iconType: string;
  CancelText: string;
  ConfirmText: string;
  openDialog: (value: DialogStoreValue) => void;
  closeDialog: () => void;
  handleConfirm?:()=>void;
}

const useDialogStore = create<DialogStore>((set) => ({
  isOpen: false,
  text: "",
  iconType: "",
  CancelText: "",
  ConfirmText: "",
  openDialog: (value: DialogStoreValue) => set({ ...value }),
  closeDialog: () =>
    set({
      isOpen: false,
      text: "",
      iconType: "",
      CancelText: "",
      ConfirmText: "",
    }),
}));

export default useDialogStore;
