import { changeTheme } from "./changeTheme";
import "./index.css";
import { Sun ,Moon} from "../../assets/svg";
function ToggleTheme() {
  return (
    <div className={`toggle-theme`} >
      <Sun/>
      <div className="toggle-theme_checkbox" >
        <label htmlFor="change-theme-color" ></label>
        <input
          className="toggle-theme_checkbox--input"
          type="checkbox"
          name="theme"
          id="change-theme-color"
          onChange={(e) => {
            changeTheme(e.target.checked);
          }}
        />
        <span className="toggle-theme_checkbox--form"></span>
      </div>
      <Moon />
    </div>
  );
}

export { ToggleTheme };
