import Request from "utils/request";

export class GenerateApis {
  /**
   * ็ๆ้กต้ข
   * @returns
   */
  static readonly generatePage = () => Request.post("/api/generate/addPage");
}
