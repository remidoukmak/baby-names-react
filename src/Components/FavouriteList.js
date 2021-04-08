import React from "react";

export const FavouriteList = () => {
    const namesList = favourite.map(id => { });
    const { name, sex } = data[id]
    return (
        <li key={id} className={sex}>{name}</li>
    )
}
  return (
    <div className="favourites">
                <h4>Click on a name to add it to Favourite list..</h4>
                <ul>{namesList}</ul>
    </div>
  );
};
