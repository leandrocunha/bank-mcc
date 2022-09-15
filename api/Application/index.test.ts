import { describe, expect, it, vi } from "vitest";
import { createApplication, IApplication, IResponseError } from ".";
import { createFile } from "../utils/fileHandler";

vi.mock("../utils/fileHandler", () => ({
  createFile: vi.fn(() => new Promise((resolve) => resolve("mock"))),
}));

describe("Application", () => {
  let mockData: IApplication;
  let mockResponseError: IResponseError;

  beforeEach(() => {
    mockData = {
      uuid: "123-abc-456-def",
      name: "My awesome Application",
      created_at: new Date(),
    };
    mockResponseError = {
      statusText: "error",
      statusCode: 200,
      statusMessage: "Application did not create.",
    };
  });

  it("should create a new application", async () => {
    const result = await createApplication(mockData);
    expect(createFile).toHaveBeenCalled();
    expect(result).toBeTypeOf("string");
  });

  it("should not create an application with empty uuid", async () => {
    const result = await createApplication({ ...mockData, uuid: null });
    expect(createFile).toHaveBeenCalled();
    expect(result).toStrictEqual(mockResponseError);
  });
});
