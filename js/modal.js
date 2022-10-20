window.addEventListener("DOMContentLoaded", () => {
	(() => {
		const refs = {
			openModalBtn: document.querySelector("[data-modal-open]"),
			closeModalBtn: document.querySelector("[data-modal-close]"),
			modal: document.querySelector("[data-modal]"),
			body: document.querySelector("body"),
			modalWindow: document.querySelector(".modal-window"),
		};

		refs.openModalBtn.addEventListener("click", toggleModal);
		refs.closeModalBtn.addEventListener("click", toggleModal);

		function toggleModal() {
			refs.modal.classList.toggle("is-hidden");
			refs.body.classList.toggle("is-visible");
			refs.modalWindow.classList.toggle("modal-window-animation");
		}
	})();
});
