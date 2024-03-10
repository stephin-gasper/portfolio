import {
  addHookData,
  fetchHookData,
  handleError,
  useAppSettings,
} from "@headstartwp/next";

import { resolveBatch } from "@/utils/promises";
import PageSEO from "@/components/PageSEO";

const NotFoundPage = () => (
  <>
    <PageSEO title="Page Not Found" />
    <h1 style={{ textAlign: "center", paddingTop: "1.25rem" }}>
      404 - Page Not Found
    </h1>
  </>
);

export async function getStaticProps(context) {
  try {
    // fetch batch of promises and throws errors selectively
    // passing `throw:false` will prevent errors from being thrown for that promise
    const settledPromises = await resolveBatch([
      { func: fetchHookData(useAppSettings.fetcher(), context) },
    ]);

    return addHookData(settledPromises, { revalidate: 60 });
  } catch (e) {
    return handleError(e, context);
  }
}

export default NotFoundPage;
