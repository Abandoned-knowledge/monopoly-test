export default function(index: number): string {
  return new URL(`/src/assets/images/avatar-${index}.webp`, location.href).href;
}