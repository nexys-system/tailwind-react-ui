import React from "react";
import * as Icons from "../../icons";

interface Step {
  Icon: () => JSX.Element;
  title?: string;
}
interface StepInternal extends Step {
  idx: number;
  active: boolean;
  passed: boolean;
  last: boolean;
}

interface Props {
  steps: Step[];
  activeStep: number;
}

/**
 * 
 * @param props 
 * <div className="flex items-center text-primary-500 relative">
            <div
              className="
            rounded-full
            transition
            duration-500
            ease-in-out
            h-12
            w-12
            py-3
            border-2 border-primary-500
          "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-bookmark"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div
              className="
            absolute
            top-0
            -ml-10
            text-center
            mt-16
            w-32
            text-xs
            font-medium
            uppercase
            text-primary-500
          "
            >
              Personal
            </div>
          </div>
          <div
            className="
          flex-auto
          border-t-2
          transition
          duration-500
          ease-in-out
          border-primary-500
        "
          ></div>
          <div className="flex items-center text-white relative">
            <div
              className="
            rounded-full
            transition
            duration-500
            ease-in-out
            h-12
            w-12
            py-3
            border-2
            bg-primary-500
            border-primary-500
          "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-user-plus"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
            </div>
            <div
              className="
            absolute
            top-0
            -ml-10
            text-center
            mt-16
            w-32
            text-xs
            font-medium
            uppercase
            text-primary-500
          "
            >
              Account
            </div>
          </div>
          <div
            className="
          flex-auto
          border-t-2
          transition
          duration-500
          ease-in-out
          border-gray-300
        "
          ></div>
          <div className="flex items-center text-gray-500 relative">
            <div
              className="
            rounded-full
            transition
            duration-500
            ease-in-out
            h-12
            w-12
            py-3
            border-2 border-gray-300
          "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-mail"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div
              className="
            absolute
            top-0
            -ml-10
            text-center
            mt-16
            w-32
            text-xs
            font-medium
            uppercase
            text-gray-500
          "
            >
              Message
            </div>
          </div>
          <div
            className="
          flex-auto
          border-t-2
          transition
          duration-500
          ease-in-out
          border-gray-300
        "
          ></div>
          <div className="flex items-center text-gray-500 relative">
            <div
              className="
            rounded-full
            transition
            duration-500
            ease-in-out
            h-12
            w-12
            py-3
            border-2 border-gray-300
          "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-database"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            </div>
            <div
              className="
            absolute
            top-0
            -ml-10
            text-center
            mt-16
            w-32
            text-xs
            font-medium
            uppercase
            text-gray-500
          "
            >
              Confirm
            </div>
          </div>
 */

const Step = ({ title, Icon, idx, active, passed, last }: StepInternal) => {
  return (
    <>
      <div className="flex items-center text-primary relative">
        <div
          className={`rounded-full
        transition
        duration-500
        ease-in-out
        h-12
        w-12
        p-3
        flex items-center
        border-2 border-${active || passed ? "primary" : "gray-300"}
        text-${active || passed ? "primary" : "gray-300"}`}
        >
          {/* {Icon ? ( */}
          {/* //   <Icon */}
          {/* //     className={active || passed ? "text-primary" : "text-gray-300"}
        //   />
        // ) : (
        //   <svg
        //     xmlns="http://www.w3.org/2000/svg"
        //     width="100%"
        //     height="100%"
        //     fill="none"
        //     viewBox="0 0 24 24"
        //     stroke="currentColor"
        //     stroke-width="2"
        //     stroke-linecap="round"
        //     stroke-linejoin="round"
        //     className="feather feather-bookmark"
        //   >
        //     <text>{idx + 1}</text>
        //   </svg>
        // )} */}
          {
            passed ? (
              <Icons.Check
                className="text-center"
                svgProps={{
                  strokeWidth: 2,
                  width: "100%",
                  height: "100%",
                  viewBox: "0 0 24 24",
                }}
              />
            ) : (
              <Icon />
            )
            // (
            //   <svg
            //     xmlns="http://www.w3.org/2000/svg"
            //     width="100%"
            //     height="100%"
            //     fill="none"
            //     viewBox="0 0 24 24"
            //     stroke="currentColor"
            //     stroke-width="2"
            //     strokeLinecap="round"
            //     strokeLinejoin="round"
            //     className="feather feather-bookmark"
            //   >
            //     <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            //   </svg>
            // )
          }
        </div>
        <div
          className="
  absolute
  top-0
  -ml-10
  text-center
  mt-16
  w-32
  text-xs
  font-medium
  uppercase
  text-primary-500
"
        >
          {title}
        </div>
      </div>
      {!last && (
        <div
          className={`
          flex-auto
          border-t-2
          transition
          duration-500
          ease-in-out
          border-${active || passed ? "primary" : "gray-300"}
          `}
        ></div>
      )}
    </>
  );
};

export default ({ steps, activeStep = 0 }: Props) => {
  return (
    <div className="p-5">
      <div className="mx-4 p-4">
        <div className="flex items-center">
          {steps.map((step, i) => (
            <Step
              key={i}
              idx={i}
              title={step.title}
              active={i === activeStep}
              passed={i < activeStep}
              last={i === steps.length - 1}
              Icon={step.Icon}
            />
          ))}
        </div>
      </div>
      <div className="mt-8 p-4">
        <div className="flex p-2 mt-4">
          <button
            className="
          bg-gray-200
          text-gray-800
          active:bg-primary-600
          font-bold
          uppercase
          text-sm
          px-6
          py-3
          rounded
          shadow
          hover:shadow-lg
          outline-none
          focus:outline-none
          mr-1
          mb-1
          ease-linear
          transition-all
          duration-150
        "
            type="button"
          >
            Previous
          </button>
          <div className="flex-auto flex flex-row-reverse">
            <button
              className="
            mx-3
            bg-primary-500
            text-white
            active:bg-primary-600
            font-bold
            uppercase
            text-sm
            px-6
            py-3
            rounded
            shadow
            hover:shadow-lg
            outline-none
            focus:outline-none
            mr-1
            mb-1
            ease-linear
            transition-all
            duration-150
          "
              type="button"
            >
              Next
            </button>
            <button
              className="
            text-primary-500
            bg-transparent
            border border-solid border-primary-500
            hover:bg-primary-500 hover:text-white
            active:bg-primary-600
            font-bold
            uppercase
            text-sm
            px-6
            py-3
            rounded
            outline-none
            focus:outline-none
            mr-1
            mb-1
            ease-linear
            transition-all
            duration-150
          "
              type="button"
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
