import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {

    const {id}=useParams();
    const jobs = useLoaderData();
    const job = jobs.find(job=>job.id==id)
    console.log(job,id);
    return (
       

        <div>
            <h2>{job.job_description}</h2>
        </div>
    );
};

export default JobDetails;