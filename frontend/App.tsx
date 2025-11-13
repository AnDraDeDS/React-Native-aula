import { NavigationContainer } from "@react-navigation/native"; 
import { StackRoutes } from "./src/routes/StackRoutes";
import React from "react";

export default function App() { 
  return ( 

  <NavigationContainer>
    <StackRoutes/>
  </NavigationContainer>

); }