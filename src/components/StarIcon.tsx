interface StarIconProps {
  size?: number
  rotation?: number
  className?: string
}

export default function StarIcon({ size = 16, rotation = 0, className = '' }: StarIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#c9912d"
      style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 2s ease' }}
      className={className}
    >
      <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z" />
    </svg>
  )
}
