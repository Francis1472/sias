$(document).ready(function () {
  const administrator = document.getElementById("administrator");
  const instructor = document.getElementById("instructor");
  const student = document.getElementById("student");
  const parent = document.getElementById("parent");
  const admission = document.getElementById("admission");
  const loginForm = document.getElementById("login-form");

  $("#administrator").click(function (e) {
    e.preventDefault();
    if (this.classList.contains("btn-primary")) {
      loginForm.innerHTML = `<img src="images/logo.png" width="50" alt="" /> Login as Administrator`;
      this.classList.add("btn-light");
      this.classList.remove("btn-primary");
      student.classList.remove("btn-light");
      student.classList.add("btn-primary");
      instructor.classList.remove("btn-light");
      instructor.classList.add("btn-primary");
      parent.classList.remove("btn-light");
      parent.classList.add("btn-primary");
      admission.classList.remove("btn-light");
      admission.classList.add("btn-primary");
    }
  });
  $("#instructor").click(function (e) {
    e.preventDefault();
    if (this.classList.contains("btn-primary")) {
      loginForm.innerHTML = `<img src="images/logo.png" width="50" alt="" /> Login as Instructor`;
      this.classList.add("btn-light");
      this.classList.remove("btn-primary");
      student.classList.remove("btn-light");
      student.classList.add("btn-primary");
      administrator.classList.remove("btn-light");
      administrator.classList.add("btn-primary");
      parent.classList.remove("btn-light");
      parent.classList.add("btn-primary");
      admission.classList.remove("btn-light");
      admission.classList.add("btn-primary");
    }
  });

  $("#student").click(function (e) {
    e.preventDefault();
    if (this.classList.contains("btn-primary")) {
      loginForm.innerHTML = `<img src="images/logo.png" width="50" alt="" /> Login as Student`;
      this.classList.add("btn-light");
      this.classList.remove("btn-primary");
      instructor.classList.remove("btn-light");
      instructor.classList.add("btn-primary");
      administrator.classList.remove("btn-light");
      administrator.classList.add("btn-primary");
      parent.classList.remove("btn-light");
      parent.classList.add("btn-primary");
      admission.classList.remove("btn-light");
      admission.classList.add("btn-primary");
    }
  });

  $("#parent").click(function (e) {
    e.preventDefault();
    if (this.classList.contains("btn-primary")) {
      loginForm.innerHTML = `<img src="images/logo.png" width="50" alt="" /> Login as Parent`;
      this.classList.add("btn-light");
      this.classList.remove("btn-primary");
      instructor.classList.remove("btn-light");
      instructor.classList.add("btn-primary");
      administrator.classList.remove("btn-light");
      administrator.classList.add("btn-primary");
      student.classList.remove("btn-light");
      student.classList.add("btn-primary");
      admission.classList.remove("btn-light");
      admission.classList.add("btn-primary");
    }
  });
  $("#admission").click(function (e) {
    e.preventDefault();
    if (this.classList.contains("btn-primary")) {
      loginForm.innerHTML = `<img src="images/logo.png" width="50" alt="" /> Login as Admission`;
      this.classList.add("btn-light");
      this.classList.remove("btn-primary");
      instructor.classList.remove("btn-light");
      instructor.classList.add("btn-primary");
      administrator.classList.remove("btn-light");
      administrator.classList.add("btn-primary");
      student.classList.remove("btn-light");
      student.classList.add("btn-primary");
      parent.classList.remove("btn-light");
      parent.classList.add("btn-primary");
    }
  });
});
