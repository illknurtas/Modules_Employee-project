export class Request {
    constructor(url){
        this.url=url;
    }
    // GET REQUEST 
    async get(){
        const response = await fetch(this.url);
        // data that created will be returned with the below lines(responseData)
        const responseData = await response.json();

        return responseData;
    }
    // POST REQUEST 
    async post(data){
        const response = await fetch(this.url,{
            method:"POST",
            body:JSON.stringify(data),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });
        const responseData = await response.json();
        return responseData;
    }
    // PUT REQUEST 
    async put(id, data){    
        const response = await fetch(this.url+"/"+id,{
            method:"PUT",
            body:JSON.stringify(data),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });
        const responseData = await response.json();
        return responseData;
    }
    // DELETE REQUEST
    async delete(id){    
        const response = await fetch(this.url+"/"+id,{
            method:"DELETE",
        });
        return "Data deleted";
    }
}