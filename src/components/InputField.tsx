import { Input } from "../components/Input";

export const InputField = ({
  text,
  placeholder,
  linkText,
}: {
  text: string;
  linkText?: string;
  placeholder?: string;
}) => {
  return (
    <div className="flex flex-col text-left gap-2 w-full">
      <Input.Label linkText={linkText}>{text}</Input.Label>
      <Input.Field placeholder={placeholder} />
    </div>
  );
};