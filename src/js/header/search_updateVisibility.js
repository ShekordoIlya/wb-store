import { searchOptions } from "./searchField";

export function updateVisibility() {
  const elements = searchOptions.querySelectorAll(".option-item");

  const seenTexts = new Set();

  elements.forEach((element) => {
    const text = element.textContent.trim();

    if (seenTexts.has(text)) {
      element.remove();
    } else {
      seenTexts.add(text);
    }
  });
}
