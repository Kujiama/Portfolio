import "./capstone.css";

import React, { useState } from 'react';
import { Page, Document, pdfjs} from 'react-pdf';

import Project_Summary from "../../pdf/ProjectSummary.pdf"
import Project_Plan from "../../pdf/ProjectPlan.pdf"
import Project_Vision from "../../pdf/ProjectVision.pdf"
import Technological_Requirements from "../../pdf/TechnologicalRequirements.pdf"
import Project_Status_Report_1 from "../../pdf/Project_Status_Report_1.pdf"
import Project_Status_Report_2 from "../../pdf/Project_Status_Report_2.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const capstoneFiles = [
  {
    title: "Project Summary",
    content:
      "This document provides a summary of the project, including the problem statement, objectives, and scope.",
    link: Project_Summary
  },
  {
    title: "Project Plan",
    content:
      "This document provides a detailed plan for the project, including the schedule, budget, and resources.",
    link: Project_Plan
  },
  {
    title: "Project Vision",
    content:
      "This document provides a vision for the project, including the goals, objectives, and success criteria.",
    link: Project_Vision
  },
  {
    title: "Technological Requirements",
    content:
      "This document provides the technological requirements for the project, including hardware, software, and infrastructure.",
    link: Technological_Requirements
  },
  {
    title: "Project Status Report 1",
    content:
      "This document provides a status report for the project, including progress, issues, and risks.",
    link: Project_Status_Report_1
  },
  {
    title: "Mockup",
    content:
      "This Link provides a mockup for the project, including the design and layout.",
    link: "https://www.figma.com/files/project/128085925/Team-project?fuid=1276709417139857312"
  },
  {
    title: "Project Status Report 2",
    content:
      "This document provides a status report for the project, including progress, issues, and risks.",
    link: Project_Status_Report_2
  }
];

const Capstone = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // A function to handle link clicks that might be external URLs
  function handleLinkClick(file) {
    if (file.link.startsWith('http')) {
      window.open(file.link, '_blank');
    } else {
      setSelectedFile(file);
    }
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Capstone Project Files</h2>

        <p className="text-gray-600 text-center mb-5">
            As it is my last semester in college, I am currently working on my capstone project. Here are some of the documents and mockups that I and my team have created for the project.
        </p>
        <ul className="divide-y divide-gray-300">
          {capstoneFiles.map((file, index) => (
            <li key={index} className="py-2 cursor-pointer hover:bg-gray-100 flex justify-between items-center">
              <span onClick={() => handleLinkClick(file)}>
                {file.title}
              </span>
              {file.link.endsWith('.pdf') ? (
                <span
                  onClick={() => setSelectedFile(file)}
                  className="text-blue-500 hover:text-blue-600 cursor-pointer"
                >
                  View PDF
                </span>
              ) : (
                <a
                  href={file.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  View Full
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
      {selectedFile && selectedFile.link.endsWith('.pdf') ? (
        <div className="flex flex-col items-center mt-4">
          <Document
            file={selectedFile.link}
            onLoadSuccess={onDocumentLoadSuccess}
            className="pdf-container w-full lg:w-3/4 xl:w-1/2"
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setPageNumber(pageNumber - 1)}
              disabled={pageNumber <= 1}
              className="text-blue-500 hover:text-blue-600 disabled:opacity-50"
            >
              Previous
            </button>
            <span>
              Page {pageNumber} of {numPages}
            </span>
            <button
              onClick={() => setPageNumber(pageNumber + 1)}
              disabled={pageNumber >= numPages}
              className="text-blue-500 hover:text-blue-600 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        // Only render the file description when no PDF is selected
        <div className="p-4 border border-gray-300 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">{selectedFile?.title}</h3>
          <p className="text-gray-600">{selectedFile?.content}</p>
        </div>
      )}
    </div>
  );
};

export default Capstone;