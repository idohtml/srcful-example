import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Home from "./pages/Home";
import Header from "./components/shared/Header";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-0">
      <ThemeProvider>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
