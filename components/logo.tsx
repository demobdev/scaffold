import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/scaffoldui-logo.jpeg"
        alt="ScaffoldUI"
        width={40}
        height={40}
        className="rounded-md object-cover"
      />
      <span className="font-bold text-xl text-foreground">ScaffoldUI</span>
    </Link>
  );
};

export default Logo;

