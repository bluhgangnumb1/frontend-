function register() {
  const username = document.getElementById("username").value;
  fetch("http://localhost:8000/register/" + username + "/dummyhwid", {method: "POST"})
    .then(r => r.json()).then(data => {
      alert(data.success ? "Registered!" : "Failed: " + (data.error || ""));
    });
}

function login() {
  const username = document.getElementById("username").value;
  fetch("/userinfo/" + username + "/dummyhwid", {method: "POST"})
    .then(r => {
      if (r.status === 200) {
        localStorage.setItem("user", username);
        window.location.href = "dashboard.html";
      } else {
        alert("Login failed");
      }
    });
}
