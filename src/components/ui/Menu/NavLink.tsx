import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cva } from "class-variance-authority";

type NavLinkProps = {
  children: React.ReactNode;
  hasMarginLeft?: boolean;
} & LinkProps;

const linkStyles = cva("relative flex h-14 text-gray-800 items-center", {
  variants: {
    activeLink: {
      true: "after:absolute after:bottom-0 after:block after:h-0.5 after:w-full after:bg-emerald-700 after:rounded-t-sm text-emerald-700",
      false: "hover:text-gray-600"
    },
    hasMarginLeft: {
      true: "ml-9"
    }
  }
});

const NavLink = ({
  hasMarginLeft = false,
  children,
  ...rest
}: NavLinkProps) => {
  const { asPath } = useRouter();

  const activeLink = asPath === rest.href;

  return (
    <Link {...rest} className={linkStyles({ activeLink, hasMarginLeft })}>
      {children}
    </Link>
  );
};

export default NavLink;
