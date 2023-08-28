import { Form } from "react-router-dom";
import "./index.css";
import { Input } from "../../components/inputs";
import { Button } from "../../components/button";
import { useRef } from "react";
import { WidgetInputAndDelete } from "../../components/widget-input-with-delete";
export function AddBoard() {
  const refAddColumn = useRef(null);

  return (
    <section className="section-add-new-board">
      <header className="section-add-new-board_header">
        <p>Create board</p>
      </header>
      <Form className="form-base form-add-board" method="post">
        <div className="form-add-board_data">
          <label htmlFor="name">Name</label>
          <Input
            name="name"
            id="name"
            placeholder="e.g Kon Event"
            isRequired={true}
            defaultValue={''}
          />
        </div>
        <div className="form-add-board_data">
          <div className="ctn-button-add">
            <label>Columns</label>
            <Button
              isPrimary={false}
              type="button"
              handlerClick={() => refAddColumn.current.addInput()}
            >
              +
            </Button>
          </div>
          <div className="list-columns-name">
            <WidgetInputAndDelete
              name="nameColumn"
              placeholder="e.g Evaluate"
              ref={refAddColumn}
              initialValue={[]}
            />
          </div>
        </div>
        <Button isPrimary={true} type="submit" name="option" value="add">
          Save Board
        </Button>
      </Form>
    </section>
  );
}
