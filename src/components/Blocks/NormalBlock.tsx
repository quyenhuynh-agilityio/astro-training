interface BlockProps {
  children: React.ReactNode;
}

export default function NormalBlock({ children }: BlockProps) {
  return <p className="text-gray-200 font-normal">{children}</p>;
}
