import * as React from "react";
import { Tabs as MuiTabs } from "@mui/material";

import Box from "@mui/material/Box";
import Tab from "../Tab";
import { useState } from "react";
import { tabOption, tabOptions as Options } from "./option";

interface TabsProps {
  tabOptions: tabOption[];
}

export default function Tabs(props: TabsProps) {
  const { tabOptions = Options } = props;
  const [value, setValue] = useState("0");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <MuiTabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            background: "#ca3631",
            borderBottomLeftRadius: `${value === "0" ? "1rem" : "0"}`,
            borderBottomRightRadius: `${value === "4" ? "1rem" : "0"}`,
            height: "3px",
          },
        }}
      >
        {tabOptions.map((option, index) => {
          return (
            <Tab
              value={index.toString()}
              key={option.id}
              icon={option.icon}
              isActive={index.toString() === value}
              text={option.label}
            />
          );
        })}
      </MuiTabs>
    </Box>
  );
}
