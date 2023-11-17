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
      className={cn(styles.countdown, "flex w-[100px] items-center flex-col")}
    >
      <div className={styles.countdownBlockBackface}>
        <div className={cn(styles.countdownBlock)}>
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
