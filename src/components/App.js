import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [dogImg, setDogImg] = useState(null);

  useEffect(() => {
    const dogFetch = () =>
      fetch("https://dog.ceo/api/breeds/image/random").then((res) =>
        res.json()
      );

    async function dogInfoFetching() {
      const dogData = await dogFetch();
      setDogImg(dogData.message);
      setLoading(false);
    }
    dogInfoFetching();
  }, []);
  if (loading) return <p>Loading...</p>;

  return <img src={dogImg} alt="A Random Dog"></img>;
}

export default App;
