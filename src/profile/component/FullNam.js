import react from "react";



const Profile = ({alrt,bio="fkjqdsufhjsdgfjdgs",profession,children,name} )=>{
   

    return (
        <div>
        <h1>  {name}</h1>
        <h1>  {bio}</h1>
        <h1>  {profession}</h1>
         {children}    {/* lorsque elle doit apparaitre directement dans la fichier sans une balise */}
        {/* {alrt()} puisque fct dit faire () et mettre comme ca comme children pour apparaitre direct sns refresh*/}     
        <br></br>
        <button onClick={alrt}>
            ClickMe
        </button>
        



        </div>
      
    )
   }
   export default Profile;
