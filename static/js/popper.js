import "../styles/popper.css";
import { computePosition, flip } from "@floating-ui/dom";

const reference = document.getElementById("reference");
const floating = document.getElementById("floating");

computePosition(reference, floating, {
  placement: "top",
  // Try removing this line below. The tooltip will
  // overflow the viewport's edge!
  middleware: [flip()]
}).then(({ x, y }) => {
  Object.assign(floating.style, {
    top: `${y}px`,
    left: `${x}px`
  });
});
