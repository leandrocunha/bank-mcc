import { IResponseError } from "../Application";
import { IResponseSuccess } from "../Configuration";
import { createFile, readDir, readFile } from "../utils/fileHandler";

export interface IUser {
  uuid: string;
  name: string;
  email: string;
  created_at: Date;
}

const PATH = "./data/users/";

export const createUser = async (
  user: IUser
): Promise<IResponseError | Function> => {
  const { uuid, email, name } = user;

  if (!name || !email) {
    return {
      statusText: "error",
      statusCode: 200,
      statusMessage: "User not create",
    };
  }

  await createFile(JSON.stringify(user), `${uuid}.json`, PATH);

  return {
    statusText: "success",
    statusCode: 200,
    statusMessage: "User create succesfuly",
    data: user,
  };
};

export const listUsers = async (dirPath: string) => {
  if (!dirPath) {
    return {
      statusText: "error",
      statusCode: 200,
      statusMessage: "Missing Users directory path.",
    };
  }

  const userFiles = await readDir(dirPath);

  const users = await Promise.all(
    userFiles.data.map(async (file) => {
      const fileContent = await readFile(`${dirPath}${file}`);
      if (fileContent.data) {
        return JSON.parse(fileContent.data);
      }
    })
  );

  return { ...userFiles, data: users };
};

export const updateUser = (user: IUser): IUser => {
  return user;
};

export const deleteUser = (email: string): string => {
  return "User delete sucessfuly!";
};
