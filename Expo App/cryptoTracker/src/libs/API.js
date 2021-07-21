class API{
  static instance = new API();

  get = async (url) => {
    try{
      const request= await fetch(url);
      const json= await request.json();
      
      return json;

    }catch(error){
      console.log("API - GET method error:", error);

      throw Error(error);
    }
  }

  post = async (url, headers, body) => {
    try{
      const request = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });
      const json= await request.json();

      return json;

    }catch(error){
      console.log("API - POST method error:", error);

      throw Error(error);
    }
  }
}

export default API;