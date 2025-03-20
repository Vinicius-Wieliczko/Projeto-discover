function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar_light.png")
    img.setAttribute(
      "alt",
      "Imagem do Vinícius de óculos escuro, olhando para a direita"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Imagem do Vinícius de óculos escuro, olhando para a esquerda"
    )
  }
}
