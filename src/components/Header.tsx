import React from "react";
import prefecturesAPI from "api/populationComposition";

const hoge = async () => {
  const hogehoge = await prefecturesAPI();
  console.log(hogehoge);
};

hoge();

const Header = () => {
  return (
    <div>
      <h1>Title</h1>
    </div>
  );
};

export default Header;
