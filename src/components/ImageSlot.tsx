import type { ImageSlot as ImageSlotData } from "../data/content";

interface Props {
  image: ImageSlotData;
  className?: string;
}

/**
 * Shows the real image when `src` is set in src/data/content.ts.
 * Otherwise shows a clearly labeled placeholder (no fake evidence is imitated).
 */
export default function ImageSlot({ image, className = "" }: Props) {
  if (image.src) {
    return <img className={`image-slot ${className}`.trim()} src={image.src} alt={image.alt} loading="lazy" />;
  }
  return (
    <div
      className={`image-slot image-slot--placeholder ${className}`.trim()}
      role="img"
      aria-label={`${image.placeholderLabel}. Image to be added.`}
    >
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 6M9 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
        />
      </svg>
      <span>{image.placeholderLabel}</span>
      <small>To be added</small>
    </div>
  );
}
