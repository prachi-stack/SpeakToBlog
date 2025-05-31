export default function BgGradient({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-gradient-to-br from-emerald-100 via-emerald-200 to-emerald-300 rounded-2xl p-6 text-emerald-900 shadow-md ${className}`}
    >
      {children}
    </div>
  );
}
