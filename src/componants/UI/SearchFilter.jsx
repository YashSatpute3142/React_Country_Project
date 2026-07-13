
export const SearchFilter = ({search, setSearch ,filter, setFilter,countries,setCountries}) => {

    const handleInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);

    }

    const handleSelectChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value);
    }

    const sortCountries = (value) => {
        const sortCountry = [...countries].sort((a,b) => {  // handling duplicate data not original
              return value === "asc"
              ? a.names.common.localeCompare(b.names.common)
              : b.names.common.localeCompare(a.names.common)
        }) 
        setCountries(sortCountry); 
    }

    return(
        <section className="section-searchFilter container">
            <div>
            <input 
            type="text" 
            placeholder="Search" 
            value={search}
            onChange={handleInputChange}
            />
            </div>

            <div>
                <button onClick={() => sortCountries("asc")}>Asc</button>   
            </div>
            <div>
                 <button onClick={() => sortCountries("des")}>Des</button>
            </div>
            
            <div>
            <select 
            className="select-section" 
            value={filter} 
            onChange={handleSelectChange}
            >
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            </div>
            


        </section>
    )

}