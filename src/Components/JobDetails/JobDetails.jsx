import { useLoaderData, useParams } from "react-router-dom";
import { getstoredData, setStoreData } from "../../Utility/getstoredData";


const JobDetails = () => {

    const {id}=useParams();
    const jobs = useLoaderData();
    const job = jobs.find(job=>job.id==id)

    return (
       

        <div>
            <h2 className="text-center font-extrabold text-3xl">Job Details</h2>
            <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-3 border font-extrabold">
                    <p className="font-extrabold">Job Description:{job.job_description}</p>
                    <p>Job Responsibility: {job.job_responsibility}</p>
                    <p>Educational Requirements: {job.educational_requirements}</p>
                    <p>Experiences: {job.experiences}</p>
                </div>
                <div className="border text-center">
                    <button onClick={()=>setStoreData(job.id)} className="btn btn-primary w-full">Apply now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;