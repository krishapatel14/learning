import React, { useState } from 'react'

export const Country = () => {
    const [country, setcountry] = useState("");
    const [state, setstate] = useState("");
    const [city, setcity] = useState("");
    const[selectedStates,setSelectedStates]=useState([])
    const[selectedCities,setSelectedCities]=useState([])

    var obj = {
        countries: [
            {
                name: "india",
                states: [
                    {
                        name: "Gujarat",
                        cities: ["ahmedabad", "surat", "vadodara"]
                    },
                    {
                        name: "maharastra",
                        cities: ["mumbai", "pune", "lonavala"]
                    },
                    {
                        name: "delhi",
                        cities: ["new delhi", "noida"]
                    }
                ]
            },
            {
                name:"USA",
                states:[
                    {
                        name:'California',
                        cities : ['Los Angeles','San Diego']
                    },
                    {
                        name:'Texas',
                        cities :['Austin']
                    }
                ]
            },
            {
                name:"Canada",
                states:[
                    {
                        name:'Ontario',
                        cities:["toronto","ottawa"]
                    },
                    {
                        name:'alberta',
                        cities:["calgary","edmonton"]
                    }
                ]
            }
        ]
    }
    const countryHandler = (e) => {
        console.log(e.target.value);
        setcountry(e.target.value);
        setSelectedStates(obj.countries.find(ctr=>ctr.name===e.target.value).states);
    }
    const stateHandler = (e) => {
        setstate(e.target.value);
        setSelectedCities(selectedStates.find(state=>state.name===e.target.value).cities);
    }
    const cityHandler = (e) => {
        setcity(e.target.value);
    }
    return (
        <div>
            <div>
                <label htmlFor="Country">Country</label>
                <select value={country} onChange={countryHandler}>
                    {/* <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Canada">CANADA</option> */}
                    <option>country</option>
                    {
                        obj.countries.map(ctr=>(
                            <option value={ctr.name}>{ctr.name}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <label htmlFor="State">States</label>
                <select value={state} onChange={stateHandler}>
                    <option>states</option>
                    {
                        selectedStates.map(state=>(
                            <option value={state.name}>{state.name}</option>
                        ))
                    }
                </select>
            </div>
           <div>
            <label htmlFor="City">Cities</label>
            <select value={city} onChange={cityHandler}>
                <option>cities</option>
                {
                    selectedCities.map(cty=>(
                        <option value={cty}>{cty}</option>
                    ))
                }
            </select>
           </div>
        </div>
    )
}
