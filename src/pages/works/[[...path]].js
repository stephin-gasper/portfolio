import { useCallback, useMemo } from "react";
import {
  usePosts,
  fetchHookData,
  addHookData,
  handleError,
  useAppSettings,
} from "@headstartwp/next";

import { worksParams } from "@/params";
import { resolveBatch } from "@/utils/promises";

/**
 * Archive page for work CPT
 *
 * @returns {import("react").ReactNode} - WorksPage JSX element.
 */
const WorksPage = () => {
  const { data, error, loading } = usePosts(worksParams);

  const getPostsBasedOnTerm = useCallback(
    (workTerm) =>
      data.posts.filter((post) =>
        post.terms.work_category.some((term) => term.slug === workTerm),
      ),
    [data.posts],
  );

  const contributions = useMemo(
    () => getPostsBasedOnTerm("contributions"),
    [getPostsBasedOnTerm],
  );

  const projects = useMemo(
    () => getPostsBasedOnTerm("projects"),
    [getPostsBasedOnTerm],
  );

  if (error) {
    return "error";
  }

  if (loading) {
    return "Loading...";
  }

  return (
    <>
      {contributions ? (
        <>
          <h2>Contributions</h2>
          <ul>
            {contributions.map((post) => (
              <li key={post.id}>{post.title.rendered}</li>
            ))}
          </ul>
        </>
      ) : null}
      {projects ? (
        <>
          <h2>Projects</h2>
          <ul>
            {projects.map((post) => (
              <li key={post.id}>{post.title.rendered}</li>
            ))}
          </ul>
        </>
      ) : null}
    </>
  );
};

export default WorksPage;

export async function getServerSideProps(context) {
  try {
    // fetch batch of promises and throws errors selectively
    const settledPromises = await resolveBatch([
      {
        func: fetchHookData(usePosts.fetcher(), context, {
          params: worksParams,
        }),
      },
      { func: fetchHookData(useAppSettings.fetcher(), context), throw: false },
    ]);

    return addHookData(settledPromises, {});
  } catch (e) {
    return handleError(e, context);
  }
}
