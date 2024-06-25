// нічого не повертає - void
function showMessage(message: string): void {
  console.log(message);
}

// приймає два числа і повертає число
function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// кидає помилку - never
function customError(): never {
  throw new Error("Error");
}

export {};
