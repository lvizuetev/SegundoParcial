const d = document;

export default function scrollSpy() {
  const $elementos = d.querySelectorAll("section[data-scroll-spy]");
  // const $ancla = d.querySelectorAll("a[data-scroll-spy]");

  // console.log($elementos);

  const callback = (entries) => {
    entries.forEach((entry) => {
      // console.log(entry);

      let id = entry.target.getAttribute("id");
      // console.log(id);

      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "scroll-spy"
        );
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "scroll-spy"
        );
      }
    });
  };

  let observer = new IntersectionObserver(callback, { threshold: 0.7 });
  // console.log(observer);

  $elementos.forEach((ele) => {
    observer.observe(ele);
  });
}