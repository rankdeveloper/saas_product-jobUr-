document.querySelector(".button-container").addEventListener("click" , () => {
  
  let text=document.getElementById("find-jobs").value;
  
  getJobs().then(jobs =>{
    let filteredJobs=filterJobs(jobs , text);
    showJobs(filteredJobs);
  })
  
})

function getJobs(){
return  fetch("data.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return data;
  })
}

function filterJobs(jobs , searchText){
  if(searchText){
    let filteredJobs=jobs.filter(job =>{
      if(job.roleName.toLowerCase().includes(searchText) || job.type.toLowerCase().includes(searchText) || job.company. toLowerCase().includes(searchText) || job.requirements.content.toLowerCase().includes(searchText)){
        return true;
      }
      
      else{
        return false;
      }
    })
    return filteredJobs;
  }
  
  else{
    return jobs
  }
}


function showJobs(jobs){
  console.log(jobs);
  let jobsContainer=document.querySelector(".job-container");
  
  let jobHTML=" ";
  
  jobs.forEach( job =>{
    jobHTML+=`
   <div class="job-title">
          <div class="top">
            <img src="${job.logo}">
            <span class="material-icons more_horiz">more horiz</span>
    
          </div>
          <div class="rolename">
            <span>${job.roleName}</span>
          </div>
   
  <div class="descriptions">
            <span>${job.requirements. content}</span>
          </div>
   
  <div class="buttons">
            <div class="button apply-now">
              Apply now
            </div>
              <div class="button">
                Message
              </div> 
              
              </div>
              </div>`;
  })
  
//  console.log(jobHTML);
jobsContainer.innerHTML=jobHTML;
}

getJobs().then(data => {
  showJobs(data);
});
