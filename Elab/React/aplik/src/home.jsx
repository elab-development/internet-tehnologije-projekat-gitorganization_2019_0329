import "./Home.css";
import Images from "./imagesPacked";
function Home({ home }) {
  return (
    
    
    <div className="full-screen">
 
      <div className=" container">  
      <div className="title-containers"> 
    <h1>Poveži se sa celim svetom</h1>
    <h2>Izaberi kurs i nauči jezik koji želiš </h2>
    </div>
       <img className="container-img"src={Images.krugzahome} />
   </div>
   </div>
   
  );
}

export default Home;
