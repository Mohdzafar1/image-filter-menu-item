import React, { useState } from 'react';
import './App.css';
import AllData from "./Components/Pages/AllData"

function App() {
  const[images,setImages]=useState(AllData)
  
   const allItem=()=>{
    const finalData=AllData.filter((value)=>{
      return value;
    })
    setImages(finalData)
}
const onlyPython=(categoryItem)=>{
  const finalData=AllData.filter((value)=>{
    return  value.category ==categoryItem
  })
setImages(finalData)
}

  return (
   <>
     <div className="container">
      <div className="row pt-3">
        <div className="col-lg-3 col text-center">
         <button className='btn btn-outline-dark shadow-none'onClick={allItem}>ALl</button>
        </div>
        <div className="col-lg-3 col text-center">
         <button className='btn btn-outline-primary'onClick={()=>onlyPython("python")}>PYTHON</button>
        </div>
        <div className="col-lg-3 col text-center">
         <button className='btn btn-outline-primary'onClick={()=>onlyPython("office")}>OFFICE</button>
        </div>
        <div className="col-lg-3 col text-center">
         <button className='btn btn-outline-primary'onClick={()=>onlyPython("React")}>REACT.JS</button>
        </div>
      </div>
     </div>
   

    <div className="container">
       <div className="row row-cols-1 row-cols-sm-2 row-md-3">
         {
          images.map((value)=>{
            return(
              <>
              <div className="col-lg-3 pt-3 pb-3">
              <img src={value.image} className="img-fluid"/>
              </div>
            </>
            )
          })
         }
       </div>
    </div>
    </>
  );
}

export default App;
