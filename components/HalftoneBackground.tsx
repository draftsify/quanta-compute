import Image from "next/image";

type Props = {
  src?: string;
  /** Dot pitch in px — smaller is a finer screen. */
  pitch?: number;
  priority?: boolean;
  className?: string;
};

/**
 * The source render laid down twice: a soft base pass, then the same frame
 * punched through a 45° dot screen so it reads as halftone. Pure CSS — the
 * only motion is a transform on the image, which stays on the compositor.
 */
export default function HalftoneBackground({
  src = "/terrain.jpg",
  pitch = 7,
  priority = false,
  className = "",
}: Props) {
  const vars = { "--dot": `${pitch}px` } as React.CSSProperties;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} style={vars}>
      <div className="absolute inset-0 opacity-[0.22]">
        <Image
          src={src}
          alt=""
          fill
          sizes="100vw"
          priority={priority}
          className="drift object-cover object-[50%_72%]"
        />
      </div>

      <div className="halftone absolute inset-0">
        <Image
          src={src}
          alt=""
          fill
          sizes="100vw"
          priority={priority}
          className="drift object-cover object-[50%_72%] brightness-125 contrast-135 saturate-110"
        />
      </div>
    </div>
  );
}
