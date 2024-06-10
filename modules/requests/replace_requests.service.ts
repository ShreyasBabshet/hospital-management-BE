import { IRequest } from "../common/interfaces";
import { Requests } from "./replace_requests.model"
import { createRequest } from "./replace_requests.repository";



const raiseRequest = async (replaceData: IRequest) => {
    try {
        await createRequest(replaceData);
    }
    catch (error) {
        console.log(error);
    }
}

export const requestService = {
    raiseRequest
}