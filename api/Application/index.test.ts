import { describe, expect, it, vitest } from "vitest";
import { createApplication, IApplication } from ".";

describe("Application", () => {
  let createFile: Function;
  let mockData: IApplication;

  beforeEach(() => {
    createFile = vitest.fn(() => "mock");
    mockData = {
      uuid: "123-abc-456-def",
      name: "My awesome Application",
      created_at: new Date(),
    };
  });

  it("should create a new application", () => {
    const result = createApplication(mockData)(createFile);
    expect(createFile).toBeCalled();
    expect(result).toBeTypeOf("string");
  });

  it("should update a new application", () => {
    const result = createApplication(mockData)(createFile);
    expect(createFile).toBeCalled();
    expect(result).toBeTypeOf("string");
  });

  it("should create a new application", () => {
    const result = createApplication(mockData)(createFile);
    expect(createFile).toBeCalled();
    expect(result).toBeTypeOf("string");
  });
});
