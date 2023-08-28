import { Form, useNavigate } from "react-router-dom";
import { Button } from "../button";
import "./index.css";
import { Trash } from "../../assets/svg";

function Notification(props) {
  const { message, title, value } = props;
  const nav = useNavigate();

  function cancelHandlerClick() {
    return nav(-1);
  }
  return (
    <Form className={`notification warning`} method="post">
      <header className="notification_header">
        <span className="icon-notificacion">{<Trash />}</span>
        <p className="notification_title">{title}</p>
        <button
          className="notification_cancel-buton"
          onClick={cancelHandlerClick}
        >
          ×
        </button>
      </header>

      <p className="notification_message">{message}</p>
      <div className="notification_buttons">
        <Button isPrimary={true} type="submit" name="option" value={value}>
          Continue
        </Button>
      </div>
    </Form>
  );
}

export { Notification };
