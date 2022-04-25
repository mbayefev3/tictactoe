import ListJobs from "./components/search/ListJobs";
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import React ,{useState} from "react";




function App() {

  const [titrePost , setTitrePost ] =useState('')
  const [ville , setVille ] =useState('')

  return (


    <div>

      <Home ville={ville} setVille={setVille}   titrePost={titrePost} setTitrePost={setTitrePost}  />
      <ListJobs />

    </div>
  );
}

export default App;
