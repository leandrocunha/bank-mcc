import { describe, expect, it, vi } from "vitest";
import { createUser, IUser } from ".";
import { IResponseError } from "../Application";
import { IResponseSuccess } from "../Configuration";
import { createFile } from "../utils/fileHandler";

vi.mock("../utils/fileHandler", () => ({
  createFile: vi.fn(() => new Promise((resolve) => resolve("mock"))),
}));

describe("createUser", () => {
  let mockData: IUser;
  let mockResponseSuccess: IResponseSuccess;
  let mockResponseError: IResponseError;

  beforeEach(() => {
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

  it("should create a user", async () => {
    const result = await createUser(mockData);
    expect(createFile).toHaveBeenCalled();
    expect(result).toStrictEqual(mockResponseSuccess);
  });

  it("should not create a user without name", async () => {
    mockData = { ...mockData, name: null };
    const result = await createUser(mockData);
    expect(createFile).toHaveBeenCalled();
    expect(result).toStrictEqual(mockResponseError);
  });

  it("should not create a user without email", async () => {
    mockData = { ...mockData, email: null };
    const result = await createUser(mockData);
    expect(createFile).toHaveBeenCalled();
    expect(result).toStrictEqual(mockResponseError);
  });
});
