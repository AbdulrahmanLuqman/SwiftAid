import { Routes, Route } from "react-router-dom";
import OnBoarding from "./views/OnBoarding";

const App = () => {
  return (
    <>
        <main>
          <Routes>
            <Route path="/" element={<OnBoarding />} />
          </Routes>
        </main>
    </>
  )
}

export default App