function removeConsecutiveSpaces(value) {
    return value.replace(/\s{2,}/g, ' ');
}
export function hasText(value) {
    return value !== null && typeof value !== "undefined" && String(value).length > 0;
}
export function toStringFullTrimmed(value) {
    return removeConsecutiveSpaces(String(value).trim());
}
export function simpleStringsAreEquals(text1, text2) {
    return text1.localeCompare(text2, "en", { sensitivity: "base" }) === 0;
}