import { useEffect, useState, useTransition } from "react"
import { getCounteryData } from "../api/PostApi"
import { Loader } from "../componants/UI/Loader";
import { CounteryCard } from "../componants/Layout/CountryCard";
import { SearchFilter } from "../componants/UI/SearchFilter";

export const Country = () => {

    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);

    const[search, setSearch] = useState();
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        startTransition(async() => {
           const res = await getCounteryData();
           setCountries(res.data.data.objects);
        
        })
       
    },[])

    if(isPending) return <Loader />

    // filter logic

    const searchCountry = (country) => {
        if(search) {
            return country.names.common.toLowerCase().includes(search.toLowerCase())
        } return country;

    }

    const filterRegion = (country) => {
        if(filter === "All"){
            return country
        }return country.region === filter;
    }

    const filterCountries = countries.filter((country) => searchCountry(country) && filterRegion(country))
    

    return (
        <section className="country-section">
          
            <SearchFilter 
            search= {search} 
            setSearch = {setSearch} 
            filter = {filter} 
            setFilter = {setFilter} 
            countries = {countries} 
            setCountries = {setCountries}
            />

            <ul className="grid grid-four-cols">
                {
                    filterCountries.map((curCountry) => {
                        return <CounteryCard country = {curCountry}  key={curCountry.uuid}/>
                    })
                }
            </ul>
        </section>
    );
}