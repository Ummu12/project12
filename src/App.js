import React, {useState} from "react";
import { Card,CardContent,Grid } from "@mui/material";
import { Hyd } from "./Component/Hyd";
import { Bang } from "./Component/Bang";
import { Ooty } from "./Component/Ooty";

function App() {
   const arr=["Charminar","Golconda Fort","Sala JungMuseum",
               " Ramoji Film City", "Birla Mandir","Taj Falaknuma" ]
   const [data, setData]=useState(arr);
   const  ban=["Lalbagh Botanical Garden,","Bannerghatta National Park","Bilikal Rangaswamy Betta",
                "Freedom Park","Lumbini Gardens"]  
    const [city, setCity]=useState(ban) ;  
    
    const name=["Government Rose Garden","Tamilnadu Tourism Ooty Boat House","Government Botanical Garden",
                 "Government Museum"]
    const[pity, setOoty]=useState(name);             
 
  return (
    <Card sx={{bgcolor:"darkgoldenrod"}}>
        <CardContent>
          <h2 style={{textAlign:"center",color:"red",backgroundColor:"white"}}>Hydarabad Tourist Places </h2>
          <Grid container spacing={2}>
            {
              data.map(item=>
                <Hyd item={item}/>)
            }
          </Grid>

        </CardContent>
            <CardContent>
            <h2 style={{textAlign:"center",color:"red",backgroundColor:"white"}}>Banglore Tourist Places </h2>
               <Grid container spacing={2}>
                {
                 city.map(item=>
                  <Bang item={item}/>)
                }
               </Grid>
            </CardContent>
            

            <CardContent>
            <h2 style={{textAlign:"center",color:"red",backgroundColor:"white"}}>OOty Tourist Places </h2>
            <Grid container spacing={2}>
              {
                pity.map(item=>
                  <Ooty  item={item}/>)
              }

            </Grid>

            </CardContent>
            

             



    </Card>
  
  );
}

export default App;
