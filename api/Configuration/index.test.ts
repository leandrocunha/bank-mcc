import { describe, expect, it, vi } from "vitest";
import { createConfiguration, createSnapshot, IConfiguration } from ".";
import { createFile, readFile } from "../utils/fileHandler";

vi.mock("../utils/fileHandler", () => ({
  createFile: vi.fn(() => new Promise((resolve) => resolve("mock"))),
  readFile: vi.fn(
    () =>
      new Promise((resolve) =>
        resolve({
          statusCode: 200,
          statusMessage: "Success",
          data: JSON.stringify({}),
          error: false,
        })
      )
  ),
}));

vi.mock(".", () => ({
  createSnapshot: vi.fn(() => new Promise((resolve) => resolve("mock"))),
}));

describe("Configuration", () => {
  let mockData: IConfiguration;

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
  });

  it("should create a configuration", async () => {
    await createConfiguration(mockData);
    expect(createFile).toHaveBeenCalled();
  });
});
