type ScreenshotSlotProps = {
  id: string;
  label: string;
  src?: string;
  aspectRatio?: string;
  className?: string;
  imageClassName?: string;
  objectPosition?: string;
};

function ScreenshotSlot({
  id,
  label,
  src,
  aspectRatio = "16/10",
  className = "",
  imageClassName = "",
  objectPosition = "top center",
}: ScreenshotSlotProps) {
  return (
    <div
      className={`screenshot-glow relative overflow-hidden rounded-[18px] border border-white/80 bg-white/80 p-2 shadow-[0_28px_90px_rgba(26,26,26,0.14)] backdrop-blur-xl after:pointer-events-none after:absolute after:inset-2 after:rounded-[12px] after:shadow-[inset_0_1px_18px_rgba(29,78,216,0.08)] ${className}`}
      data-screenshot-id={id}
      style={{ aspectRatio }}
    >
      {src ? (
        <img
          src={src}
          alt={label}
          className={`h-full w-full rounded-[12px] border border-[#ebebee] object-cover shadow-[0_4px_16px_rgba(0,0,0,0.04)] ${imageClassName}`}
          style={{ objectPosition }}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-[12px] border border-dashed border-[#c9c9d2] bg-[#f4f4f6] px-6 text-center text-sm font-medium text-[#8a8a99]">
          {label}
        </div>
      )}
    </div>
  );
}

export default ScreenshotSlot;
