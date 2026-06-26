export function removeEmojis(text: string): string {
  const emojiRegex = /\p{Extended_Pictographic}/gu;
  return text.replace(emojiRegex, "");
}
