import { useNavigate } from "react-router-dom";
import Form from "../../../components/form/Form";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/user/user.slice";
import { auth } from "../../../firebase";
import { setUserId } from "firebase/analytics";

const SignUp = () => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");
  const dispatch = useDispatch();

  const handleSignupAndLogin = (email: string, pass: string) => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        //리덕스에 유저 데이터 담는 로직
        dispatch(
          setUser({
            email: userCredential.user.email,
            token: userCredential.user.refreshToken,
            id: userCredential.user.uid,
          })
        );
        dispatch(setUserId(userCredential.user.uid));
        navigate("/");
      })
      .catch((error) => {
        return (
          error && setFirebaseError("이메일 또는 비밀번호가 잘못되었습니다.")
        );
      });
  };

  return (
    <Form
      title={"가입하기"}
      getDataForm={handleSignupAndLogin}
      firebaseError={firebaseError}
    />
  );
};

export default SignUp;
