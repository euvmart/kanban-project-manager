import "./index.css";

function Checkbox({ name, isChecked, label }) {
  return (
    <div className="container-checkbox">
      <input hidden name={name} defaultValue="false" />
      <input
        id={name}
        className="checkbox"
        type="checkbox"
        defaultValue={true}
        defaultChecked={isChecked}
        name={name}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

function Select({ name, optionValues, defaultValue = null, id }) {
  return (
    <select name={name} className="select" defaultValue={defaultValue} id={id}>
      {optionValues.map((optionValue, index) => (
        <option key={index} value={optionValue.value}>
          {optionValue}
        </option>
      ))}
    </select>
  );
}

function Input({
  name,
  defaultValue = null,
  isRequired,
  placeholder,
  id,
  type = "text",
}) {
  return (
    <input
      required={isRequired}
      className="input-text"
      name={name}
      defaultValue={defaultValue}
      id={id}
      placeholder={placeholder}
      type={type}
    />
  );
}

function TextArea({ name, defaultValue = null, isRequired, placeholder }) {
  return (
    <textarea
      required={isRequired}
      className="textarea"
      name={name}
      defaultValue={defaultValue}
      id={name}
      placeholder={placeholder}
    ></textarea>
  );
}

function InputWithButtonDelete(props) {
  return (
    <div className="wrapper-input-with-button" id={props.id}>
      <Input
        isRequired={true}
        name={props.nameInput}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
      />

      <button
      type="button"
        onClick={props.handlerClick}
        className="wrapper-input-with-button_button"
      >
        ×
      </button>
    </div>
  );
}

export { Checkbox, Select, Input, TextArea, InputWithButtonDelete };
