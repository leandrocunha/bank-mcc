
interface IConfiguration {
    id: String;
    author: String;
    type: String;
    application_name: String;
    created_at: Date
}

export const createConfiguration = (config: IConfiguration): String => {
    return 'Configuration created with successful!'
}