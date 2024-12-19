import { useEffect, useState } from "react";
import Job from "../Job/Job";



const FeaturedJobs = () => {

    const [load ,setload]=useState(4);

    const [jobs ,setjobs]=useState([]);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data => setjobs(data))
        
    },[])
    return (
        <div>
            <div className="text-center">
                <h1 className="text-5xl">Featured Jobs :{jobs.length} </h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    jobs.slice(0,load).map((job)=><Job job ={job} key={job.id}></Job>)
                }
            </div>
            <div className={load === jobs.length?'hidden':'text-center'}><button className="btn btn-primary" onClick={()=>setload(jobs.length)}>See All Jobs</button></div>
        </div>
    );
};

export default FeaturedJobs;