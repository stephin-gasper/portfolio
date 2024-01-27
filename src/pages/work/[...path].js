import {
  fetchHookData,
  addHookData,
  handleError,
  usePost,
  useAppSettings,
} from "@headstartwp/next";
import { HtmlDecoder, SafeHtml } from "@headstartwp/core/react";
import { useMemo } from "react";

import { workParams } from "@/params";
import { resolveBatch } from "@/utils/promises";

import FeaturedImage from "@/components/FeaturedImage";
import Details from "@/modules/work/Details";
import Loader from "@/components/Loader";

import { PLATFORM_MAP, TECH_STACK_MAP } from "@/modules/work/Work.constants";
import {
  projectImageWrapperStyles,
  projectImageStyles,
} from "@/modules/work/Work.style";
import { cx } from "@linaria/core";

/**
 * Single page for work CPT
 *
 * @returns {import("react").ReactNode} - WorkPage JSX element.
 */
const WorkPage = () => {
  const { error, loading, data } = usePost(workParams);

  const platform = useMemo(
    () =>
      data.post.meta_box.platform.map((item) => PLATFORM_MAP[item]).join(", "),
    [data.post.meta_box.platform],
  );

  const techStack = useMemo(
    () =>
      data.post.meta_box.tech_stack
        .map((item) => TECH_STACK_MAP[item])
        .join(", "),
    [data.post.meta_box.tech_stack],
  );

  if (error) {
    return "error";
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <FeaturedImage src="/laptop.webp" alt="Raccoon Laptop Gif" />
      <h2>
        <HtmlDecoder html={data.post.title.rendered} />
      </h2>
      <SafeHtml html={data.post.content.rendered} />
      <Details name="Platform" value={platform} />
      <Details name="Stack" value={techStack} />
      <Details name="Domain" value={data.post.meta_box.domain} />
      <Details name="Website" value={data.post.meta_box.website_url} isLink />
      <Details name="Github" value={data.post.meta_box.github_url} isLink />
      <div className={projectImageWrapperStyles}>
        <img
          src={
            data.post.meta_box.featured_image_url ||
            data.post._embedded["wp:featuredmedia"]?.[0]?.source_url
          }
          width="100%"
          alt="project"
          className={cx(projectImageStyles, "box-shadow")}
        />
      </div>
    </>
  );
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
