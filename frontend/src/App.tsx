import { useState } from "react";

import "./App.css";
import { MainLayout } from "./components/layout/MainLayout";
import { RestaurantPage } from "./components/restaurants/RestaurantPage";

function App() {
  return (
    <>
      <MainLayout>
        <RestaurantPage />
      </MainLayout>
    </>
  );
}

export default App;
