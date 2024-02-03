import {
  usePost,
  fetchHookData,
  useAppSettings,
  addHookData,
  handleError,
} from "@headstartwp/next";
import { isBlock, isBlockByName } from "@headstartwp/core";
import { BlocksRenderer } from "@headstartwp/core/react";
import PropTypes from "prop-types";
import Head from "next/head";

import { resolveBatch } from "@/utils/promises";
import { indexParams } from "@/params";

import FeaturedImage from "@/components/FeaturedImage";
import SkillsBlock from "@/modules/home/blocks/SkillsBlock";
import TypingTextBlock from "@/modules/home/blocks/TypingTextBlock";
import PageSEO from "@/components/PageSEO";

const Homepage = ({ pageContent }) => (
  <>
    <Head>
      {/* Resource hints for assets */}
      <link rel="preconnect" href="https://gistcdn.githack.com" />
    </Head>
    <PageSEO title="Homepage" />
    <FeaturedImage src="/space.webp" alt="Raccoon Space Gif" />
    <BlocksRenderer html={pageContent}>
      <SkillsBlock
        test={(node) =>
          isBlock(node, { tagName: "section", className: "skills-container" })
        }
      />
      <TypingTextBlock
        test={(node) => isBlockByName(node, "sg-block/typing-text-block")}
      />
    </BlocksRenderer>
  </>
);

Homepage.propTypes = {
  pageContent: PropTypes.string.isRequired,
};

export default Homepage;

export async function getStaticProps(context) {
  let appSettings;
  let slug;
  try {
    appSettings = await fetchHookData(useAppSettings.fetcher(), context);
    /**
     * The static front-page can be set in the WP admin. The default one will be 'front-page'
     */
    slug = appSettings.data.result?.home?.slug ?? "front-page";
  } catch (e) {
    if (e.name === "EndpointError") {
      slug = "front-page";
    }
  }

  try {
    const hookData = await resolveBatch([
      {
        func: fetchHookData(usePost.fetcher(), context, {
          params: {
            ...indexParams,
            slug,
          },
        }),
      },
    ]);

    const pageData = hookData[0];

    const pageContent = pageData.data.result.content.rendered;

    return addHookData([...hookData, appSettings], {
      props: { pageContent },
      revalidate: 5 * 60,
    });
  } catch (e) {
    return handleError(e, context);
  }
}
