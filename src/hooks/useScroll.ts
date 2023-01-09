export default function useScroll() {
  function to(element: HTMLElement) {
    element.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  return {
    to,
  }
}
