type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, "errors">;

export {};

//==============================================
// Реалізуйте Params так,
// щоб унеможливити поле 'errors' з типу Form
// type Params = Form;
