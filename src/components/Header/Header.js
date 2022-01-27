import React from "react";
import Headline from "../Headline/Headline";
import NavMenu from "../NavMenu/NavMenu";


const Header = (props) => {
    const setHandleSearch = props.setHandleSearch;
    const news = props.news;
  return (
    <>
        <NavMenu  setHandleSearch={setHandleSearch}/>
        <Headline news={news}/>
    </>
  );
};

export default Header;
