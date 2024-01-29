import { Fragment } from "react";
import PropTypes from "prop-types";
import { cx } from "@linaria/core";
import Link from "next/link";
import { HtmlDecoder } from "@headstartwp/core/react";

import {
  TECH_STACK_MAP,
  WORK_PLACEHOLDER_IMAGE_PATH,
} from "../Works.constants";
import {
  cardDescriptionStyles,
  cardImageStyles,
  cardInnerStyles,
  cardContentStyles,
  cardWrapperStyles,
  cardtitleStyles,
  techStackHighlightStyles,
  teckStackHighlightItems,
} from "./Card.style";

const Card = ({ id, href, imgSrc, title, techStackHighlights, children }) => (
  <li className={cardWrapperStyles}>
    <Link href={href} className={cx(cardInnerStyles, "box-shadow")}>
      <img src={imgSrc} className={cardImageStyles} alt="project" />
      <div className={cardContentStyles}>
        <h3 className={cardtitleStyles}>
          <HtmlDecoder html={title} />
        </h3>
        <p className={cardDescriptionStyles}>
          <HtmlDecoder html={children} />
        </p>
        {techStackHighlights.length ? (
          <p className={techStackHighlightStyles}>
            {techStackHighlights.map((item, index) => (
              <Fragment key={`${id}-${item}`}>
                <span className={teckStackHighlightItems}>
                  {TECH_STACK_MAP[item]}
                </span>
                {(index + 1) % techStackHighlights.length !== 0 ? (
                  <span>&nbsp;.&nbsp;</span>
                ) : null}
              </Fragment>
            ))}
          </p>
        ) : null}
      </div>
    </Link>
  </li>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.elementType,
  ]).isRequired,
  techStackHighlights: PropTypes.arrayOf(PropTypes.string),
};

Card.defaultProps = {
  imgSrc: WORK_PLACEHOLDER_IMAGE_PATH,
  techStackHighlights: [],
};

export default Card;
