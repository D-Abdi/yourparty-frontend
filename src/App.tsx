import { useEffect, useState } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Club } from "./models/Club.model";
import NavBar from "./components/NavBar/NavBar";
import ClubBlock from "./components/ClubBlock/ClubBlock";

function App() {
  const [clubs, setClubs] = useState({}) as any;

  useEffect(() => {
    if (!clubs || Object.keys(clubs).length === 0) {
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/clubs",
        responseType: "json",
      }).then((response) => {        
        setClubs(response.data);
      });
    }
  }, []);

  return (
    <div className="container mx-auto px-5">
      <NavBar />
      {clubs && Object.keys(clubs).length > 0 ? (
        clubs.map((club, index) => (
          <ClubBlock club={club} key={index} />
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
