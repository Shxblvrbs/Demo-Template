import * as React from "react";
import { AlertDialog as AlertDialogPrimitive } from "@radix-ui/react-alert-dialog";

export const AlertDialog = AlertDialogPrimitive.Root;
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogPortal = AlertDialogPrimitive.Portal;

export const AlertDialogOverlay = React.forwardRef((props, ref) => (
  <AlertDialogPrimitive.Overlay
    ref={ref}
    className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
    {...props}
  />
));
AlertDialogOverlay.displayName = "AlertDialogOverlay";

export const AlertDialogContent = React.forwardRef((props, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className="fixed z-50 grid w-full max-w-lg scale-100 gap-4 border bg-white p-6 shadow-lg duration-200 sm:rounded-lg"
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = "AlertDialogContent";

export const AlertDialogHeader = ({ className, ...props }) => (
  <div className={`flex flex-col space-y-2 text-center sm:text-left ${className}`} {...props} />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

export const AlertDialogFooter = ({ className, ...props }) => (
  <div className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`} {...props} />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

export const AlertDialogTitle = React.forwardRef((props, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className="text-lg font-semibold"
    {...props}
  />
));
AlertDialogTitle.displayName = "AlertDialogTitle";

export const AlertDialogDescription = React.forwardRef((props, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className="text-sm text-gray-500"
    {...props}
  />
));
AlertDialogDescription.displayName = "AlertDialogDescription";

export const AlertDialogAction = React.forwardRef((props, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className="inline-flex h-10 items-center justify-center rounded-md bg-red-600 px-4 font-medium text-white hover:bg-red-700"
    {...props}
  />
));
AlertDialogAction.displayName = "AlertDialogAction";

export const AlertDialogCancel = React.forwardRef((props, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className="mt-2 inline-flex h-10 items-center justify-center rounded-md border px-4 font-medium hover:bg-gray-100 sm:mt-0"
    {...props}
  />
));
AlertDialogCancel.displayName = "AlertDialogCancel";
