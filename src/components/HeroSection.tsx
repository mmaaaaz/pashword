// import ReactTooltip from "react-tooltip";
import { passwordStrength } from "check-password-strength";
import clsx from "clsx";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiFillQuestionCircle,
} from "react-icons/ai";

interface IProps {
  passwordLength: number;
  setPasswordLength: (arg: number) => void;
}

type FormData = {
  website: string;
  username: string;
  key: string;
};

const HeroSection = ({ passwordLength, setPasswordLength }: IProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const [showSecretKey, setShowSecretKey] = useState(false);

  const password = watch("key") ?? "";

  const passStrength = useMemo(() => passwordStrength(password).id, [password]);

  const onSubmit = (data: any) => console.log(data);

  return (
    <section className="page-root">
      <div>
        <h1 className="background-animate z-10 text-2xl font-bold text-slate-50 sm:text-8xl xxs:text-6xl xs:text-7xl">
          Pashword
        </h1>
        {/* SUB-HEADING */}
        <h2 className="z-10 w-full text-center text-xs font-medium text-slate-400 sm:text-xl xxs:text-lg xs:text-right">
          Passwords done right
        </h2>
      </div>
      {/* handleSubmit" will validate your inputs before invoking "onSubmit */}
      <form
        className="z-10 mt-5 flex w-4/5 max-w-md flex-col items-center justify-center gap-y-1 text-center text-xs xxs:gap-y-5 xxs:text-base"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full flex-col items-start">
          <label
            className="input-label  text-left"
            data-tip="Enter the website address here. For example: maglit.me OR brave.com OR google.com"
          >
            Website <AiFillQuestionCircle className="inline-block" />
          </label>
          <input
            {...register("website", { required: true })}
            id="website"
            type="text"
            name="website"
            className="input-text"
            placeholder="Example: reddit.com, forum.zorin.com"
          />
        </div>

        <div className="flex w-full flex-col items-start">
          <label
            className="input-label "
            data-tip="Enter the username on that website you're trying to generate the pashword for."
          >
            Username <AiFillQuestionCircle className="mb-0.5 inline-block" />
          </label>
          <input
            {...register("username", { required: true })}
            id="username"
            type="text"
            name="username"
            className="input-text"
            placeholder="Example: reddit.com, forum.zorin.com"
          />
        </div>

        <div className="flex w-full flex-col items-start">
          <label
            className="input-label "
            data-tip="Enter the website address here. For example: maglit.me OR brave.com OR google.com"
          >
            Website <AiFillQuestionCircle className="inline-block" />
          </label>
          <div className="relative w-full">
            <input
              {...register("key", { required: true })}
              id="key"
              type={showSecretKey ? "text" : "password"}
              name="key"
              className={clsx("input-password", {
                "bg-slate-400/20": password.length === 0,
                "bg-red-400/50":
                  password.length > 0 &&
                  (passStrength === 0 || passStrength === 1),
                "bg-yellow-400/50": passStrength === 2,
                "bg-green-400/50": passStrength === 3,
              })}
              placeholder="Example: JimmyNeutron10$"
            />

            {showSecretKey ? (
              <AiFillEye
                className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-xl text-slate-200 xxs:right-4"
                onClick={() => {
                  setShowSecretKey(false);
                }}
              />
            ) : (
              <AiFillEyeInvisible
                className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-xl text-slate-300/60 xxs:right-4"
                onClick={() => {
                  setShowSecretKey(true);
                }}
              />
            )}
          </div>
        </div>

        <div className="w-full">
          <button type="submit" className="submit-button">
            Get Pashword 😎
          </button>
        </div>
      </form>

      {/* <div
        className={`${
          pashword.length < 1
            ? "scale-y-0 opacity-0"
            : "scale-y-100 opacity-100"
        } animate relative mt-4 w-full cursor-pointer rounded-xl bg-green-500 py-2 backdrop-blur-xl duration-500 hover:shadow-lg hover:shadow-green-400/30 hover:ring-1 hover:ring-green-200`}
      >
        <p className="select-none font-medium text-green-300">Pashword</p>
        <p className="mx-auto w-3/5 select-all truncate font-medium text-green-100 md:w-full">
          {pashword}
        </p>
        <BiCopy className="absolute right-3 top-5 select-none text-sm text-green-300 sm:text-2xl xs:text-base" />
      </div> */}
    </section>
  );
};

export default HeroSection;
