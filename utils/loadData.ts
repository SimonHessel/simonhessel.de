import { Data } from "../interfaces/Data";
import YAML from "yaml";
import fs from "fs";

export default (language: string): Data =>
  YAML.parse(fs.readFileSync(`./languages/${language}.yaml`).toString());
