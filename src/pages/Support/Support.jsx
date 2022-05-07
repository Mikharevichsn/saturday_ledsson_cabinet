import React, { useState } from "react";
import s from "./Support.module.css";

const initialForm = {
  title: "",
  description: "",
};

export const Support = () => {
  const [form, setForm] = useState(initialForm);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("🚀 ~ file: Support.jsx ~ line 6 ~ Support ~ form", form);
    setForm(initialForm);
  };

  const onChange = (event) => {
    setForm((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      <form className={s.supportForm} onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="title"
          placeholder="Тема заявки"
          value={form.title}
          onChange={onChange}
        />
        <textarea
          name="description"
          cols="30"
          rows="10"
          placeholder="Опишите что у вас случилось"
          value={form.description}
          onChange={onChange}
        ></textarea>
        <button type="submit">Отправить заявку</button>
      </form>
    </div>
  );
};
