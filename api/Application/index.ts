import { createSnapshot } from "../Configuration";
import { createFile, IResponse, readDir, readFile } from "../utils/fileHandler";

export interface IApplication {
  uuid: string;
  name: string | undefined;
  created_at: Date;
}

export interface IResponseError {
  statusText: string;
  statusCode: number;
  statusMessage: string;
}

const PATH = "./data/applications/";

export const createApplication = async (
  payload: IApplication
): Promise<IResponseError | string> => {
  const { uuid, name, created_at } = payload;

  if (!uuid || !name || !created_at) {
    return {
      statusText: "error",
      statusCode: 200,
      statusMessage: "Application did not create.",
    };
  }

  await createFile(JSON.stringify(payload), `${uuid}.json`, PATH);
  await createSnapshot(JSON.stringify(payload), uuid);

  return "Application created succesfuly!";
};

export const listApplication = async (dirPath: string) => {
  if (!dirPath) {
    return {
      statusText: "error",
      statusCode: 200,
      statusMessage: "Missing a directory path for applications.",
    };
  }

  const applicationFiles = await readDir(dirPath);
  const applications = await Promise.all(
    applicationFiles.data.map(async (file) => {
      const fileContent = await readFile(`${dirPath}/${file}`);
      if (fileContent.data) {
        return JSON.parse(fileContent.data);
      }
    })
  );

  return { ...applicationFiles, data: applications };
};

export const loadApplication = async (
  dirFile: string
): Promise<IResponseError | IResponse> => {
  if (!dirFile) {
    return {
      statusText: "error",
      statusCode: 200,
      statusMessage: "Missing a directory path for the application file.",
    };
  }

  const result = await readFile(dirFile);

  return { ...result, data: JSON.parse(result.data) };
};

export const updateApplication = (data: IApplication): string => {
  return "Application updated succesfuly!";
};

export const deleteApplication = (data: IApplication): string => {
  return "Application deleted succesfuly!";
};
