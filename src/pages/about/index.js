import PropTypes from "prop-types";
import {
  usePost,
  fetchHookData,
  addHookData,
  handleError,
  useAppSettings,
  LinkBlock,
} from "@headstartwp/next";

import { resolveBatch } from "@/utils/promises";
import { aboutPageParams } from "@/params";

import { BlocksRenderer, HtmlDecoder } from "@headstartwp/core/react";
import FeaturedImage from "@/components/FeaturedImage";
import PageSEO from "@/components/PageSEO";
import ExternalLinkBlock from "@/blocks/ExternalLinkBlock";

const AboutPage = ({ pageTitle, pageContent }) => (
  <>
    <div style={{ paddingTop: "1rem" }}>
      <FeaturedImage
        src="/about-image.avif"
        alt="Photo of Stephin, wearing a green colored shirt. He is a wheatish brown male with dark colored hair."
        staticImageSrc="/about-image.avif"
      />
    </div>
    <h1>
      <HtmlDecoder html={pageTitle} />
    </h1>
    <PageSEO title={pageTitle} />
    <BlocksRenderer html={pageContent}>
      <ExternalLinkBlock />
      <LinkBlock />
    </BlocksRenderer>
  </>
);

AboutPage.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  pageContent: PropTypes.string.isRequired,
};

export default AboutPage;

export async function getStaticProps(context) {
  try {
    // fetch batch of promises and throws errors selectively
    // passing `throw:false` will prevent errors from being thrown for that promise
    const hookData = await resolveBatch([
      {
        func: fetchHookData(usePost.fetcher(), context, {
          params: aboutPageParams,
        }),
      },
      { func: fetchHookData(useAppSettings.fetcher(), context), throw: false },
    ]);

    const pageData = hookData[0];

    const pageTitle = pageData.data.result.title.rendered;
    const pageContent = pageData.data.result.content.rendered;

    return addHookData(hookData, {
      props: { pageTitle, pageContent },
      revalidate: 5 * 60,
    });
  } catch (e) {
    return handleError(e, context);
  }
}
