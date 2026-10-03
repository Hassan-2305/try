export default function Kasavu({ thin = false, className = "" }: { thin?: boolean; className?: string }) {
  return <div aria-hidden="true" className={`${thin ? "kasavu-thin" : "kasavu"} ${className}`} />;
}
