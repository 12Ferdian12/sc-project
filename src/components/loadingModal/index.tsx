import { useSelector } from "@/hooks";
import { LoadingModalState } from "@/redux/reducer/loadingModalReducer";
import React from "react";

const LoadingModal = () => {
  const loadingModal = useSelector((state) => state.loadingModal);

  return (
    <div
      className={`
        pin fixed left-0 top-0 z-[9999] h-screen w-screen overflow-y-hidden bg-stone-700/[.8] duration-300
        ${loadingModal.isLoadingOpen ? "block" : "hidden"}
        `}
    >
      <div className="bg-neutral-focus inset-0 flex h-full w-full items-center justify-center bg-opacity-25 animate-bounce">
        <div className="flex aspect-square w-[200px] flex-col items-center justify-center rounded-full bg-white shadow-xl">
          <div className="max-w-[6rem]">Loading...</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;
