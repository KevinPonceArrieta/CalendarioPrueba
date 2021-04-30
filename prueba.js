(function() {
	var out = {};
     var html_jobs = document.querySelectorAll("");
  	 var jobs = [];
      for(var x in html_jobs){
    	if(typeof html_jobs[x] =="function") continue;
      	if(typeof html_jobs[x] =="number") continue;
    	var job = {};
    	var elem = html_jobs[x];
    	job.title = elem.querySelector("").textContent.trim();

       	job.temp = 1;
    	jobs.push(job);
  	} 
  
	out["jobs"]= jobs;
  	return out;
})();