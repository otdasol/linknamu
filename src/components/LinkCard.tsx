type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-14 w-full items-center justify-center rounded-2xl border border-glass-border bg-glass font-medium shadow-[0_4px_16px_-8px_var(--color-shadow)] backdrop-blur-md transition duration-300 ease-out hover:-translate-y-px hover:bg-glass-hover hover:shadow-[0_8px_24px_-10px_var(--color-shadow)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {title}
    </a>
  );
}
