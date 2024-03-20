import { useCallback, useMemo, useState } from "react";
import {
  usePosts,
  fetchHookData,
  addHookData,
  handleError,
  useAppSettings,
  useTerms,
} from "@headstartwp/next";
import Head from "next/head";

import { techStackTaxonomyParams, worksParams } from "@/params";
import { resolveBatch } from "@/utils/promises";

import FeaturedImage from "@/components/FeaturedImage";
import {
  contributionsTitleStyles,
  worksWrapperStyles,
} from "@/modules/works/Works.style";
import Card from "@/modules/works/Card";
import Loader from "@/components/Loader";
import PageSEO from "@/components/PageSEO";
import { RACCOON_WITH_LAPTOP } from "@/constants/featureImage";
import FilterTechStack from "@/modules/works/FilterTechStack";
import { WORK_FILTER_ALL } from "@/modules/works/Works.constants";

/**
 * Archive page for work CPT
 *
 * @returns {import("react").ReactNode} - WorksPage JSX element.
 */
const WorksPage = () => {
  const { data, error, loading } = usePosts(worksParams);
  const {
    data: { terms: techStackTerms },
    error: techStackTermsError,
    loading: techStackTermsLoading,
  } = useTerms(techStackTaxonomyParams);

  const [currentTechStackFilter, setCurrentTechStackFilter] = useState(
    WORK_FILTER_ALL.slug,
  );

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
    () =>
      getPostsBasedOnTermAndSort("projects").filter((post) =>
        currentTechStackFilter !== WORK_FILTER_ALL.slug
          ? post.terms.tech_stack.some(
              (term) => term.slug === currentTechStackFilter,
            )
          : true,
      ),
    [currentTechStackFilter, getPostsBasedOnTermAndSort],
  );

  const techStackFilters = useMemo(() => {
    const filters = techStackTerms.filter((term) => term.is_filterable);
    filters.unshift(WORK_FILTER_ALL);
    return filters;
  }, [techStackTerms]);

  const renderWorks = useCallback(
    ({
      works,
      title,
      titleClassName,
      disableFirstImageLazyLoad,
      hasFilters = false,
    }) =>
      works ? (
        <>
          <h2 className={titleClassName}>{title}</h2>
          {hasFilters ? (
            <FilterTechStack
              filters={techStackFilters}
              setCurrentFilter={setCurrentTechStackFilter}
              currentFilter={currentTechStackFilter}
            />
          ) : null}
          <ul className={worksWrapperStyles}>
            {works.map((work, index) => (
              <Card
                key={work.id}
                id={work.id}
                href={`/work/${work.slug}`}
                imgSrc={
                  work.meta_box.featured_image_url?.[0] ||
                  work._embedded["wp:featuredmedia"]?.[0]?.source_url
                }
                title={work.title.rendered}
                techStackHighlights={work.meta_box.tech_stack_highlighted}
                lazyLoadImage={!(disableFirstImageLazyLoad && index === 0)}
              >
                {work.excerpt.rendered}
              </Card>
            ))}
          </ul>
        </>
      ) : null,
    [currentTechStackFilter, techStackFilters],
  );

  if (error || techStackTermsError) {
    return "error";
  }

  if (loading || techStackTermsLoading) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        {/* Resource hints for assets */}
        <link rel="preconnect" href="https://i.postimg.cc" />
      </Head>
      <PageSEO title="Work" description="Lastest works: Stephin Gasper" />
      <FeaturedImage
        src={RACCOON_WITH_LAPTOP.path}
        staticImageSrc={RACCOON_WITH_LAPTOP.staticPath}
        alt={RACCOON_WITH_LAPTOP.alt}
      />

      <h1>
        <span className="visually-hidden">My Work</span>
      </h1>

      {renderWorks({
        works: contributions,
        title: "Contributions",
        titleClassName: contributionsTitleStyles,
        disableFirstImageLazyLoad: true,
      })}

      {renderWorks({ works: projects, title: "Projects", hasFilters: true })}
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
      {
        func: fetchHookData(useTerms.fetcher(), context, {
          params: techStackTaxonomyParams,
        }),
      },
      { func: fetchHookData(useAppSettings.fetcher(), context), throw: false },
    ]);

    return addHookData(settledPromises, {});
  } catch (e) {
    return handleError(e, context);
  }
}
