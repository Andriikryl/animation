import CopyCode from "../copyCode/CopyCode";
import styles from "./style.module.css";
type CodeProps = {
  code: string;
};

const Code = ({ code }: CodeProps) => {
  return (
    <div className={styles.code__box}>
      <code className={styles.code}>{code}</code>
      <CopyCode code={code} />
      <span className={styles.artButtonAngleLeft} />
      <span className={styles.artButtonAngleRight} />
    </div>
  );
};

export default Code;
