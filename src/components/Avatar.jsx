export default function Avatar({ name }) {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-yellow-500",
    "bg-red-500",
  ];

  // Pick a color based on first char code so it's consistent per name
  const colorIndex = name ? name.charCodeAt(0) % colors.length : 0;

  return (
    <div
      className={`w-10 h-10 rounded-full ${colors[colorIndex]} flex items-center justify-center font-bold text-white text-sm`}
    >
      {name ? name.charAt(0).toUpperCase() : "?"}
    </div>
  );
}