import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import styles from "./Form.module.scss";
import firebase from "firebase/compat/app";
import { FC } from "react";

type FormProps = {
  title: string;
  getDataForm: (email: string, pass: string) => void;
  firebaseError: string;
};

type Inputs = {
  email: string;
  password: string;
};

const Form: FC<FormProps> = ({ title, getDataForm, firebaseError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<FieldValues> = ({ email, password }) => {
    getDataForm(email, password);

    reset();
  };

  const userEmail = {
    required: "필수 필드입니다.",
    pattern: {
      value:
        /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm,
      message: "입력하신 이메일 주소가 올바르지 않습니다.",
    },
  };

  const userPassword = {
    required: "필수 필드입니다.",
    minLength: {
      value: 4,
      message: "최소 4자입니다.",
    },
    maxLength: {
      value: 13,
      message: "최대 13자입니다.",
    },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm,
      message: `최소 8자, 영문 1자, 숫자 1자`,
    },
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="email"
          placeholder="E-mail"
          {...register("email", userEmail)}
        ></input>
        {errors?.email && (
          <div>
            <span className={styles.form_error}>{errors?.email?.message}</span>
          </div>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password", userPassword)}
        ></input>
        {errors?.password && (
          <div>
            <span className={styles.form_error}>
              {" "}
              {errors?.password?.message}
            </span>
          </div>
        )}
      </div>
      <button type="submit">{title}</button>
      {firebaseError && (
        <span className={styles.form_error}>{firebaseError}</span>
      )}
    </form>
  );
};

export default Form;
