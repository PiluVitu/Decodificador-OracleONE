export function alert(message) {
  Toastify({
    text: `${message}`,
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #0a3871, #aab2d5)",
      borderRadius:"15px",
    },
  }).showToast(); 
}