
/**
* The code snippet below is an example.
*/

import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const leads = sqliteTable("leads", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name"),
  email: text("email"), 
  phone: text("phone"), 
});

export const products = sqliteTable("prdocuts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name"), 
});

