ALTER TABLE "links" ALTER COLUMN "icon" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "links" ALTER COLUMN "icon" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "links" ADD COLUMN "shortUrl" text NOT NULL;