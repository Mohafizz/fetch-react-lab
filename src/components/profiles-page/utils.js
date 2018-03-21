function capFirst(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function capWords(text) {
  if (typeof text === "string") {
    return text
      .split(" ")
      .map(word => capFirst(word))
      .join(" ");
  }
  return text;
}

export default capFirst;
export { capWords };
