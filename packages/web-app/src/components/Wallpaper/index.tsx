import defaultWallpaper from "@/assets/wallpapers/image/default.webp";

export function Wallpaper() {
  return (
    <div
      className="fixed w-full h-full bg-cover bg-center transition-wallpaper"
      style={{ backgroundImage: `url(${defaultWallpaper})` }}
    />
  );
}
