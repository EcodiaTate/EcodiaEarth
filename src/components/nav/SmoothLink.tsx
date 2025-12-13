"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

// NOTICE: "export function", NOT "export default function"
export function SmoothLink({ href, onClick, ...rest }: Props) {
  const router = useRouter();

  const handle = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e);
      if (e.defaultPrevented) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      
      e.preventDefault();
      const navigate = () => router.push(href);
      const anyDoc = document as any;
      if (typeof anyDoc.startViewTransition === "function") {
        anyDoc.startViewTransition(navigate);
      } else {
        navigate();
      }
    },
    [href, onClick, router]
  );

  return <a href={href} onClick={handle} {...rest} />;
}