import { db } from "@/db";
import { feedback } from "@/db/schema";
import { eq, sql } from "drizzle-orm";

export const getFeedbackForUserQuery = db
  .select()
  .from(feedback)
  .where(eq(feedback.userId, sql.placeholder("userId")))
  .limit(1)
  .prepare("getFeedbackForUser");

export const getAverageRatingQuery = db
  .select({
    rating: feedback.rating,
  })
  .from(feedback)
  .prepare("getAverageRating");
