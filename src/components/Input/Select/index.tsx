import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Button } from "@mui/material";
import Typography from "../../DataDisplay/Typography";
import CircleIcon from "@mui/icons-material/Circle";

interface SelectProps {
  options: any[];
}

export default function Select({ ...props }: SelectProps) {
  const { options } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    _event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="lock-button"
        aria-haspopup="listbox"
        aria-controls="lock-menu"
        aria-expanded={open ? "true" : undefined}
        style={{
          textTransform: "none",
          borderRadius: "99px",
          backgroundColor: `${options[selectedIndex].backgroundColor}`,
        }}
        onClick={handleClickListItem}
      >
        <CircleIcon
          style={{
            fontSize: "8px",
            marginRight: "0.5rem",
            color: `${options[selectedIndex].textColor}`,
          }}
        />
        <Typography
          color={options[selectedIndex].textColor}
          variant="subtitle2"
          text={options[selectedIndex].label}
        />
      </Button>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option.id}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
