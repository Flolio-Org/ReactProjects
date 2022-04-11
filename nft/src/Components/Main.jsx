import React from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";

function Main({ selectedPunk }) {
  //console.log(selectedPunk.owner.profile_image_url);
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img src={selectedPunk.image_url} className="selectedPunk" alt="" />
          </div>
        </div>
        <div className="punkDetails">
          <div className="title">
            {selectedPunk.name}
            <span className="itemNumber">.#{selectedPunk.token_id}</span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img
                src={selectedPunk.owner.profile_img_url}
                alt=""
                className="ownerImage"
              />
              <div className="ownerName">
                <div>{selectedPunk.asset_contract.address}</div>
                <div>@{selectedPunk.asset_contract.name}</div>
              </div>
            </div>
            <div className="ownerDetails">
              <div className="ownerLink">
                <img src={instagramLogo} alt="" />
                <img src={twitterLogo} alt="" />
                <img src={moreIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
