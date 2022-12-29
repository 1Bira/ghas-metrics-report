import * as core from "@actions/core";
import { writeFileSync } from "fs";
import jsPDF from "jspdf";
import { join } from "path";

export const syncWriteFile = (filename: string, data: string): void => {
  const outputFilename = join(process.env.GITHUB_WORKSPACE as string, filename);
  writeFileSync(outputFilename, data, {
    flag: "w",
  });
  core.debug(`[📝] File ${outputFilename} written`);
  return;
};

export const preparePdfAndWriteToFile = (
  filename: string,
  report: jsPDF
): void => {
  //const outputFilename = join(__dirname, filename);
  const outputFilename = join(process.env.GITHUB_WORKSPACE as string, filename);
  report.save(outputFilename);
  core.debug(`[📝] File ${outputFilename} written`);
  return;
};
