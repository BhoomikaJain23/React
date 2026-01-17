import {useEffect,useState} from "react"

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/898b0daff452a8b1bb20e7b4/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=>setData(res.conversion_rates))
        console.log(data);
        
    },[currency])
    console.log(data);
    return data
    
}

export default useCurrencyInfo;