import { useEffect } from "react"

export const useDate=()=>{
    const [date, setDate] = useState(new Date())
    const locale="en";
    useEffect(()=>{
       const timeout= setInterval(()=>{
            setDate(new Date() )
        },60*1000)
        return ()=>{
            clearInterval(timeout)
        }
        
    },[])
    const day= date.toLocaleDateString(locale,{weekday:'long'})
    const currDate=`${day},${date.getDate()},${ date.toLocaleDateString(locale,{month:'long'})}\n\n`;
    const time = date.toLocaleDateString(locale,{hour:'numeric',hour12:true ,minute:"numeric"})
    return {
        currDate,time
    }
}