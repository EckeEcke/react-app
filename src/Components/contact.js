import chris from "./Images/chris2.png";

const Contactpage = () => {

    return(
        <div style={{backgroundColor:"#00BCD4", width:"600px", fontSize:"1.5em", color:"white", padding: "30px", margin: "20px auto"}}>
            
            <h2 style={{textAlign:"center"}}>Contact</h2>
            <img style={{width: "180px", float: "left", margin: "0 30px"}} src={chris} alt="contact illustration"></img>
            <p>
                Christian Eckardt <br></br>
                Zesenstraße 9 <br></br>
                22301 Hamburg <br></br>
                <br></br>
                Email: eckardt.christian@web.de <br></br>
                Phone: 0178 5325488
                
            </p>
        </div>
    )

}

export default Contactpage;