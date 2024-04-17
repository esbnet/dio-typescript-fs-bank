import login from "./login";

describe("login", () => {
  const alert = jest.spyOn(window, "alert");

  it("deve exibir um alert com boas vindas", () => {
    login();
    expect(alert).toHaveBeenCalledWith("Boas vindas");
  });
});
