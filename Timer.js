import React,{useRef,useState,useEffect} from 'react'
import './Timer.css'

function Timer() {
       const[d,setD]=useState('00')
       const[h,setH]=useState('00')
       const[m,setM]=useState('00')
       const[s,setS]=useState('00')

                let interval=useRef()

       const startTimer = ()=>{
           const countDownDate = new Date('October 10, 2020 00:00:00').getTime()
                interval = setInterval(()=>{
               const now = new Date().getTime()
               const distance = countDownDate-now

               const days=  Math.floor(distance / (1000 * 60 * 60 * 24))
               const hours= Math.floor((distance % (1000 * 60 * 60*24)/(1000*60*60)))
               const minutes=  Math.floor((distance % (1000*60*60)) /(1000*60))
               const seconds= Math.floor((distance % (1000*60)) / 1000)
               if(distance < 0){
                   //set timer
                   clearInterval(interval.current)
               }else{
                   //updateTimer
                   setD(days)
                   setH(hours)
                   setM(minutes)
                   setS(seconds)
               }
           },1000)
       } 
       useEffect(()=>{
           const intervalTime = (interval.current)
           startTimer()
           return()=>{
               clearInterval(intervalTime)
           }
       })
    return (
        <div>
        <h2>Count Down Timer</h2>
           <div>
                <div className="flex">
                    <span className="timeTable">{h}</span>
                    <small  className="timeTable">Hours</small>
                </div>
                <div className="flex">
                    <span className="timeTable">{d}</span>
                    <small  className="timeTable">Days</small>
                </div>
                <div className="flex">
                    <span className="timeTable">{m}</span>
                    <small  className="timeTable">Minutes</small>
                </div>
                <div className="flex">
                    <span className="timeTable">{s}</span>
                    <small  className="timeTable">Seconds</small>
               </div>
                
               </div>
        </div>
    )
}
export default Timer
