import { useState } from "react";

import "./App.css";
import { MainLayout } from "./components/layout/MainLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainLayout>
        <RestaurantPage />
      </MainLayout>
    </>
  );
}

export default App;
