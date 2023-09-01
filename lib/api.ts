import axios, {AxiosResponse} from "axios";
import {AboutResponse, ContactsResponse, ProjectsDetailedResponse, ProjectsResponse} from "@/interfaces/api";
import {MainSliderResponse} from "@/interfaces";

const axiosInstance = axios.create({
    baseURL: process.env.API_URL
});

export const getMainSlider = () => {
    return axiosInstance.get('slider').then((response: AxiosResponse<MainSliderResponse[]>) => {
       return response
    });
}

export const getProjects = () => {
    return axiosInstance.get('gallerylist').then((response: AxiosResponse<ProjectsResponse>) => {
        return response;
    });
}

export const getProjectsDetailed = (id: number) => {
    return axiosInstance.get(`detailproject/${id}/`).then((response: AxiosResponse<ProjectsDetailedResponse>) => {
        return response;
    });
}

export const getContacts = () => {
    return axiosInstance.get(`contact/`).then((response: AxiosResponse<ContactsResponse>) => {
        return response;
    });
}

export const getAboutInfo = () => {
    return axiosInstance.get(`footer/`).then((response: AxiosResponse<AboutResponse>) => {
        return response;
    });
}
