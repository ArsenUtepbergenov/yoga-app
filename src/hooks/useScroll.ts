export default function useScroll() {
  function goToTop() {
    window.scrollTo(0, 0)
  }

  function to(element: HTMLElement) {
    element.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  return {
    goToTop,
    to,
  }
}
