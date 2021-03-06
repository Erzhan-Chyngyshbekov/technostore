import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { storeContext } from "../../Contexts/StoreContext";
import classes from "./brands.module.css";

export default function Brands() {
  const { brand, fetchBrands } = useContext(storeContext);

  console.log(brand);

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <div className={classes.container}>
      {brand.map((brand) => (
        <div className={classes.container_item}>
          <Link to={`/brand/${brand.id}`}>
            <img src={brand.logo} alt={`${brand.title} logo`} />
          </Link>
        </div>
      ))}
    </div>
  );
}
