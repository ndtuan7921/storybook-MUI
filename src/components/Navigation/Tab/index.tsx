// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import FeatherIcon from "feather-icons-react";
import { Tab as MuiTab, TabProps as MuiTapProps } from "@mui/material";
import Typography from "../../DataDisplay/Typography";

type TabBaseProps = Pick<MuiTapProps, "label" | "icon">;

export interface TabProps extends TabBaseProps {
  id?: string;
  value?: string;
  isActive?: boolean;
  text: string;
}

function Tab(props: TabProps) {
  const { text, icon, isActive = false, ...rest } = props;

  return (
    <>
      <MuiTab
        label={
          <Typography
            text={text}
            color={`${isActive ? "#ca3631" : "#687083"}`}
          />
        }
        icon={
          <FeatherIcon
            size="22"
            icon={icon}
            color={`${isActive ? "#ca3631" : "#687083"}`}
          />
        }
        sx={{
          textTransform: "none",
          color: `${isActive ? "#ca3631 !important" : "#687083"}`,
          flexDirection: "row",
          columnGap: "10px",
          padding: "10px",
          minHeight: "50px",
          "& .MuiTab-iconWrapper": { marginBottom: "0" },
        }}
        {...rest}
      />
    </>
  );
}

export default Tab;
