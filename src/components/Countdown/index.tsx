"use client";
import React, { useMemo } from "react";
import styles from "./style.module.scss";
import cn from "classnames";

const Countdown = ({
  prev,
  count,
  label,
}: {
  prev: any;
  count: any;
  label: any;
}) => {
  const padPrev = useMemo(() => {
    return String(prev).padStart(2, "0");
  }, [prev]);

  const padCount = useMemo(() => {
    return String(count).padStart(2, "0");
  }, [count]);

  return (
    <div
      className={cn(
        styles.countdown,
        "flex  w-[100px] h-[100px] md:w-[200px] md:h-[200px] items-center  flex-col  "
      )}
    >
      <div
        className={cn(
          styles.countdownBlockBackface,
          "w-[60px] sm:w-[80px] md:w-[120px] "
        )}
      >
        <div
          className={cn(
            styles.countdownBlock,
            "leading-[60px] sm:leading-[63px] md:leading-[96px] text-[30px] md:text-[48px]"
          )}
        >
          <div className={cn(styles.top, styles.flip)}>{padPrev}</div>
          <div className={styles.top}>{padCount}</div>
          <div className={styles.bottom}>{padPrev}</div>
          <div className={cn(styles.bottom, styles.flip)}>{padCount}</div>
          <div className={styles.countdownBlockOverlay}></div>
          <div className={styles.countdownBlockSide}></div>
        </div>
      </div>
      <p
        className={cn(
          styles.label,
          "text-[16px] sm:text-[18px] md:text-[24px]"
        )}
      >
        {label}
      </p>
    </div>
  );
};

export default Countdown;
