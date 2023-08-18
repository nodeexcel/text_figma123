import React from 'react';
import CommonCard from '../common/CommonCard';
import ProfilePic from "../../assets/profilepic.png";
import Twitter from "../../assets/twitter.png"



const Card: React.FC = () => {
  return (
    <div>
      <CommonCard profilepic={ProfilePic}  Twitter={Twitter} name={"Johnny’s Cash"} email={"@degenjohndoe"} followers={545}/>
    </div>
  );
};

export default Card;
