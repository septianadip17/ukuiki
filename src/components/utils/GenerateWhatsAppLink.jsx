export function generateWhatsAppLink(productName) {
  const phone = "62818749604";
  const message = `Saya mau beli ${productName}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
