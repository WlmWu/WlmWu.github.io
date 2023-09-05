import { useState, useEffect, useRef } from "react";

const useFetch = (url, method = "GET") => {
  const [data, setData] = useState([]);
  const mounted = useRef(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url, { method: method });
      const json = await response.json();
      return json;
    }

    if (!mounted.current) {
      mounted.current = true;
    } else {
      fetchData()
        .then((json) => setData(json))
        .catch((e) => console.log(e));
    }
  }, [url, method]);

  return data;
};

export default useFetch;
