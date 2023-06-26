export interface GenericResponse {
status: string;
message: string;
}

export interface AuthUser {
    role: string;
    id: string;
    name: string;
    email: string;
    password: string;
    avatar?: string | null;
    venueManager?: boolean;
    accessToken: string;
}

export interface User {
    name: string;
    email: string;
    password: string;
    avatar?: string | null;
    venueManager?: boolean;
}

export interface UserData {
    name: string;
    email: string;
    password: string;
    avatar?: string | null;
    venueManager?: boolean;
    venues: VenueResponse[];
    bookings: BookingResponse[];
    _count: {
    venues: number;
    bookings: number;
  };
}

export interface UpdateAvatarResponse {
    avatar: string | null;
}


export interface SignupUserRequest {
    name: string;
    email: string;
    password: string;
    avatar?: string | null;
    venueManager?: boolean;
}

export interface LoginUserRequest {
    [x: string]: any;
    email: string;
    password: string;
}

export interface LoginUserResponse {
    name: string;
    email: string;
    password: string;
    avatar?: string | null;
    venueManager?: boolean;
    accessToken: string;
}

export interface SignupUser extends SignupUserRequest {
}


export interface BookingRequest {
    dateFrom: string;
    dateTo: string;
    guests: number;
}

export interface BookingResponse {
    id: string;
    dateFrom: string;
    dateTo: string;
    guests: number;
    created: string;
    updated: string;
}

export interface VenueResponse {
    id: string;
    name: string;
    description: string;
    media: string[];
    price: number;
    maxGuests: number;
    rating: number;
    created: string;
    updated: string;
    meta: {
        wifi: boolean;
        parking: boolean;
        breakfast: boolean;
        pets: boolean;
    };
    location: {
        address: string;
        city: string;
        zip: string;
        country: string;
        continent: string;
        lat: number;
        lng: number;
    };
}
