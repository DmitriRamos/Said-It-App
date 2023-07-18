import React from "react";

interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  return (
    <input
      disabled={props.disabled}
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
      type={props.type}
      className="
    w-full
    p-4
    text-lg
    bg-black
    border-2
    border-neutral-800
    rounded-md
    outline-none
    text-white
    focus:border-sky-500
    focus:border-2
    transition
    disabled:bg-neutral-900
    disbled:opacity-70
    disbled:cursor-not-allowed"
    />
  );
};

export default Input;
