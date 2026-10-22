import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <header className="flex w-full flex-col items-center gap-5 text-center">
      <Image
        src={imageUrl}
        alt={`${name} 프로필 사진`}
        width={256}
        height={256}
        preload
        className="size-28 rounded-full object-cover ring-4 ring-glass-border shadow-[0_16px_32px_-12px_var(--color-shadow)] sm:size-32"
      />
      <div className="flex flex-col gap-1.5">
        <h1 className="text-2xl font-bold tracking-tight">{name}</h1>
        <p className="text-sm leading-relaxed text-foreground/60">{bio}</p>
      </div>
    </header>
  );
}
