import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  console.log(import.meta.env.VITE_SOME_KEY);
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Outlet />
    </div>
  );
}

export default App;
