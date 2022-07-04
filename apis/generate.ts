import Request from "utils/request";

export class GenerateApis {
  /**
   * 生成页面
   * @returns
   */
  static readonly generatePage = () => Request.post("/api/generate/addPage");
}
