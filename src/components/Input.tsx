import classNames from "classnames";

export const Input = {
  Label: ({
    children,
    cn,
    linkText,
    linkRedirect
  }: {
    cn?: string;
    placeholder?: string;
    children: React.ReactNode;
    linkText?: string;
    linkRedirect?: string;
  }) => {
    return (
      <div className="flex items-center justify-between gap-2">
        <p className="text-slate-800">{children}</p>
        {linkText && (
          <a
            href={linkRedirect}
            className={classNames(
              "text-sm",
              "text-emerald-600",
              "hover:underline",
              cn,
            )}
          >
            {linkText}
          </a>
        )}
      </div>
    );
  },

  Field: ({
    placeholder,
  }: {
    cn?: string;
    placeholder?: string;
  } & React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
      <input
        className="border border-gray-300 rounded-md p-2"
        placeholder={placeholder}
      />
    );
  },
};
