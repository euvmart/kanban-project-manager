import { forwardRef, useImperativeHandle, useState } from "react";
import { InputWithButtonDelete } from "../inputs";
import "./index.css";

export const WidgetInputAndDelete = forwardRef(function WidgetInputAndDelete(
  props,
  ref
) {
  const [list, setList] = useState(props.initialValue);
  function deleteInput(event) {
    const id = event.target.parentElement.getAttribute("id");
    const stateReplace = [...list];
    setList(stateReplace.filter((input) => input.id != id));
  }

  useImperativeHandle(ref, () => {
    return {
      addInput() {
        const id = list.length + 1;
        setList((prev) => [
          ...prev,
          {
            id: id,
            name: props.name,
            placeholder: props.placeholder,
          },
        ]);
      },
    };
  });

  return (
    <div className="list-inputs-and-delete">
      {list.map((item) => (
        <InputWithButtonDelete
          key={item.id}
          id={item.id}
          nameInput={item.name}
          placeholder={item.placeholder}
          defaultValue={item.defaultValue}
          handlerClick={deleteInput}
        />
      ))}
    </div>
  );
});
