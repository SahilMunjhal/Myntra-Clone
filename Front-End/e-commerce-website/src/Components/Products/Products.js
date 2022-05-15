import { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Products.css";
import { baseUrl } from "../../UniversalData/universalData";

export const Products = () => {
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState([]);
  // const [brand, seBbrand] = useState([]);
  const [price, setPrice] = useState({
    c1: false,
    c2: false,
    c3: false,
    c4: false,
  });

  const [size, setSize] = useState("");
  const [products, setProducts] = useState([]);
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };
  const handleChangeCategory = (e) => {
    if (category.includes(e.target.value)) {
      const temp = category.filter((elem) => elem != e.target.value);
      setCategory(temp);
    } else {
      setCategory([...category, e.target.value]);
    }
  };
  const handleChangePrice = (e) => {
    const { name } = e.target;
    setPrice({ ...price, [name]: !price[name] });
  };
  console.log({ price });
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };

  console.log(category);

  useEffect(() => {
    datafn();
  }, [filter, country, size, category, price]);

  const datafn = async () => {
    const path = `/products`;
    let query = {};
    if (filter != "") query.filter = filter;
    if (category.length) {
      category.forEach((el, index) => (query[`category${index + 1}`] = el));
    }
    for (let x in price) {
      if (price[x]) query = { ...query, [x]: price[x] };
    }
    let bag = "";
    for (let x in query) {
      bag += `&${x}=${query[x]}`;
    }
    let url = `${baseUrl}${path}${bag == "" ? "" : "?" + bag.substring(1)}`;
    try {
      const response = await axios.get(url);
      // console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log({ message: error.message });
    }
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
              value={filter}
              onChange={handleChangeFilter}
            >
              <FormControlLabel value="Men" control={<Radio />} label="Male" />
              <FormControlLabel
                value="Women"
                control={<Radio />}
                label="Female"
              />
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
              onChange={handleChangeCategory}
              control={<Checkbox />}
              value="T-Shirts"
              label="T-Shirts"
            />
            <FormControlLabel
              onChange={handleChangeCategory}
              control={<Checkbox />}
              value="Shirts"
              label="Shirts"
            />
            <FormControlLabel
              onChange={handleChangeCategory}
              control={<Checkbox />}
              value="Jeans"
              label="Jeans"
            />
            <FormControlLabel
              onChange={handleChangeCategory}
              control={<Checkbox />}
              value="trouser"
              label="Trouser"
            />
          </FormGroup>
        </div>
        <div>
          <h3>Brands</h3>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Puma" />
            <FormControlLabel control={<Checkbox />} label="Addidas" />
          </FormGroup>
        </div>
        <div>
          <h3>Price</h3>
          <FormGroup>
            <FormControlLabel
              name="c1"
              checked={price.c1}
              onChange={handleChangePrice}
              control={<Checkbox />}
              label="1-1000"
              value="1-1000"
            />
            <FormControlLabel
              name="c2"
              checked={price.c2}
              onChange={handleChangePrice}
              control={<Checkbox />}
              label="1000-2000"
              value="1000-2000"
            />
            <FormControlLabel
              name="c3"
              checked={price.c3}
              onChange={handleChangePrice}
              control={<Checkbox />}
              label="2000-4000"
              value="2000-4000"
            />
            <FormControlLabel
              name="c4"
              checked={price.c4}
              onChange={handleChangePrice}
              control={<Checkbox />}
              label="4000-10000"
              value="4000-10000"
            />
          </FormGroup>
        </div>
      </div>

      <div className="products-main-data-page">
        <div className="products-main-filter">
          <div className="products-main-filter-left">
            <div>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Country</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={country}
                  label="Age"
                  onChange={handleChangeCountry}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"India"}>India</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Size</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={size}
                  label="Size"
                  onChange={handleChangeSize}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"L"}>L</MenuItem>
                  <MenuItem value={"M"}>M</MenuItem>
                  <MenuItem value={"XL"}>XL</MenuItem>
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
        <div className="products-main-data">
          {products.map((element) => {
            return (
              <Link to={`./${element._id}`}>
                <div>
                  <div>
                    <img height="220px" width="170px" src={element.url} />
                    <div className="product-element-card-info">
                      <h3>{element.brand}</h3>
                      <p>{element.title}</p>
                      <div className="product-price">
                        <h4>{`Rs. ${element.price}`}</h4>
                        <p>{`Rs. ${element.mrpPrice}`}</p>
                        <span>{`(${element.discount}% OFF)`}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
