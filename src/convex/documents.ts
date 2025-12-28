import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const saveBrochure = mutation({
  args: { storageId: v.id("_storage"), name: v.string() },
  handler: async (ctx, args) => {
    // Remove existing brochure
    const existing = await ctx.db
      .query("documents")
      .withIndex("by_type", (q) => q.eq("type", "sponsorship_brochure"))
      .first();
    if (existing) {
      await ctx.db.delete(existing._id);
    }
    await ctx.db.insert("documents", {
      type: "sponsorship_brochure",
      storageId: args.storageId,
      name: args.name,
    });
  },
});

export const getBrochure = query({
  handler: async (ctx) => {
    try {
      const doc = await ctx.db
        .query("documents")
        .withIndex("by_type", (q) => q.eq("type", "sponsorship_brochure"))
        .first();

      if (!doc) return null;

      if (!doc.storageId) {
        console.warn("documents.getBrochure: document missing storageId", doc);
        return null;
      }

      try {
        return await ctx.storage.getUrl(doc.storageId);
      } catch (err) {
        console.error("documents.getBrochure: ctx.storage.getUrl failed", err, { storageId: doc.storageId });
        return null;
      }
    } catch (err) {
      console.error("documents.getBrochure: unexpected error", err);
      return null;
    }
  },
});
