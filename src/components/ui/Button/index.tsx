import { cva } from "class-variance-authority";

type ButtonProps = {
  title: string;
  isOutlined?: boolean;
  isFullWidth?: boolean;
  onClick: () => void;
};

const buttonStyles = cva(
  "inline-block rounded px-6 py-3 text-sm font-medium uppercase leading-tight shadow-md",
  {
    variants: {
      isOutlined: {
        true: "border-2 border-blue-600 text-blue-600 transition hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0",
        false:
          "bg-blue-600 border-2 border-blue-600 text-white hover:bg-blue-700 hover:shadow-lg transition duration-150 ease-in-out focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
      },
      isFullWidth: {
        true: "w-full"
      }
    },
    defaultVariants: {
      isOutlined: false,
      isFullWidth: false
    }
  }
);

const Button = ({
  title,
  isOutlined = false,
  isFullWidth = false,
  onClick
}: ButtonProps) => (
  <button
    type="button"
    className={buttonStyles({ isOutlined, isFullWidth })}
    onClick={onClick}
  >
    {title}
  </button>
);

export default Button;
