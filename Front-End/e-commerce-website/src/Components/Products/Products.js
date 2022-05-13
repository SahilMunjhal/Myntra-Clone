import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

import "./Products.css";

export const Products = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [value, setValue] = useState("female");

  const handleChangeradio = (event) => {
    setValue(event.target.value);
  };

  return (
    <div id="products-main">
      <div className="products-main-sidebar">
        <h3>Filters</h3>
        <div className="products-main-sidebar-filterByType">
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChangeradio}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="boys" control={<Radio />} label="Boys" />
              <FormControlLabel
                value="girls"
                control={<Radio />}
                label="Girls"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
         <h3>Category</h3>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="T-Shirts"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Shirts"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Jeans"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Trouser"
            />
          </FormGroup>
        </div>
        <div>
         <h3>Brands</h3>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Puma"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Addidas"
            />
          </FormGroup>
        </div>
        <div>
         <h3>Price</h3>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="1-1000"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="1000-2000"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="2000-4000"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="4000-10000"
            />
          </FormGroup>
        </div>
      </div>
      <div className="products-main-filter">
        <div className="products-main-filter-left">
         <div>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Age</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          </div>
          <div>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Age</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          </div>
          <div>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Age</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          </div>
        </div>
        <div className="product-main-flter-right">
        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Age</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};
