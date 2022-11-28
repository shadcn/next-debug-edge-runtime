export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        maxWidth: "42rem",
        backgroundColor: "black",
        color: "white",
      }}
    >
      {children}
    </div>
  )
}
