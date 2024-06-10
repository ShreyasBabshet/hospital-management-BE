import { IRequest } from "../common/interfaces";
import { Requests } from "./replace_requests.model";


export const createRequest = async (requestData: IRequest) => {
    try {
        const request = {
            ...requestData,
            status: 'Pending'
        }
        await Requests.create(request);
    }
    catch (error) {
        console.log(error);
    }
}
