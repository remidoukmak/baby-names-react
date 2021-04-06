import React from "react";
import "./App.css";
import NamesList from "./Components/NamesList";
import data from "./babyNamesData.json";

function App() {
  return (
    <div className="App">
      <div>
        <NamesList data={data} />
      </div>
    </div>
  );
}

// const Names = (props) => {
//   const [asc, setAsc] = useState(true);
//   const sortedNames = props.names.sort((a, b) => {
//     return asc ? (a.name < b.name ? -1 : 1) : a.name < b.name ? 1 : -1);
//   });
//   return <>
//     <button onClick={() => { setAsc((asc) => !asc) }} >toggle order</button>
//     }]
// };

/* sortedNames.filter(name => name.id !== 0) */
export default App;
