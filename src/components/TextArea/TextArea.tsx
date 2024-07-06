import { ComponentProps, useId } from "react";

type TextAreaProps = {
  label?: string;
  required?: boolean;
} & ComponentProps<"textarea">;

function TextArea({ label, required, id, ...props }: TextAreaProps) {
  const textAreaUid = useId();
  const textAreaId = id || textAreaUid;

  return (
    <div className="flex flex-col gap-y-1.5 [&+&]:mt-4">
      <label htmlFor={textAreaId} className="text-sm font-semibold">
        <span>{label}</span>
        {required && <span className="text-red-500 text-sm">*</span>}
      </label>
      <textarea
        id={textAreaId}
        {...props}
        className="border border-gray-400 rounded px-4 py-2.5 focus:outline-none focus:border-gray-950 transition"
      />
    </div>
  );
}

export default TextArea;
