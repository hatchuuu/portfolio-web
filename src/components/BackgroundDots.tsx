const BackgroundDots = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <defs>
        <pattern
          id="dots"
          x="0"
          y="0"
          width="30" // Jarak antar dot lebih lebar
          height="30"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="20" // Posisikan di tengah pola
            cy="20"
            r="2" // Ukuran dot kecil
            fill="#666"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
};

export default BackgroundDots;
