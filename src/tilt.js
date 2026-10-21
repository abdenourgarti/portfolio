// Pointer-driven 3D tilt for elements with the .tilt class: sets --rx/--ry, CSS does the rotation.
// Mouse only, so touch scrolling never tilts cards.
const tilt = {
  onPointerMove(e) {
    if (e.pointerType !== 'mouse') return;
    const box = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - box.left) / box.width - 0.5;
    const y = (e.clientY - box.top) / box.height - 0.5;
    e.currentTarget.style.setProperty('--rx', `${(-y * 10).toFixed(2)}deg`);
    e.currentTarget.style.setProperty('--ry', `${(x * 12).toFixed(2)}deg`);
  },
  onPointerLeave(e) {
    e.currentTarget.style.removeProperty('--rx');
    e.currentTarget.style.removeProperty('--ry');
  },
};

export default tilt;
