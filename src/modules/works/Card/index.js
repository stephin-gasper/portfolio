import { Fragment, useRef } from "react";
import PropTypes from "prop-types";
import { cx } from "@linaria/core";
import Link from "next/link";
import Image from "next/image";
import { HtmlDecoder } from "@headstartwp/core/react";

import {
  TECH_STACK_MAP,
  WORK_PLACEHOLDER_IMAGE_PATH,
} from "../Works.constants";
import {
  cardDescriptionStyles,
  cardImageStyles,
  cardContentStyles,
  cardWrapperStyles,
  cardTitleStyles,
  techStackHighlightStyles,
  teckStackHighlightItems,
  cardTitleLinkStyles,
} from "./Card.style";

const Card = ({ id, href, imgSrc, title, techStackHighlights, children }) => {
  const linkRef = useRef();

  const onCardPress = () => {
    linkRef.current.click();
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li
      className={cx(cardWrapperStyles, "box-shadow")}
      onClick={onCardPress}
      onKeyDown={onCardPress}
    >
      <div className="dyamic-image-wrapper">
        <Image
          src={imgSrc}
          alt="project"
          fill
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          className={cx(cardImageStyles, "dyamic-image")}
        />
      </div>
      <div className={cardContentStyles}>
        <h3 className={cardTitleStyles}>
          <Link href={href} className={cardTitleLinkStyles} ref={linkRef}>
            <HtmlDecoder html={title} />
          </Link>
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
    </li>
  );
};

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
