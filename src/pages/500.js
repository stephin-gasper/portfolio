import {
  addHookData,
  fetchHookData,
  handleError,
  useAppSettings,
} from "@headstartwp/next";

import { resolveBatch } from "@/utils/promises";

import PageSEO from "@/components/PageSEO";

const ServerErrorPage = () => (
  <>
    <PageSEO title="Error" />

    <h1 style={{ textAlign: "center", paddingTop: "1.25rem" }}>
      500 - Internal Server Error
    </h1>
  </>
);

export async function getStaticProps(context) {
  try {
    // fetch batch of promises and throws errors selectively
    // passing `throw:false` will prevent errors from being thrown for that promise
    const settledPromises = await resolveBatch([
      { func: fetchHookData(useAppSettings.fetcher(), context), throw: false },
    ]);

    return addHookData(settledPromises, { revalidate: 60 });
  } catch (e) {
    return handleError(e, context);
  }
}
export default ServerErrorPage;
