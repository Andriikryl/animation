import CopyCode from "../copyCode/CopyCode";
import styles from "./style.module.css";
type CodeProps = {
  code: string;
};

const Code = ({ code }: CodeProps) => {
  return (
    <div className={styles.code__box}>
      <code>{code}</code>
      <CopyCode code={code} />
    </div>
  );
};

export default Code;
