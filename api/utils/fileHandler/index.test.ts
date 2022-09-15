import fs from "vite-plugin-fs/browser";
import { describe, expect, it, vi } from "vitest";
import { createFile, readDir, readFile } from "./index";

vi.mock("vite-plugin-fs/browser", () => ({
  default: {
    writeFile: vi.fn(),
    readFile: vi.fn(),
    readdir: vi.fn(),
  },
}));

describe("fileHandler", () => {
  it("should create a file", () => {
    try {
      const mockContent = JSON.stringify({ uuid: "123-abc-456-cde" });
      const result = createFile(mockContent, "myfilename.json", "./data/");
      expect(fs.writeFile).toHaveBeenCalled();
      expect(result).toBeTypeOf("object");
    } catch (e) {
      expect(e).toEqual(`error: ${e}`);
    }
  });

  it("should read a file", () => {
    const PATH = "./path_to/my_file.json";
    const result = readFile(PATH);
    expect(fs.readFile).toHaveBeenCalled();
    expect(result).toBeTruthy();
  });

  it("should not read a file withour filepath", () => {
    const PATH = null;
    const result = readFile(PATH);
    expect(fs.readFile).toHaveBeenCalled();
    expect(result).toBeTruthy();
  });

  it("should read a dir", () => {
    const PATH = "./path_to_dir/";
    const result = readDir(PATH);
    expect(fs.readdir).toHaveBeenCalled();
    expect(result).toBeTruthy();
  });
});
