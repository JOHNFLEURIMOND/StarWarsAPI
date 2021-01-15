async function fetcher(url: RequestInfo) {
    try {
      const res = await fetch(url);
      const json = await res.json();
      console.log("json: ", json);
      return json;
    } catch (err) {
      throw err;
    }
  }
  
  export default fetcher;