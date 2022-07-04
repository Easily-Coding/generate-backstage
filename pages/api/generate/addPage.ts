import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import S from "string";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const filePath = path.join(
      __dirname,
      "../../../../../template/src/App.tsx"
    );
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

    const newPageContent = fileContent.replace(
      `{/* template */}`,
      `<Resource name="users" list={UserList} />\n {/* template */}`
    );

    console.log(newPageContent, "newPageContent");

    fs.writeFileSync(filePath, newPageContent);

    res.send({ code: 200, data: "hello" });
  }
}
