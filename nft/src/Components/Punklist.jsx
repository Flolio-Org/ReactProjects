import React from "react";
import CollectionCard from "./CollectionCard";
import { useState, useEffect } from "react";
import Main from "./Main";

function Punklist({ data }) {
  const [selectedPunk, setSelectedPunk] = useState(data[0]);
  function handleClick(e) {
    setSelectedPunk(data[e.target.alt]);
  }

  useEffect(() => {
    if (data) {
      setSelectedPunk(data[0]);
    }
  }, [data]);

  return (
    <div>
      {selectedPunk && <Main selectedPunk={selectedPunk} />}
      <div className="punkList">
        {data.map((asset) => {
          return (
            <div>
              <CollectionCard
                key={asset.token_id}
                id={asset.token_id}
                name={asset.name}
                traits={asset.traits}
                image={asset.image_url}
                handleClick={handleClick}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Punklist;
