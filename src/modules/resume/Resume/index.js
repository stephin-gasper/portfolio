import { useCallback, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import useResizeObserver from "@/hooks/useResizeObserver";

import Loader from "@/components/Loader";
import Pagination from "@/components/Pagination";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import ResumeDownload from "../ResumeDownload";

import {
  PDF_VIEWER_OPTIONS,
  RESIZE_OBSERVER_OPTIONS,
  RESUME_PAGE_SIZE,
  RESUME_PATH,
} from "./Resume.constants";
import { resumeContainerStyles } from "./Resume.style";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

const ResumePage = () => {
  const [numPages, setNumPages] = useState(0);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [containerRef, setContainerRef] = useState(null);
  const [containerWidth, setContainerWidth] = useState();

  const handleResize = () => {
    setContainerWidth(window.innerWidth);
  };

  window.addEventListener("load", handleResize);

  const onResize = useCallback((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, RESIZE_OBSERVER_OPTIONS, onResize);

  const onDocumentLoadSuccess = ({ numPages: nextNumPages }) => {
    setNumPages(nextNumPages);
  };

  const onPageChange = (page) => {
    setCurrentPageNumber(page);
  };

  return (
    <>
      <div className={resumeContainerStyles} ref={setContainerRef}>
        <Document
          file={RESUME_PATH}
          onLoadSuccess={onDocumentLoadSuccess}
          options={PDF_VIEWER_OPTIONS}
          className="resumeview"
          loading={Loader}
        >
          <Page pageNumber={currentPageNumber} width={containerWidth} />
        </Document>
      </div>
      {numPages ? (
        <Pagination
          currentPage={currentPageNumber}
          totalCount={numPages}
          pageSize={RESUME_PAGE_SIZE}
          onPageChange={onPageChange}
        />
      ) : null}
      <ResumeDownload resumePath={RESUME_PATH} />
    </>
  );
};

export default ResumePage;
