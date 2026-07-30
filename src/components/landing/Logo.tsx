import iconAsset from "@/assets/litteram-logo.png.asset.json";

export function Logo({
  size = 28,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <img
      src={iconAsset.url}
      alt="Litteram"
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
