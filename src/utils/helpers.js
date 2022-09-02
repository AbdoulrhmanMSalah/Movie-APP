export const translate = (lang, langArray) => {
  if (lang === "en") {
    return langArray[0]
  } else {
    return langArray[1]
  }
}
