interface VerticalSidebarProps {
  text: string
}

export default function VerticalSidebar({ text }: VerticalSidebarProps) {
  return (
    <div
      className="fixed left-6 top-1/2 -translate-y-1/2 z-10 hidden lg:block"
    >
      <span className="text-vertical text-[var(--charcoal)] opacity-25">
        {text}
      </span>
    </div>
  )
}
