import {
  addHookData,
  fetchHookData,
  handleError,
  useAppSettings,
} from "@headstartwp/next";
import dynamic from "next/dynamic";

import { resolveBatch } from "@/utils/promises";

import PageSEO from "@/components/PageSEO";
import FeaturedImage from "@/components/FeaturedImage";

/**
 * Critical: prevents "TypeError: url.replace is not a function" error
 */
const Resume = dynamic(() => import("@/modules/resume/Resume/index"), {
  ssr: false,
});

const ResumePage = () => (
  <>
    <PageSEO title="Resume" />
    <FeaturedImage
      src="/space.webp"
      alt="Raccoon Space Gif"
      staticImageSrc="/space-static.avif"
    />

    <Resume />
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

export default ResumePage;
