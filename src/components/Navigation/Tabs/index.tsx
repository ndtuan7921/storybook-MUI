import * as React from "react";
import { Tabs as MuiTabs } from "@mui/material";

import Box from "@mui/material/Box";
import Tab, { TabProps } from "../Tab";
import { useState } from "react";

interface TabsProps {
  tabOptions: any[];
}

export default function Tabs(props: TabsProps) {
  const { tabOptions } = props;
  // console.log(tabOptions);
  const [value, setValue] = useState("0");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <MuiTabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ style: { background: "#ca3631" } }}
      >
        {tabOptions.map((option, index) => {
          return (
            <Tab
              value={index.toString()}
              label={option.label}
              key={option.id}
              icon={option.icon}
            />
          );
        })}
      </MuiTabs>
    </Box>
  );
}
