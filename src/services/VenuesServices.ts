import http from "./http-common"
import { VenueResponse } from "../redux/types"


const getAllVenues = () => {
    return http.get<Array<VenueResponse>>("/venues");
};

const getVenue = (id: string) => {
    return http.get<VenueResponse>(`/venues/${id}`);
};

const createVenue = (data: VenueResponse) => {
    return http.post<VenueResponse>("/venues", data);
};

const updateVenue = (id: string, data: VenueResponse) => {
    return http.put<VenueResponse>(`/venues/${id}`, data);
};

const deleteVenue = (id: string) => {
    return http.delete<VenueResponse>(`/venues/${id}`);
};

const findByName = (name: string) => {
    return http.get<Array<VenueResponse>>(`/venues?sorts=${name}`);
};

const VenuesServices = {
    getAllVenues,
    getVenue,
    createVenue,
    updateVenue,
    deleteVenue,
    findByName,
};

export default VenuesServices;


