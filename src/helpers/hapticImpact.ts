export default function hapticImpact(pattern = [50]) {
  requestAnimationFrame(() => navigator?.vibrate?.(pattern))
}
