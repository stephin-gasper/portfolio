import {
  fetchHookData,
  addHookData,
  handleError,
  usePost,
  useAppSettings,
} from "@headstartwp/next";
import { HtmlDecoder, BlocksRenderer } from "@headstartwp/core/react";
import { useMemo } from "react";
import Head from "next/head";
import { stripTags } from "@headstartwp/core";

import { workParams } from "@/params";
import { resolveBatch } from "@/utils/promises";

import FeaturedImage from "@/components/FeaturedImage";
import Details from "@/modules/work/Details";
import Loader from "@/components/Loader";
import ExternalLinkBlock from "@/blocks/ExternalLinkBlock";
import ProjectImageSlider from "@/modules/work/ProjectImageSlider";
import PageSEO from "@/components/PageSEO";
import TechStack from "@/modules/work/TechStack";

import { PLATFORM_MAP } from "@/modules/work/Work.constants";
import { detailsWrapperStyles } from "@/modules/work/Work.style";
import { RACCOON_WITH_LAPTOP } from "@/constants/featureImage";

/**
 * Single page for work CPT
 *
 * @returns {import("react").ReactNode} - WorkPage JSX element.
 */
const WorkPage = () => {
  const {
    error,
    loading,
    data: {
      post: {
        title,
        excerpt,
        content,
        meta_box: {
          featured_image_url,
          taxonomy_work_organization,
          domain,
          website_url,
          is_website_active,
          github_url,
          project_status,
        },
        meta_box,
        _embedded,
        terms: { tech_stack },
      } = {},
    } = {},
  } = usePost(workParams);

  const platform = useMemo(
    () => meta_box.platform.map((item) => PLATFORM_MAP[item]).join(", "),
    [meta_box.platform],
  );

  const imgSrcs = useMemo(() => {
    const srcList =
      featured_image_url ||
      _embedded["wp:featuredmedia"].map((media) => media.source_url);
    return srcList.map((src, index) => ({
      src,
      id: `featured_image_${index}`,
    }));
  }, [_embedded, featured_image_url]);

  if (error) {
    return "error";
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        {/* Resource hints for assets */}
        <link rel="preconnect" href="https://gistcdn.githack.com" />
        <link rel="preconnect" href="https://i.postimg.cc" />
      </Head>
      <PageSEO
        title={stripTags(title.rendered).trim()}
        description={stripTags(excerpt.rendered).trim()}
      />
      <FeaturedImage
        src={RACCOON_WITH_LAPTOP.path}
        staticImageSrc={RACCOON_WITH_LAPTOP.staticPath}
        alt={RACCOON_WITH_LAPTOP.alt}
      />
      <h1>
        <HtmlDecoder html={title.rendered} />
      </h1>
      <BlocksRenderer html={content.rendered}>
        <ExternalLinkBlock />
      </BlocksRenderer>
      <section className={detailsWrapperStyles}>
        <Details
          name="Project Status"
          isDetailVisible={Boolean(project_status)}
          hasCaution
        >
          <Details.Content>{project_status}</Details.Content>
        </Details>
        <Details name="Platform" isDetailVisible={Boolean(platform)}>
          <Details.Content>{platform}</Details.Content>
        </Details>
        <Details name="Stack">
          <TechStack items={tech_stack} />
        </Details>
        <Details
          name="Organization"
          isDetailVisible={Boolean(taxonomy_work_organization?.name)}
        >
          <Details.Content>{taxonomy_work_organization?.name}</Details.Content>
        </Details>
        <Details name="Domain" isDetailVisible={Boolean(domain)}>
          <Details.Content>{domain}</Details.Content>
        </Details>
        <Details name="Website" isDetailVisible={Boolean(website_url)}>
          <Details.Content>
            <Details.Link
              url={website_url}
              isActive={is_website_active === "true"}
            />
          </Details.Content>
        </Details>
        <Details name="Github" isDetailVisible={Boolean(github_url)}>
          <Details.Content>
            <Details.Link url={github_url} />
          </Details.Content>
        </Details>
      </section>
      <ProjectImageSlider imgSrcs={imgSrcs} />
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
