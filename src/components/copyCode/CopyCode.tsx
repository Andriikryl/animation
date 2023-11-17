"use client";
import { CopyIcon, CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import styles from "./style.module.css";

type CopyCode = {
  code: string;
};

const CopyCode: React.FC<CopyCode> = ({ code }) => {
  const [hasCheckIcon, setHasCheckIcon] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setHasCheckIcon(true);

    setTimeout(() => {
      setHasCheckIcon(false);
    }, 1000);
  };

  return (
    <button className={styles.button} onClick={onCopy}>
      {hasCheckIcon ? (
        <CheckIcon className={styles.icon} />
      ) : (
        <CopyIcon className={styles.icon} />
      )}
    </button>
  );
};

export default CopyCode;
