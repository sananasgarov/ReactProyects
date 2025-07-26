function Overlay({ hidden, setHidden }) {
  return (
    <div
      className={`fixed inset-0 bg-black opacity-50 ${hidden}`}
      onClick={() => {
        setHidden("hidden");
        const body = document.querySelector("body");
        body.style.overflow = "auto";
      }}
    ></div>
  );
}

export default Overlay;
