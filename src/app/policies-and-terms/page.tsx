"use client";
import { useState } from "react";
import { PRIVACY_AND_POLICY } from "@/app/data/constants";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@/app/style/scrollbar.css";
import Image from "next/image";
import { MdDownload } from "react-icons/md";
import Link from "next/link";

const Policy = () => {
  const [currentPdf, setCurrentPdf] = useState(
    "/antissubornoeanticorrupcao.pdf"
  );
  const [currentDescription, setCurrentDescription] = useState(
    PRIVACY_AND_POLICY.texts.policyAndAntiCorruption.pt
  );

  const handlePdfChange = (href: string, description: string) => {
    setCurrentPdf(href);
    setCurrentDescription(description);
  };

  if (!PRIVACY_AND_POLICY) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="w-full flex flex-col">
        <div
          className="flex flex-col md:flex-row px-4 sm:px-6 md:px-16 lg:px-36 gap-[90px] mt-20 max-w-[1920px] mx-auto w-full"
          id="policy"
        >
          <div className="hidden md:flex flex-col max-w-[260px]">
            <h1 className="pb-5 font-semibold text-2xl leading-[22px]">
              {PRIVACY_AND_POLICY.texts.firstText.pt}
            </h1>
            <div className="h-1 mb-11 rounded-lg max-w-[58px] bg-[#7747FF]"></div>
            {PRIVACY_AND_POLICY.texts.links.map((item, index) => (
              <div key={index} className="flex flex-col">
                <span className="font-semibold text-lg leading-[22px] pb-6">
                  {item.mainText.pt}
                </span>
                <div className="flex flex-col">
                  <button
                    onClick={() =>
                      handlePdfChange(item.href, item.description.pt)
                    }
                    className={`underline font-normal text-base leading-[22px] text-start ${
                      item.hrefSecond ? "mb-4" : ""
                    }`}
                  >
                    {item.description.pt}
                  </button>

                  {item.hrefSecond && (
                    <button
                      onClick={() =>
                        handlePdfChange(
                          item.hrefSecond,
                          item.secondDescription.pt
                        )
                      }
                      className="underline font-normal text-base leading-[22px] text-start"
                    >
                      {item.secondDescription.pt}
                    </button>
                  )}
                  {item.hrefThird && (
                    <button
                      onClick={() =>
                        handlePdfChange(
                          item.hrefThird,
                          item.thirdDescription.pt
                        )
                      }
                      className="underline font-normal text-base leading-[22px] text-start pt-4"
                    >
                      {item.thirdDescription.pt}
                    </button>
                  )}
                </div>

                {index !== PRIVACY_AND_POLICY.texts.links.length - 1 && (
                  <div className="h-[1px] max-w-[80px] bg-[#D7D7D7] my-8"></div>
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden flex flex-col">
            <h1 className="font-semibold text-2xl leading-[22px] pb-5">
              {PRIVACY_AND_POLICY.texts.firstText.pt}
            </h1>
            <div className="h-1 mb-11 rounded-lg max-w-[58px] bg-[#7747FF]"></div>
            <div className="flex flex-row overflow-x-auto pdf-viewer-container gap-6">
              {PRIVACY_AND_POLICY.texts.links.map((item, index) => (
                <div key={index} className="flex flex-row">
                  <div className="flex flex-col min-w-[225px] pb-4">
                    <span className="font-semibold text-lg leading-[22px] pb-6">
                      {item.mainText.pt}
                    </span>
                    <div className="flex flex-col">
                      <button
                        onClick={() =>
                          handlePdfChange(item.href, item.description.pt)
                        }
                        className={`underline font-normal text-base leading-[22px] text-start ${
                          item.hrefSecond ? "mb-4" : ""
                        }`}
                      >
                        {item.description.pt}
                      </button>

                      {item.hrefSecond && (
                        <button
                          onClick={() =>
                            handlePdfChange(
                              item.hrefSecond,
                              item.secondDescription.pt
                            )
                          }
                          className="underline font-normal text-base leading-[22px] text-start"
                        >
                          {item.secondDescription.pt}
                        </button>
                      )}
                      {item.hrefThird && (
                        <button
                          onClick={() =>
                            handlePdfChange(
                              item.hrefThird,
                              item.thirdDescription.pt
                            )
                          }
                          className="underline font-normal text-base leading-[22px] text-start pt-4"
                        >
                          {item.thirdDescription.pt}
                        </button>
                      )}
                    </div>
                  </div>

                  {index !== PRIVACY_AND_POLICY.texts.links.length - 1 && (
                    <Image
                      key={`line-${index}`}
                      src={PRIVACY_AND_POLICY.images.line.src}
                      alt={PRIVACY_AND_POLICY.images.line.alt.pt}
                      width={2}
                      height={144}
                      className="max-h-[144px] max-w-[2px]"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col w-full">
            <div className="sm:flex w-full gap-3 justify-between">
              <h1 className="pb-[52px] font-medium text-[24px] leading-[46px] sm:hidden flex">
                <Link href="/">
                  <u>Página Inicial</u>
                </Link>
              </h1>
              <h1 className="pb-[52px] font-medium text-[24px] leading-[46px] sm:hidden flex">
                <a href={PRIVACY_AND_POLICY.texts.totalPolicy.href}>
                  <u>{PRIVACY_AND_POLICY.texts.totalPolicy.label.pt}</u>
                </a>
              </h1>
              <h1 className="pb-[52px] font-medium text-[38px] leading-[46px]">
                {PRIVACY_AND_POLICY.texts.policy.pt}
              </h1>
              <h1 className="pb-[52px] font-medium text-[24px] leading-[46px]  hidden sm:flex">
                <Link href="/">
                  <u>Página Inicial</u>
                </Link>
              </h1>
              <h1 className="pb-[52px] font-medium text-[24px] leading-[46px] hidden sm:flex">
                <a href={PRIVACY_AND_POLICY.texts.totalPolicy.href}>
                  <u>{PRIVACY_AND_POLICY.texts.totalPolicy.label.pt}</u>
                </a>
              </h1>
            </div>
            <div className="flex justify-between items-start gap-5">
              <span className="font-normal text-lg leading-[24px]">
                {currentDescription}
              </span>

              <a
                href={currentPdf}
                download
                className="flex  xs:flex-row text-start self-start gap-2 text-base leading-[20px] font-bold text-[#7747FF]"
              >
                <MdDownload color="#7747FF" size={20} />

                {PRIVACY_AND_POLICY.images.downloadPolicy.label.pt}
              </a>
            </div>
            <div className="w-full h-[1px] bg-[#D7D7D7] mb-2 mt-4"></div>
            {/* <span className="font-normal text-sm leading-[24px] text-[#6D6D6D] pb-6">
              {PRIVACY_AND_POLICY.texts.date.pt}
            </span> */}

            <div className="bg-[#F5F5F5] h-auto rounded-lg mb-24 w-full pdf-viewer-container max-h-[1005px]">
              <Worker
                workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
              >
                <Viewer fileUrl={currentPdf} />
              </Worker>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Policy;
