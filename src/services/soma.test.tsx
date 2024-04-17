import { multiplicar, soma, subtrair } from "./soma";

describe("soma", () => {
  it("should sum 1 to number passed", () => {
    const num = soma(1);
    expect(num).toBe(2);
  });
});

describe("subtrair", () => {
  it("should subtract 1 to number passed", () => {
    const num = subtrair(1);
    expect(num).toBe(0);
  });
});

describe("multiplicar", () => {
  it("should multiply the number to 2", () => {
    const num = multiplicar(2, 2);
    expect(num).toBe(4);
  });

  it("should multiply the number to 3", () => {
    const num = multiplicar(2, 3);
    expect(num).toBe(6);
  });

  it("retun error if mulplicator is not 2 or 3", () => {
    const num = multiplicar(2, 5);
    expect(num).toBe("Multiplicador não aceito");
  });
});
