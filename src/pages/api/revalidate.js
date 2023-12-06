import { revalidateHandler } from "@headstartwp/next";

/**
 * The revalidate endpoint just needs to proxy the default revalidate handler
 *
 * @param {import('next').NextApiRequest} req - The Next.js request object.
 * @param {import('next').NextApiResponse} res - The Next.js response object.
 * @returns {Promise<void>} - A promise that resolves when the revalidate handler is executed.
 */
export default async function handler(req, res) {
  return revalidateHandler(req, res);
}
