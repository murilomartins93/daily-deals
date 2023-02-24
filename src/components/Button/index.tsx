import { Link } from "react-router-dom";
import "./styles.css";

type Props = {
  text: string;
};

export default function Button({ text }: Props) {
  return <div className="dd-btn">{text}</div>;
}
