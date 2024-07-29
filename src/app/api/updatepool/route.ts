// /pages/api/updateMetrics.js
import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  const filePath = path.join(process.cwd(), "src", "utils", "poolRecords.json");

  try {
    // Read existing records from JSON file
    const data = await fs.readFile(filePath, "utf8");
    const records = JSON.parse(data);

    const requestBody = await req.json();
    const requestData = JSON.parse(requestBody.body);

    const previousLiquidity = requestData.previousLiquidity;
    const newVolume = requestData.volume24h;
    const currentTime = requestData.now;

    records.previousLiquidity.value = previousLiquidity;
    records.previousLiquidity.lastTimeUpdated = currentTime;
    records.previousVolume.value = newVolume;
    records.previousVolume.lastTimeUpdated = currentTime;

    // Write updated records back to JSON file
    await fs.writeFile(filePath, JSON.stringify(records, null, 2), "utf8");

    return NextResponse.json(
      { message: "Values updated successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
// export const dynamic = "force-static";

