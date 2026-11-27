// Sends the contact form to Netlify Forms; the owner gets each message by email.
const form = document.getElementById("contactForm");
const statusLine = document.getElementById("formStatus");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();

  let problem = "";
  if (firstName.length < 2) problem = "Your first name is too short, please try again.";
  else if (lastName.length < 2) problem = "Your last name is too short, please try again.";
  else if (!form.email.checkValidity() || email.indexOf(".") === -1) problem = "Please enter a valid email.";
  if (problem) {
    statusLine.textContent = problem;
    statusLine.className = "mt-3 text-danger";
    return;
  }

  const button = form.querySelector("button[type=submit]");
  button.disabled = true;
  statusLine.textContent = "Sending...";
  statusLine.className = "mt-3";
  try {
    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    });
    if (!res.ok) throw new Error(res.status);
    form.reset();
    statusLine.textContent = "Thanks! Your message was sent.";
    statusLine.className = "mt-3 text-success";
  } catch (e) {
    statusLine.textContent = "Sorry, the message could not be sent. Please try again later.";
    statusLine.className = "mt-3 text-danger";
  } finally {
    button.disabled = false;
  }
});
