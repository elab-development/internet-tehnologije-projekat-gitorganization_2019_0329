import "./Home.css";
import Images from "./imagesPacked";
function Home({ home }) {
  return (
    
    
    <div className="full-screen">
 
      <div className=" container">  
      
    <h1>Povezi se sa celilm svetom </h1>
    <h2>Izaberi kurs i nauči jezik koji želiš </h2>
       <img className="container-img"src={Images.krugzahome} />
   </div>
   </div>
   
  );
}

export default Home;
