import { useNavigate } from "react-router-dom";
import "./index.css";

export function Modal(props) {
  const nav = useNavigate();
  return (
    <section
      onClick={(e) => {
        if (e.target.classList.contains("container-modal")) {
          nav(-1);
        }
      }}
      className="container-modal"
    >
      {props.children}
    </section>
  );
}
