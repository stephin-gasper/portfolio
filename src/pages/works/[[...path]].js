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

import FeaturedImage from "@/components/FeaturedImage";
import { worksWrapperStyles } from "@/modules/works/Works.style";
import Card from "@/modules/works/Card";

/**
 * Archive page for work CPT
 *
 * @returns {import("react").ReactNode} - WorksPage JSX element.
 */
const WorksPage = () => {
  const { data, error, loading } = usePosts(worksParams);

  const getPostsBasedOnTermAndSort = useCallback(
    (workTerm) =>
      data.posts
        .filter((post) =>
          post.terms.work_category.some((term) => term.slug === workTerm),
        )
        .sort((a, b) => a.menu_order - b.menu_order),
    [data.posts],
  );

  const contributions = useMemo(
    () => getPostsBasedOnTermAndSort("contributions"),
    [getPostsBasedOnTermAndSort],
  );

  const projects = useMemo(
    () => getPostsBasedOnTermAndSort("projects"),
    [getPostsBasedOnTermAndSort],
  );

  const renderWorks = useCallback(
    (works, workCategoryTitle) =>
      works ? (
        <>
          <h2>{workCategoryTitle}</h2>
          <ul className={worksWrapperStyles}>
            {works.map((work) => (
              <Card
                key={work.id}
                href={`/work/${work.slug}`}
                imgSrc={
                  work.meta_box.featured_image_url ||
                  work._embedded["wp:featuredmedia"]?.[0]?.source_url
                }
                title={work.title.rendered}
              >
                {work.excerpt.rendered}
              </Card>
            ))}
          </ul>
        </>
      ) : null,
    [],
  );

  if (error) {
    return "error";
  }

  if (loading) {
    return "Loading...";
  }

  return (
    <>
      <FeaturedImage src="/laptop.webp" alt="Raccoon Laptop Gif" />

      {renderWorks(contributions, "Contributions")}

      {renderWorks(projects, "Projects")}
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
