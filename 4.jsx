import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
        <Route path="/about" element={<h1>This is the About Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
