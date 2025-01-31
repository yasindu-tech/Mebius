export const getProducts = async () =>{
    try {
      const res = await fetch("http://localhost:8000/api/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      return data
    } catch (error) {
      throw new Error("Error while loading the products")     
    }
   };


export const getCategory = async () =>{
  try{
    const res = await fetch("http://localhost:8000/api/categories",{
      method:"GET",
      headers:{
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data
  }catch (error){
    throw new Error("Error while loading the Categories")   
  }
}