import React from "react";

function NamesList(props) {
  const namesList = props.data.map((name) => {
    return (
      <li key={name.id} className={name.sex}>
        {name.name}
      </li>
    );
  });

  return <ul>{namesList}</ul>;
}

export default NamesList;
