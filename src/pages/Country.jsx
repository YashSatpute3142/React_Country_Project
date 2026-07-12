import { useEffect, useState, useTransition } from "react"
import { getCounteryData } from "../api/PostApi"
import { Loader } from "../componants/UI/Loader";
import { CounteryCard } from "../componants/Layout/CountryCard";

export const Country = () => {

    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        startTransition(async() => {
           const res = await getCounteryData();
           setCountries(res.data.data.objects);
        
        })
       
    },[])

    if(isPending) return <Loader />

    return (
        <section className="country-section">
            <ul className="grid grid-four-cols">
                {
                    countries.map((curCountry) => {
                        return <CounteryCard country = {curCountry}  key={curCountry.uuid}/>
                    })
                }
            </ul>
        </section>
    );
}