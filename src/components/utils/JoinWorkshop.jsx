export function JoinWorkshop(productName) {
  const phone = "62818749604";
  const message = `Saya mau join ${productName}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
