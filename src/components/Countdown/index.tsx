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
        "md:flex grid w-[100px] h-[100px] md:w-[200px] md:h-[200px] items-center grid-cols-2 md:flex-col "
      )}
    >
      <div className={styles.countdownBlockBackface}>
        <div className={cn(styles.countdownBlock, "w-[100px]   md:w-[120px]")}>
          <div className={cn(styles.top, styles.flip)}>{padPrev}</div>
          <div className={styles.top}>{padCount}</div>
          <div className={styles.bottom}>{padPrev}</div>
          <div className={cn(styles.bottom, styles.flip)}>{padCount}</div>
          <div className={styles.countdownBlockOverlay}></div>
          <div className={styles.countdownBlockSide}></div>
        </div>
      </div>
      <p className={cn(styles.label)}>{label}</p>
    </div>
  );
};

export default Countdown;
