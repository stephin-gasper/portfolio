import PropTypes from "prop-types";
import { css } from "@linaria/core";

import LinkButton from "@/components/LinkButton";

import DownloadIcon from "./DownloadIcon";

export const containerStyles = css`
  margin-top: 1.875rem;
  text-align: center;
`;

const ResumeDownload = ({ resumePath }) => (
  <div className={containerStyles}>
    <LinkButton
      url={resumePath}
      target="_blank"
      rel="noreferrer"
      download="Stephin Resume"
      text="Download Resume"
      icon={DownloadIcon}
    />
  </div>
);

ResumeDownload.propTypes = {
  resumePath: PropTypes.string.isRequired,
};

export default ResumeDownload;
