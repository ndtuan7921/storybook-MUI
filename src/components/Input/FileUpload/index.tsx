// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import FeatherIcon from "feather-icons-react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import Typography from "../../DataDisplay/Typography";

type FileUploadBaseProps = Pick<
  MuiButtonProps,
  "variant" | "size" | "startIcon"
>;

interface FileUploadProps extends FileUploadBaseProps {
  label: string;
}

function FileUpload({ ...props }: FileUploadProps) {
  const { label, size = "small", variant = "outlined" } = props;

  return (
    <>
      <MuiButton
        style={{
          textTransform: "none",
          color: "#687083",
          border: "1px solid #d1d5dc",
        }}
        variant={variant}
        size={size}
        startIcon={<FeatherIcon size="20" icon={"file-plus"} />}
      >
        <Typography text={label} color={"#687083"} />
      </MuiButton>
    </>
  );
}

export default FileUpload;
