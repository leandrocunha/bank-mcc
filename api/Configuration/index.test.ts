import { describe, expect, it, vi } from "vitest";
import { createConfiguration, IConfiguration } from ".";
import { createFile } from "../utils/fileHandler";

vi.mock("../utils/fileHandler", () => ({
  createFile: vi.fn(() => new Promise((resolve) => resolve("mock"))),
}));

vi.mock(".", () => ({
  createSnapshot: vi.fn(() => new Promise((resolve) => resolve("mock"))),
}));

describe("Configuration", () => {
  let mockData: IConfiguration;
  let mockResponseError;

  beforeEach(() => {
    mockData = {
      uuid: "123-abc-456-def",
      application: "123-abc-456-def",
      type: "123-abc-456-def",
      name: "Application name",
      owner: "123-abc-456-def",
      manager: "123-abc-456-def",
      role: null,
      created_at: new Date(),
    };
    mockResponseError = {
      statusText: "error",
      statusCode: 200,
      statusMessage: "Configuration wasn't created",
    };
  });

  it("should create a configuration", async () => {
    await createConfiguration(mockData);
    expect(createFile).toHaveBeenCalled();
  });

  it("should not create a configuration without uuid", async () => {
    mockData = { ...mockData, uuid: null };
    const result = await createConfiguration(mockData);
    expect(result).toStrictEqual(mockResponseError);
  });
});
