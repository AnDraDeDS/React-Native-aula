import React, { useEffect, useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "",
});

export default function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <p>Usuário: {user?.login}</p>
      <p>Biografia: {user?.bio}</p>
    </div>
  );
}