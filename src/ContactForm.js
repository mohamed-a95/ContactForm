import React from "react";
import { useForm } from "react-hook-form";
function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="contain">
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inp1">
          <label>Name</label>
          <br />
          <input {...register("name", { required: true })} />
          <br />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="inp2">
          <label>Last name</label>
          <br />
          <input {...register("name", { required: true })} />
          <br />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="inp3">
          <label>Email</label>
          <br />
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <br />
          {errors.email && <span>Invalid email address</span>}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default ContactForm;
