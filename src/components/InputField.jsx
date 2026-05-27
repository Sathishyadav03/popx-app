function InputField({
  label,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}) {
  return (
    <div className="input-group">

      <label>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />

    </div>
  );
}

export default InputField;