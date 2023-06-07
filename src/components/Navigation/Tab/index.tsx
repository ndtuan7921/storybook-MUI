// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import FeatherIcon from "feather-icons-react";
import { Tab as MuiTab, TabProps as MuiTapProps } from "@mui/material";

type TabBaseProps = Pick<MuiTapProps, "label">;

export interface TabProps extends TabBaseProps {
  icon?: string;
  id?: string;
  value: string;
}

function Tab(props: TabProps) {
  const { label, value, icon } = props;
  return (
    <>
      <MuiTab
        label={label}
        icon={<FeatherIcon size="22" icon={"clock"} color={"#ca3631"} />}
        style={{
          textTransform: "none",
          color: "#ca3631",
          flexDirection: "row",
          columnGap: "12px",
          padding: "10px",
          minHeight: "50px",
        }}
        {...props}
      />
    </>
  );
}

export default Tab;
