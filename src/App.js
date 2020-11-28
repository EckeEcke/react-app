import './App.css';
import Navigation from "./Navigation";
import BlogEntry from "./Blogentry";


function App() {
  return (
    <div className="App">
    
      <Navigation />
      <br></br>
      <br></br>
      <div style={{display: "flex", flexDirection: "row", flexWrap:"wrap", maxWidth:"60vw"}}>
      <BlogEntry blog={{image:"https://1thingtodo.de/wp-content/uploads/2016/02/barcelona-reisebericht-1-thing-to-do.jpg", 
                        title:"My Trip to Barcelona", portrait: "https://i.pinimg.com/564x/ce/2a/95/ce2a95e99faceaf7af19c273b10ebcc1.jpg", date:"10-10-2020", author:"Chris", postdate:"11-11-2020"}}/>
      <BlogEntry blog={{image:"https://savorylens.com/wp-0463a-content/uploads/2018/01/Prag-45.jpg", 
                        title:"My Trip to Prague", portrait: "https://i.pinimg.com/564x/ce/2a/95/ce2a95e99faceaf7af19c273b10ebcc1.jpg", date:"10-10-2020", author:"Chris P Chicken", postdate:"11-11-2020"}}/>
      <BlogEntry blog={{image: "https://www.logistik-watchblog.de/images/2018/03/shutterstock_139999093-1.jpg", 
                        title:"My Trip to London", portrait: "https://www.finetoshine.com/wp-content/uploads/2020/07/Lisa-Simpson-aesthetic-profile-pic.jpg", date:"10-10-2020", author:"Chris P Bacon", postdate:"11-11-2020"}}/>
      </div>
      
    </div>
  );
}

export default App;
