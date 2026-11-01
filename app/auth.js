// Create a new account
export function createAccount(name, email, password) {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return false;
  }

  const newUser = {
    name: name,
    email: email,
    password: password,
  };

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  localStorage.setItem(
    "currentUser",
    JSON.stringify({
      name: name,
      email: email,
    }),
  );

  return true;
}

export function loginUser(email, password) {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (user) => user.email === email && user.password === password,
  );

  if (user) {
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        name: user.name,
        email: user.email,
      }),
    );

    return true;
  }

  return false;
}

export function logoutUser() {
  localStorage.removeItem("currentUser");
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}
