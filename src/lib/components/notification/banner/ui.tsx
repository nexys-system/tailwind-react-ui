import React from "react";
import {
  Close as CloseIcon,
  Speakerphone as SpeakerphoneIcon,
} from "../../../icons";

export interface BannerProps {
  label: string;
  link?: { src: string; label: string };
  onDismiss?: () => void;
  Icon?: () => JSX.Element;
  isHtml?: boolean;
  color: string;
}

export default ({
  label,
  link,
  onDismiss = () => alert("initialize onDismiss event"),
  Icon = () => <SpeakerphoneIcon />,
  isHtml,
  color = "sky",
}: BannerProps) => {
  return (
    <div className={`bg-${color}-500`}>
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-full flex-1 flex ">
            <span className="flex rounded-lg p-2">
              <Icon />
            </span>
            {isHtml ? (
              <div
                dangerouslySetInnerHTML={{ __html: label }}
                className="text-white font-extralight"
              />
            ) : (
              <p className="ml-3 font-medium text-white truncate">{label}</p>
            )}
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            {link && (
              <a
                href={link.src}
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
              >
                {link.label}
              </a>
            )}
          </div>
          <div className="w-full">
            <button
              onClick={onDismiss}
              type="button"
              className="-mr-1 flex p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2 float-right"
            >
              <CloseIcon className="text-white" />
              <span className="hidden md:inline text-white font-extralight">
                Dismiss
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
