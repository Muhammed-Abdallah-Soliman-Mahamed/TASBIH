import { Url } from "next/dist/shared/lib/router/router";

export interface CardStruct {
    title: string;
    content: string;
    link: Url;
}

export interface RegistrationStatus {
    islogged: boolean;
    message?: string;
}