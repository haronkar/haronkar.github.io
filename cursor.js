const coords = { x: 0, y: 0 };
const cursors = document.querySelectorAll(".cursor");

cursors.forEach((cursor) => {
  cursor.x = 0;
  cursor.y = 0;
});

addEventListener("mousemove", (e) => {
  coords.x = e.clientX;
  coords.y = e.clientY;

  console.log(coords);
});

function animateCursor() {
  let x = coords.x;
  let y = coords.y;

  cursors.forEach((cursor, index) => {
    cursor.style.left = x - 12 + "px";
    cursor.style.top = y - 12 + "px";
    cursor.style.scale = (cursors.length - index) / cursors.length;
    cursor.x = x;
    cursor.y = y;

    const nextCursor = cursors[index + 1] || cursors[0];

    x += (nextCursor.x - x) * 0.3;
    y += (nextCursor.y - y) * 0.3;
  });

  requestAnimationFrame(animateCursor);
}

animateCursor();

console.log("Cursor");
