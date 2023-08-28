import "./index.css";
import { Table } from "../../assets/svg";
function Index() {
  return (
    <>
      <header className="section-index">
      </header>
      <div className="container-index-root ">
        <div className="container-index-root_icons">
          <Table />
        </div>
        <h2 className="container-index-root_message">No board selected</h2>
      </div>
    </>
  );
}

export { Index };
