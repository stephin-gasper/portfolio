import PropTypes from "prop-types";
import { cx } from "@linaria/core";
import Link from "next/link";
import { HtmlDecoder } from "@headstartwp/core/react";

import {
  cardDescriptionStyles,
  cardImageStyles,
  cardInnerStyles,
  cardWrapperStyles,
  cardtitleStyles,
} from "./Card.style";

const Card = ({ href, imgSrc, title, children }) => {
  return (
    <li className={cardWrapperStyles}>
      <Link href={href} className={cx(cardInnerStyles, "box-shadow")}>
        <img src={imgSrc} className={cardImageStyles} alt="project" />
        <h3 className={cardtitleStyles}>
          <HtmlDecoder html={title} />
        </h3>
        <p className={cardDescriptionStyles}>
          <HtmlDecoder html={children} />
        </p>
      </Link>
    </li>
  );
};

Card.propTypes = {
  href: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.elementType,
  ]).isRequired,
};

Card.defaultProps = {
  imgSrc: "/placeholder-archive.png",
};

export default Card;
