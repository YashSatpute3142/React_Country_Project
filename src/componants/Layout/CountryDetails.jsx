import { useEffect, useState, useTransition } from "react";
import { useParams, NavLink } from "react-router-dom"
import { getCounteryIndData } from "../../api/PostApi";
import { Loader } from "../UI/Loader";

export const CountryDetails = () => {
    const params = useParams()

    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState(null);
    
        useEffect(() => {
            startTransition(async() => {
               const res = await getCounteryIndData(params.id);
               setCountry(res.data.data.objects[0]);
               console.log(res.data.data.objects[0]);
               
            })
           
        },[])
    
        if(isPending) return <Loader />
    
    return (
        <section className="card country-details-card container">
  <div className="container-card bg-white-box">
    {country && (
      <div className="country-image grid grid-two-cols">

        {country.flag?.url_svg ? (
          <img
            src={country.flag.url_svg}
            alt={country.names.common}
            className="flag"
          />
        ) : (
          <h1>{country.flag?.emoji || "🏳️"}</h1>
        )}

        <div className="country-content">
          <p className="card-title">
            {country.names.official}
          </p>

          <div className="infoContainer">

            <p>
              <span className="card-description">Native Name: </span>
              {Object.values(country.names.native)
                .map((item) => item.official)
                .join(", ")}
            </p>

            <p>
              <span className="card-description">Population: </span>
              {country.population.toLocaleString()}
            </p>

            <p>
              <span className="card-description">Region: </span>
              {country.region}
            </p>

            <p>
              <span className="card-description">Sub Region: </span>
              {country.subregion}
            </p>

            <p>
              <span className="card-description">Capital: </span>
              {country.capitals?.map((c) => c.name).join(", ") || "N/A"}
            </p>

            <p>
              <span className="card-description">Top Level Domain: </span>
              {country.tlds?.join(", ") || "N/A"}
            </p>

            <p>
              <span className="card-description">Currencies: </span>
              {country.currencies
                ?.map((cur) => cur.name)
                .join(", ") || "N/A"}
            </p>

            <p>
              <span className="card-description">Languages: </span>
              {country.languages
                ?.map((lang) => lang.name)
                .join(", ") || "N/A"}
            </p>

          </div>
        </div>
      </div>
    )}

    <div className="country-card-backBtn">
      <NavLink to="/country" className="backBtn">
        <button>Go Back</button>
      </NavLink>
    </div>
  </div>
</section>

    )
    
}