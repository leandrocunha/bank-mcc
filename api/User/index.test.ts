import { describe, expect, it, vi, vitest } from "vitest";
import { createUser, IUser } from ".";
import { IResponseError } from "../Application";
import { IResponseSuccess } from "../Configuration";

describe("createUser", () => {
  let createFile: Function;
  let mockData: IUser;
  let mockResponseSuccess: IResponseSuccess;
  let mockResponseError: IResponseError;

  beforeEach(() => {
    createFile = vitest.fn(() => "mock");
    mockData = {
      uuid: "123-abc-456-def",
      name: "My awesome Application",
      email: "myemail@email.com",
      created_at: new Date(),
    };
    mockResponseSuccess = {
      statusText: "success",
      statusCode: 200,
      statusMessage: "User create succesfuly",
      data: mockData,
    };
    mockResponseError = {
      statusText: "error",
      statusCode: 200,
      statusMessage: "User not create",
    };
  });

  it("should create a user", () => {
    const result = createUser(mockData)(createFile);
    expect(createFile).toHaveBeenCalled();
    expect(result).toStrictEqual(mockResponseSuccess);
  });

  it("should not create a user without name", () => {
    // mockData = { email: 'leandroscunha@gmail.com' };
    const result = createUser(mockData)(createFile);
    expect(createFile).toHaveBeenCalled();
    expect(result).toStrictEqual(mockResponseSuccess);
  });

  it("should not create a user without email", () => {
    // mockData = { name: 'Leandro Cunha', email: null };
    const result = createUser(mockData)(createFile);
    expect(createFile).toHaveBeenCalled();
    expect(result).toStrictEqual(mockResponseSuccess);
  });
});
