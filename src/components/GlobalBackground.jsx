export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-bgDark">

      {/* LEFT TOP BLOB */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>

      {/* RIGHT CENTER BLOB */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-ping"></div>

      {/* BOTTOM LEFT BLOB */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>

      {/* BOTTOM RIGHT BLOB */}
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-accent/15 rounded-full blur-2xl animate-pulse"></div>
    </div>
  );
}
