function Button({
  isPrimary,
  handlerClick = null,
  type,
  children = null,
  name = "",
  value,
}) {
  return (
    <button
      type={type}
      name={name}
      value={value}
      className={`button ${
        isPrimary ? "btn-primary-solid" : "btn-secondary-stroke"
      }`}
      onClick={handlerClick}
    >
      {children}
    </button>
  );
}

export { Button };
