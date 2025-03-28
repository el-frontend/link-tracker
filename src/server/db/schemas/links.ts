import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

const LinksTable = pgTable("links", {
  id: serial("id").primaryKey(),
  name: text("name").unique().notNull(),
  url: text("url").notNull(),
  createdAt: timestamp("created_at", { withTimezone: false })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: false })
    .defaultNow()
    .notNull()
    .$onUpdate(() => {
      return new Date();
    }),
});

export default LinksTable;
