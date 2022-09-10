import "./App.css";

import { Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";

import ReciepList from "./Components/ReciepApi/ReciepList";
import RecipeDetails from "./Components/ReciepApi/RecipeDetails";
import ListMovie from "./Components/movieApi/ListMovie";
import DescpWsh from "./Components/DescpWsh";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<DescpWsh />} />
        <Route path="/recieps" element={<ReciepList />} />
        <Route path="/movies" element={<ListMovie />} />
        <Route path="/recieps/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
