export default function useScroll() {
  return {
    goToTop: () => window.scrollTo(0, 0),
  }
}
