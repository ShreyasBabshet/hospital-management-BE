import { assignDoctorToNurse } from "./nurse.repository";

const assignDoctor = async (data: { nurseId: string, doctorId: string }) => {
    try {
        const { nurseId, doctorId } = data;
        await assignDoctorToNurse(nurseId, doctorId)
    }
    catch (error) {
        console.log(error);
    }
}
export const nurseService = {
    assignDoctor
}