import PropTypes from "prop-types";

import DownloadIcon from "./DownloadIcon";

import {
  resumeDownloadContainerStyles,
  resumeDownloadStyles,
} from "./ResumeDownload.style";

const ResumeDownload = ({ resumePath }) => (
  <div className={resumeDownloadContainerStyles}>
    <a
      href={resumePath}
      target="_blank"
      rel="noreferrer"
      download="Stephin Resume"
      className={resumeDownloadStyles}
    >
      <DownloadIcon />
      &nbsp; <b>Download Resume</b>
    </a>
  </div>
);

ResumeDownload.propTypes = {
  resumePath: PropTypes.string.isRequired,
};

export default ResumeDownload;
