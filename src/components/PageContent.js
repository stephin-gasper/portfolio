import PropTypes from "prop-types";
import { usePost } from "@headstartwp/next";
import { HtmlDecoder, BlocksRenderer } from "@headstartwp/core/react";

import Loader from "./Loader";

/**
 * This is an example of how an inner component can access the data without explicitly passing the data to it.
 * This reduces prop drilling but creates an implicit dependency with its parent. Use this strategy with caution and on components that are tied to a particular route.
 *
 * @param {object} props - Props object
 * @param {object} props.params - params inside props
 *
 * @returns {import("react").ReactNode} - PageContent JSX element.
 */
export const PageContent = ({ params }) => {
  // This won't require a refetch as long as the data has already been fetched at the page level.
  // additionally, if the request has not been SSR'd, it will be fetched on the client only once, regardless of how many call to usePost (with the same params) you make
  const { data, loading } = usePost(params);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <h1>
        <HtmlDecoder html={data.post.title.rendered} />
      </h1>
      <BlocksRenderer html={data.post.content.rendered} />
    </>
  );
};

PageContent.propTypes = {
  params: PropTypes.shape({}).isRequired,
};
