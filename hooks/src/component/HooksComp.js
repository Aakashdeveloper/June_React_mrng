import React,{useState,useEffect} from 'react';
import DisplayNews from './DisplayNews';

const url = "http://localhost:8900/news";

function HookComponent(){
    const [title]=useState('NareshIT');
    const [counter,setcounter] = useState(0) 
    const [count,setcount] = useState(0);
    const [news,setNews] = useState()

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            setNews(data)
        })
    },[title])

    console.log(">>>>>data>>>",news)
    return(
        <div>
            <center>
                <h2>Hooks Component</h2>
                <h3>{title}</h3>
            </center>
            <h3>{counter}</h3>
            <h3>Second  {count}</h3>
            <button onClick={()=> {setcounter(counter+1)}}>
                Counter
            </button>
            <button onClick={()=> {setcount(count+1)}}>
                Counter2
            </button>
            <DisplayNews mydata={news}/>
        </div>
    )
}

export default HookComponent