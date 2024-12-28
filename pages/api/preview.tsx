// pages/api/preview.ts
import { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

export default async function preview(req: NextApiRequest, res: NextApiResponse) {
    const { secret, slug } = req.query;

    if (secret !== process.env.SANITY_PREVIEW_SECRET) {
        return res.status(401).json({ message: "Invalid secret" });
    }

    // Fetch the projects to pass to previewData
    const projects = await client.fetch(PROJECTS_QUERY);

    // Enable Preview Mode by setting cookies
    res.setPreviewData({ projects });

    // Redirect to the correct page in preview mode
    res.redirect(`/project/${slug}`);
}
