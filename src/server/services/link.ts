import { eq } from "drizzle-orm";
import { db } from "../db/db";
import { LinksTable } from "../db/schemas";
import { Link } from "../types/link";

export const getLinkByName = async (name: string): Promise<Link> => {
  if (!name) {
    throw new Error("The name id is required");
  }
  try {
    const response = await db
      .select()
      .from(LinksTable)
      .where(eq(LinksTable.name, name))
      .limit(1);

    if (response.length === 0) {
      throw new Error("Link not found");
    }
    return response[0];
  } catch {
    throw new Error("Failed to get the link");
  }
};

export const getLinks = async (): Promise<Link[]> => {
  try {
    const response = await db.select().from(LinksTable);
    return response;
  } catch {
    throw new Error("Failed to get the links list");
  }
};
