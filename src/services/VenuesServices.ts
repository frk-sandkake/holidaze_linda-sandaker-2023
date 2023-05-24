import http from "../http-common"
import { VenueData } from "../types/VenueData"

const getAll = () => {
    return http.get<Array<VenueData>>("/venues");
};

const get = (id: any) => {
    return http.get<VenueData>(`/venues/${id}`);
};

const create = (data: VenueData) => {
    return http.post<VenueData>("/venues", data);
};

const update = (id: any, data: VenueData) => {
    return http.put<any>(`/venues/${id}`, data);
};

const remove = (id: any) => {
    return http.delete<any>(`/venues/${id}`);
};

const removeAll = () => {
    return http.delete<any>(`/venues`);
};

const findByName = (name: string) => {
    return http.get<Array<VenueData>>(`/venues?name=${name}`);
};

const VenuesServices = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByName,
};

export default VenuesServices;
