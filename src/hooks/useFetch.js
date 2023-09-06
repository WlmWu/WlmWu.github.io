import { useState, useEffect } from "react";

const useFetch = (url, method = "GET") => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url, { method: method });
      const json = await response.json();
      return json;
    }

    fetchData()
      .then((json) => setData(json))
      .catch((e) => console.log(e));
  }, [url, method]);

  return data;
};

export default useFetch;
