import Link from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties } from "react";

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface Props {
  text: string;
  href: string;
}

export const ActiveLink = ({ text, href }: Props) => {
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};
