import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";

type TypographyBaseProps = Pick<MuiTypographyProps, "variant" | "color">;

interface TypographyProps extends TypographyBaseProps {
  text: string;
}

function Typography(props: TypographyProps) {
  const { text = "default text", variant, color = "#000000" } = props;

  return (
    <>
      <MuiTypography color={color} variant={variant}>
        {text}
      </MuiTypography>
    </>
  );
}

export default Typography;
