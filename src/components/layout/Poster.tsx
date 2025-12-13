export function PosterSection({ children }: { children: React.ReactNode }) {
  return <section className="mx-auto max-w-6xl px-6 py-20">{children}</section>;
}

export function Hairline() {
  return <hr className="my-12 border-border" />;
}
