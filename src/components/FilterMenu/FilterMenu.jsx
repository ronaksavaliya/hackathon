import {
  Checkbox,
  Divider,
  FormControl,
  InputLabel,
  ListItemText,
  ListSubheader,
  MenuItem,
  Select,
} from "@mui/material";
import { useCallback } from "react";

const STATUS_FILTERS_ITEMS = [
  {
    id: "ALL",
    label: "All",
  },
  {
    id: "ACTIVE",
    label: "Active",
  },
  {
    id: "UPCOMING",
    label: "Upcoming",
  },
  {
    id: "PAST",
    label: "Past",
  },
];

const LEVEL_FILTERS_ITEMS = [
  {
    id: "EASY",
    label: "Easy",
  },
  {
    id: "MEDIUM",
    label: "Medium",
  },
  {
    id: "HARD",
    label: "Hard",
  },
];

const FilterMenu = (props) => {
  const { onFilterChange, selectedFilters } = props;

  const MenuProps = {
    PaperProps: {
      style: {
        width: 300,
      },
    },
  };

  const handleFilterChange = (event) => {
    const { value } = event.target;

    onFilterChange(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl>
      <InputLabel htmlFor="grouped-select">Filter</InputLabel>
      <Select
        multiple
        defaultValue=""
        sx={{
          width: "110px",
          height: "45px",
          backgroundColor: "white",
          borderRadius: "12px",
        }}
        id="grouped-select"
        label="Grouping"
        value={selectedFilters}
        onChange={handleFilterChange}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        <ListSubheader>Status</ListSubheader>
        {STATUS_FILTERS_ITEMS.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            <Checkbox checked={selectedFilters.includes(item.id)} />
            <ListItemText primary={item.label} />
          </MenuItem>
        ))}
        <Divider />
        <ListSubheader>Level</ListSubheader>
        {LEVEL_FILTERS_ITEMS.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            <Checkbox checked={selectedFilters.includes(item.id)} />
            <ListItemText primary={item.label} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { FilterMenu };
