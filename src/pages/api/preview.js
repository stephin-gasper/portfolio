import { previewHandler } from "@headstartwp/next";

/**
 * The Preview endpoint just needs to proxy the default preview handler.
 *
 * @param {import('next').NextApiRequest} req - The Next.js request object.
 * @param {import('next').NextApiResponse} res - The Next.js response object.
 * @returns {Promise<void>} - A promise that resolves when the preview handler is executed.
 */
export default async function handler(req, res) {
  return previewHandler(req, res);
}
