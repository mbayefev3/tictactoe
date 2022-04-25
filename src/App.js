import ListJobs from "./components/search/ListJobs";
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import React, { useState } from "react";
import { JOB_DATA } from './DUMMYDATA'



function App() {

  const [titrePost, setTitrePost] = useState('')
  const [ville, setVille] = useState('')
  const [jobData, setJobData] = useState(JOB_DATA)



  const FilteredFunc = (e) => {

    const filteredData = jobData.filter(job => {

      return job.entreprise.toLowerCase().includes(titrePost.toLowerCase())
    })

    setJobData(
      filteredData
    )
    // console.log(filteredData, jobData)

  }
  // FilteredFunc()
  return (


    <div>

      <Home jobData={jobData} ville={ville} setVille={setVille} titrePost={titrePost} setTitrePost={setTitrePost} FilteredFunc={FilteredFunc} />


    </div>
  );
}

export default App;
