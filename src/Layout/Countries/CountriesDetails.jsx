/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
const CountriesDetails = () => {
  const [country, setCountry] = useState({})
  const {id}  = useParams()
  const Places = useLoaderData()

  useEffect(() => {
    const findCountry = Places?.find((place) => place.id == id);
      setCountry(findCountry);
    }, [id, Places]);
    return (
        <div>
      <h1>
        Coming Soon!
      </h1>
    </div>
    );
};
export default CountriesDetails;