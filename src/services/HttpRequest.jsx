import ApiConnect from "./ApiConnect"

export const HttpRequestGet = method => {
    return ApiConnect.get(method).then(response =>{
        console.log(response)
    }).catch(error => console.error(error))
}

export const HttpRequestPost = (method, parameters) => {
    return ApiConnect.post(method, parameters).then(response =>{
        return response.data
    }).catch(error => console.error(error))
}
