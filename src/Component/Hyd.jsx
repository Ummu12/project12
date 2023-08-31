import React,{useState} from "react";
import { Card,CardContent, Grid } from "@mui/material";

export const Hyd=({item})=>{
  return(

    
     <Grid item xs={4}>
    
        <Card>
          
            <CardContent>
    
              {item}
            </CardContent>
        </Card>

     </Grid>

  )

}