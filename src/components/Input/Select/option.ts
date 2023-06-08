export interface selectOption {
  id: string;
  label: string;
  backgroundColor: string;
  textColor: string;
}

export const selectOptions = [
  {
    id: "unpublished",
    label: "Chưa phát hành",
    backgroundColor: "#f2f4f7",
    textColor: "#364052",
  },
  {
    id: "published",
    label: "Đã phát hành",
    backgroundColor: "#f1f8fe",
    textColor: "#2d5bcc",
  },
  {
    id: "expired",
    label: "Hết hạn",
    backgroundColor: "#FDF6EE",
    textColor: "#A84E20",
  },
];
