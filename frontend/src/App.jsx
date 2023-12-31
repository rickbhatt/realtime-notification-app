import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Outlet />
    </div>
  );
}

export default App;
