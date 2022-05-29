import { IAppendOptions } from "../types/append-type";

export default class AppendService {
  appendOptions(options: IAppendOptions): string[] {
    const SIMPLE_ARRAY = process.env.SIMPLE_ARRAY || "";
    const simple_array = SIMPLE_ARRAY.split(",");
    const { start, end } = options;

    return [`${start}`, ...simple_array, `${end}`];
  }
}
