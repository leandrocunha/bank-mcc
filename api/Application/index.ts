export interface IApplication {
    id: String;
    name: String;
}

export const createApplication = (data: IApplication): String => {
    return 'Application created succesfuly!'
}

export const updateApplication = (data: IApplication): String => {
    return 'Application updated succesfuly!'
}

export const deleteApplication = (data: IApplication): String => {
    return 'Application deleted succesfuly!'
}