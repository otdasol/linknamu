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
      className="flex h-16 w-full items-center justify-center rounded-2xl border-2 border-foreground/80 bg-background font-medium transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
    >
      {title}
    </a>
  );
}
