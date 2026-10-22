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
        width={240}
        height={240}
        preload
        className="aspect-square w-3/5 max-w-60 rounded-full border-2 border-foreground/80 object-cover"
      />
      <h1 className="text-base">
        <span className="font-bold">{name}</span>
        <span className="text-foreground/70">, {bio}</span>
      </h1>
    </header>
  );
}
