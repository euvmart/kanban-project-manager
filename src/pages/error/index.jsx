import "./index.css";
import { Link } from "react-router-dom";
import { SearchTool, World } from "../../assets/svg";

function ErrorPage() {
  return (
    <section className="ctn-error-page">
      <div className="ctn-error-page_content">
        <div className="content_animation">
          <span className="world">
            <World />
          </span>
          <span className="search">
            <SearchTool />
          </span>
        </div>
        <div className="description">
          <p>Resource not found</p>

          <Link className="button btn-primary-solid" to="/">
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export { ErrorPage };
