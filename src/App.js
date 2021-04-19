import React from "react";
import {
  FormFieldRules,
  FormRules,
  TextFormField,
  NumberFormField,
  Form,
  Input,
} from "react-boilerplate-form";

function SimpleForm() {
  const fieldRules = new FormFieldRules(
    new NumberFormField("id"),
    new TextFormField("title")
  );
  const formRules = new FormRules();

  const onSubmit = (values) => console.log(values);
  const initalValues = { id: 1 };

  const translation_list = [
    {
      Title: "I like chocolate",
      Translations: [
        { text: "Imi place ciocolata", key: "RO" },
        { text: "I like chocolate", key: "ENG" },
        { text: "Jeg kan lide chokolade", key: "DA" },
      ],
      Id: 2,
    },
  ];

  return (
    <Form fieldRules={fieldRules} values={initalValues} onSubmit={onSubmit}>
      <h1>Cristian Sandu</h1>
      <h3>Contact: 42403391</h3>
      <p>Email: cristianclaudiusandu@gmail.com</p>

      {translation_list.map((t) => {
        return (
          <div>
            <h1>{t.Title}</h1>
            <h2>{t.Id}</h2>
            <p>
              {t.Translations.map((tr) => {
                return (
                  <p>
                    {tr.key}, {tr.text}
                  </p>
                );
              })}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        );
      })}
      {/*       <label htmlFor="id">ID:</label>
      <Input name="id" />
      <label htmlFor="title">Title:</label>
      <Input name="title" />
      <button type="submit">Submit</button> */}
    </Form>
  );
}
export default SimpleForm;
