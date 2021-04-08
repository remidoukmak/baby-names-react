import React from "react";

function NamesList(props) {
  const { data, filterText, addFavourite } = this.props;

  const namesList = data
    .filter((name) => {
      return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
    })
    .map((name) => {
      return (
        <li
          key={name.id}
          className={name.sex}
          onClick={() => addFavourite(name, id)}
        >
          {name.name}
        </li>
      );
    });

  return <ul>{namesList}</ul>;
}

export default NamesList;

//  <li onClick={this.onItemClick} data-id="1" className={this.state.selectedItem == 1 ? "on" : "off"}>Component 1</li>
//                 <li onClick={this.onItemClick} data-id="2" className={this.state.selectedItem == 2 ? "on" : "off"}>Component 2</li>
//                 <li onClick={this.onItemClick} data-id="3" className={this.state.selectedItem == 3 ? "on" : "off"}>Component 3</li>
