export function JoinWorkshop(productName, customMessage) {
  const phone = "62818749604";
  const message = customMessage ?? `Saya mau join ${productName}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
