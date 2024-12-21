const getstoredData=()=>{
   
    const storedData = localStorage.getItem('AppliedJobsId')
   
    
    if(storedData){
             
            
            return JSON.parse(storedData);;
    }
    else{
        return [];
    }
}
// const setStoreData =(id)=>{
    
    // const storedData = getstoredData();
    // const filterData = storedData.filter(job=>job!=id)
  
    // filterData.push(id);
    // localStorage.setItem('storedId',JSON.stringify(filterData));
    // const storedData = getstoredData();
    // const exist = storedData.find(jobid => jobid === id);
    // if (!exist){
    //     storedData.push(id);
    //     localStorage.setItem('AppliedJobsId', JSON.stringify(storedData))
    // }
    const setStoreData = (id) => {
        const storedData = getstoredData() || []; // Fallback to an empty array
        if (!storedData.includes(id)) {
            storedData.push(id);
            localStorage.setItem('AppliedJobsId', JSON.stringify(storedData));
        }
    };
    
   

export{getstoredData,setStoreData}