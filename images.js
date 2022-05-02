const closeImage = (event) => {
  const btn = event.target;
  const wrapper = btn.parentElement;
  wrapper.style.display = "none";
};
const openImage = (event) => {
  const id = `open${event.target.id.substring(6)}`;
  const wrapperToOpen = document.getElementById(id);
  wrapperToOpen.style.display = "flex";
  //   const wrapper = document.getElementById()
};
