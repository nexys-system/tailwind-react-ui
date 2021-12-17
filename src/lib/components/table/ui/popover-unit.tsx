// import React, { useState } from "react";
// import { Components } from "@nexys/tailwind-react-ui";

// interface PopoverFilterProps<A> {
//   children: React.ReactNode | JSX.Element;
//   onReset: () => void;
//   isActive?: boolean;
// }

// const PopoverFilter = <A,>(props: PopoverFilterProps<A>): JSX.Element => {
//   const [open, setOpen] = useState<boolean>(false);
//   return (
//     <>
//       <button onClick={() => setOpen(!open)}>Filter</button>
//       <Components.PopupMenu
//         open={open}
//         onCancel={() => setOpen(false)}
//         position="z-10 right-50 inset-2 w-64 h-full"
//       >
//         <>{props.children}</>
//       </Components.PopupMenu>
//     </>
//   );
// };

// export default PopoverFilter;
import React from "react";
import { Popover, ArrowContainer } from "react-tiny-popover";
import * as Icons from "../../../icons";

interface PopoverFilterProps<A> {
  children: React.ReactNode | JSX.Element;
  onReset: () => void;
  isActive?: boolean;
}

export default <A,>(props: PopoverFilterProps<A>): JSX.Element => {
  const { isActive, onReset } = props;
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | undefined>(
    undefined
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(undefined);
  };

  const open = Boolean(anchorEl);

  return (
    <Popover
      isOpen={open}
      positions={["bottom"]}
      padding={10}
      onClickOutside={() => handleClose()}
      ref={anchorEl as any} // if you'd like a ref to your popover's child, you can grab one here
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor={"white"}
          arrowSize={10}
          arrowStyle={{ opacity: 0.7 }}
          className="popover-arrow-container"
          arrowClassName="popover-arrow"
        >
          <div className="bg-white p-5 shadow-md max-h-64 overflow-scroll">
            {props.children}
          </div>
        </ArrowContainer>
      )}
    >
      <span>
        <button onClick={handleClick}>
          <Icons.Filter className={`${props.isActive && "text-primary"}`} />
        </button>
        {isActive && (
          <button
            onClick={() => onReset()}
            // className={classes.iconButton}
            data-testid="reset-button"
          >
            <Icons.XCircle />
          </button>
        )}
      </span>
    </Popover>
  );
};
