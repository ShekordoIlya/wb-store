function moveToCartAnimation(item, cartBtn) {
  const cardWrapper = item;
  const cartButton = cartBtn;

  if (cardWrapper && cartButton) {
    let cardItem = cardWrapper;
    let cartItem = cartButton;

    if (cardItem && cartItem) {
      let cardPosition = cardItem.getBoundingClientRect();
      let cartPosition = cartItem.getBoundingClientRect();

      function moveToCart() {
        const cardClone = cardItem.cloneNode(true);
        cardClone.className = "clone";
        cardClone.style.position = "fixed";
        cardClone.style.left = cardPosition["x"] + "px";
        cardClone.style.top = cardPosition["y"] + "px";
        cardClone.style.zIndex = 32767;

        document.body.appendChild(cardClone);

        let start_x = cardPosition["x"] + 0.5 * cardPosition["width"];
        let start_y = cardPosition["y"] + 0.5 * cardPosition["height"];

        let delta_x = cartPosition["x"] + 0.5 * cartPosition["width"] - start_x;
        let delta_y =
          cartPosition["y"] + 0.5 * cartPosition["height"] - start_y;

        cardClone.animate(
          [
            {
              transform: `translate(0px, 0px) scale(1)`,
              opacity: `1`,
            },
            {
              transform: `translate(${delta_x}px, ${delta_y}px) scale(0.15)`,
              opacity: `0`,
            },
          ],
          {
            duration: 1000,
            easing: "ease-in-out",
            fill: "forwards",
          }
        ).onfinish = () => {
          document.body.removeChild(cardClone);
        };
      }
      moveToCart(cardItem, cartItem);
    } else {
      console.error("cardItem или cartItem не найдены");
    }
  } else {
    console.error("cardWrapper или cartButton не найдены");
  }
}

export { moveToCartAnimation };
