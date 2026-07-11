export const CounteryCard = ({country}) => {

const {
  flag,
  names,
  population,
  region,
  capitals,
} = country;

    return <li className="country-card card">
        <div className="container-card bg-white-box" >
            {flag.url_svg ? (
  <img src={flag.url_svg} alt={names.common} />
) : (
  <p>{flag.emoji || "🏳️"}</p>
)}
            <div className="countryInfo">
                <p className="card-title">{names.common}</p>
                <p>
                    <span className="card-description">Population:</span>
                    {population.toLocaleString()}
                </p>
                <p>
                    <span className="card-descritpin">Region</span>
                    {region}
                </p>
                <p>
                    <span className="card-descritpin">Capital</span>
                    {capitals?.[0]?.name || "No Capital"}
                </p>
            

            </div>
        </div>
        
    </li>
}