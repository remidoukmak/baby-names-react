import React from "react";
import "./App.css";
import NamesList from "./Components/NamesList";
import data from "./babyNamesData.json";
import Search from "./Component/Search";
import { useState } from "react";
import FavouriteList from "./FavouriteList";

// const { data } = this.props

function App() {
  constructor(props);{
    super(props);
    this.state = {
      filterText: ''
      favourites: []
    }
  }
  filterUpdate(value){
    this.setState({
      filterText: value
    })
  }
  
  addFavourite(id) {
}

  return (
    <div className="App">
      <div>
        <Search filterText={this.state.filterText}
        filterUpdate={this.filterUpdate.bind(this)}
        />
        <FavouriteList favourites={this.state.favourite}
        data={this.props.data}
        />
        <NamesList
          data={this.props.data}
          filterText={this.state.filterText}
          addFavourite={this.addFavourite.bind(this)}
        />
      </div>
    </div>
  );
}

const Names = (props) => {
  const [asc, setAsc] = useState(true);
  const sortedNames = props.names.sort((a, b) => {
    return asc ? (a.name < b.name ? -1 : 1) : a.name < b.name ? 1 : -1;
  });
  return;
  <button
    onClick={() => {
      setAsc((asc) => !asc);
    }}
  >
    toggle order
  </button>;
};
)}

/* sortedNames.filter(name => name.id !== 0) */
export default App;
