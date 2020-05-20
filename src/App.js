import React from "react";

import Menu from "./Menu";
import Repos from "./Repos";

function App() {
  return (
    <div className="container-lg my-4">
      <Menu />
      <div className="Box">
        <Repos />
      </div>
    </div>
  );
}

export default App;
