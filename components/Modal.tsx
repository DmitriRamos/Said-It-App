import React, { useCallback } from "react";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Modal = (props: ModalProps) => {
  const handleClose = useCallback(() => {
    if (props.disabled) {
      return;
    }

    props.onClose();
  }, [props]);

  const handleSubmit = useCallback(() => {
    if (props.disabled) {
      return;
    }

    props.onSubmit();
  }, [props]);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800 bg-opacity-70">
        <div className="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto">
          {/* Content */}
          <div className="h-full lg:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
            {/* Header */}
            <div className="flex items-center justify-between p-10 rounded-t">
              <h3 className="text-3xl font-semibold text-white">
                {props.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
