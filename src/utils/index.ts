export const getInitials = (name: string) => {
  if (!name) return "";
  const words = name.trim().split(" ").filter(Boolean);
  
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  
  return words[0]?.[0]?.toUpperCase() || "";
};