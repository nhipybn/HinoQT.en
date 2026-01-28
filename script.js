// ================= FORM SUBMIT HANDLER =================
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("consultForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Lấy dữ liệu form
    const inputs = form.querySelectorAll("input");
    let isValid = true;
    let formData = {};

    inputs.forEach(input => {
      if (input.hasAttribute("required") && input.value.trim() === "") {
        input.classList.add("is-invalid");
        isValid = false;
      } else {
        input.classList.remove("is-invalid");
        formData[input.placeholder] = input.value.trim();
      }
    });

    if (!isValid) {
      alert("Vui lòng điền đầy đủ thông tin bắt buộc.");
      return;
    }

    // Giả lập gửi dữ liệu (placeholder)
    console.log("Form Data:", formData);

    // Disable button khi submit
    const submitBtn = form.querySelector("button[type='submit']");
    submitBtn.disabled = true;
    submitBtn.innerText = "Đang gửi yêu cầu...";

    // Fake delay (sau này thay bằng fetch API)
    setTimeout(() => {
      showSuccessMessage();
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerText = "Gửi yêu cầu Tư vấn & Demo";
    }, 1200);
  });
});

// ================= SUCCESS MESSAGE =================
function showSuccessMessage() {
  const ctaBox = document.querySelector(".cta-box");

  if (!ctaBox) return;

  ctaBox.innerHTML = `
    <h2>Yêu cầu đã được gửi thành công</h2>
    <p class="mt-3">
      Đội ngũ kỹ thuật Hino Systech sẽ liên hệ với Quý Doanh nghiệp trong thời gian sớm nhất
      để tư vấn và demo giải pháp OCC.
    </p>
    <div class="mt-4">
      <a href="#" onclick="location.reload()" class="btn btn-primary">
        Gửi yêu cầu khác
      </a>
    </div>
  `;
}
// ================= NAVBAR SCROLL EFFECT =================
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".main-navbar");
  if (!navbar) return;

  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
