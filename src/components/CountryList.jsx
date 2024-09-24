import React from "react";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (cities.length === 0) return <Message message="No countries found" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.city).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji}];
    } else {
      return arr;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country,id) => (
        <CountryItem key={id} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
