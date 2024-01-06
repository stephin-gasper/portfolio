import {
  fetchHookData,
  addHookData,
  handleError,
  usePost,
  useAppSettings,
} from "@headstartwp/next";

import { workParams } from "@/params";
import { PageContent } from "@/components/PageContent";
import { resolveBatch } from "@/utils/promises";

/**
 * Single page for work CPT
 *
 * @returns {import("react").ReactNode} - WorkPage JSX element.
 */
const WorkPage = () => {
  const { error, loading } = usePost(workParams);

  if (error) {
    return "error";
  }

  if (loading) {
    return "Loading...";
  }

  return <PageContent params={workParams} />;
};

export default WorkPage;

export async function getServerSideProps(context) {
  try {
    const settledPromises = await resolveBatch([
      {
        func: fetchHookData(usePost.fetcher(), context, { params: workParams }),
      },
      { func: fetchHookData(useAppSettings.fetcher(), context), throw: false },
    ]);

    return addHookData(settledPromises, {});
  } catch (e) {
    return handleError(e, context);
  }
}
