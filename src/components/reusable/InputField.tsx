import React from "react";

type inputProps = {
  name?: string;
  value?: string;
  placeholder?: string;
  className?: string;
  type?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: any;
};

function InputField({
  name,
  value,
  placeholder,
  type = "text",
  error,
  onChange,
  onBlur,
  className,
}: inputProps) {
  return (
    <div>
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        className={[
          "input__field",
          error ? "error" : "",
          type == "password" ? "opacity-60" : "opacity-100",
        ].join(" ")}
      />
    </div>
  );
}

export default InputField;
