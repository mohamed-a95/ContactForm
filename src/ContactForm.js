import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
function ContactForm() {
  const [selectedQuery, setSelectedQuery] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleClick = (type) => {
    setSelectedQuery(type);
  };

  return (
    <div className="contain">
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inp1">
          <label>Name</label>
          <br />
          <input type="text" {...register("firstname", { required: true })} />
          <br />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="inp2">
          <label>Last name</label>
          <br />
          <input type="text" {...register("lastname", { required: true })} />
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
        <label className="querytype">Query type</label>
        <div className="inp4">
          <div className={selectedQuery === "general" ? "inp4-12" : "inp4-1"}>
            <input
              type="radio"
              checked={selectedQuery === "general"}
              onClick={() => handleClick("general")}
              {...register("selectedQuery", { requierd: true })}
            />
            <label>General Enquiry</label>
          </div>
          <div className={selectedQuery === "support" ? "inp4-12" : "inp4-1"}>
            <input
              type="radio"
              checked={selectedQuery === "support"}
              {...register("selectedQuery", { requierd: true })}
              onClick={() => handleClick("support")}
            />
            <label>Support request</label>
          </div>
        </div>
        <label className="messageLabel">Message</label>
        <div className="inp5">
          <input
            type="text"
            {...register("message", { requierd: true })}
            min={10}
            max={100}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default ContactForm;
