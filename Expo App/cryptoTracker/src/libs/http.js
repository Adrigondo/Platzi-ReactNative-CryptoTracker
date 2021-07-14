class Http{
  static instance = new Http();

  get = async (url) => {
    try{
      const request= await fetch(url);
      const json= await request.json();
      
      return json;

    }catch(error){
      console.log("http - GET method error:", error);

      throw Error(error);
    }
  }

  post = async (url, body) => {
    try{
      const request = await fetch(url, {
        method: "POST",
        body: body,
      });
      const json= await request.json();

      return json;

    }catch(error){
      console.log("http - POST method error:", error);

      throw Error(error);
    }
  }
}

export default Http;