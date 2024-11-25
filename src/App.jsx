import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true); // Initial state for loading

  useEffect(() => {
    const handlePageLoad = () => {
      setIsLoading(false); // Stop loading when the page has loaded
    };

    // Attach the event listener
    window.addEventListener("load", handlePageLoad);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loading">Loading...</div> // Show while loading
      ) : (
        <div className="content">Page Loaded!</div> // Show after loading
      )}
    </div>
  );
}

export default App;
