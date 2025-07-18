import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "./Navbar";
import heroBg from "../assets/hero-bg.png";

// import "./formss.css";
const MAX_SIZE = 5000000;

const phoneValidation = new RegExp(
  /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
);

// zod schema
const schema = z.object({
  firstName: z.string().min(3, { message: "Must have at least 3 character" }),
  lastName: z.string().min(3, { message: "Must have atleast 3 character" }),
  email: z.string().email({ message: "Invalid email address" }),
  contact: z
    .string()
    .min(10, { message: "Must have atlease 10 character" })
    .max(10, { message: "Not exceed than 10 character" })
    .regex(phoneValidation, { message: "invalid phone" }),
  gender: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.enum(["female", "male", "other"], {
      required_error: "Please select an option ",
    })
  ),
  profession: z.array(z.string()).min(1, { message: "Check any One box" }),
  pdf: z
    .any()
    .refine((file) => file && file instanceof File, "Please select a file.")
    .refine(
      (file) => file && file.size <= MAX_SIZE,
      "File should be less than 5MB"
    )
    .refine(
      (file) => checkFileType(file),
      "File should be either docs or pdf "
    ),
  queryField: z
    .string()
    .min(10, { message: "Must have at least 10 character" }),
});
// function for check file type
function checkFileType(file) {
  if (file?.name) {
    const FileType = file.name.split(".").pop();
    if (FileType == "docx" || FileType == "pdf") {
      return true;
    }
    return false;
  }
}

const FormHandle = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { profession: [] },
  });

  const onSubmit = (data) => {
    console.log("Form DAta", data);
  };
  return (
    <>
      <div
        style={{ backgroundImage: `url(${heroBg})` }}
        className=" bg-cover  min-h-screen "
      >
        <Navbar></Navbar>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* ------------------------- */}

          <div className="mx-auto  text-sm sm:text-md flex flex-col justify-center items-center max-w-[350px]  p-2  sm:max-w-[500px] sm:mx-auto sm:p-5 mt-3 rounded-xl shadow-2xl bg-[#d9e6f3]">
            <h1 className="font-bold sm:text-2xl text-xl mb-9">Any Queries?</h1>
            <div className="flex sm:gap-3 gap-4  sm:w-full ">
              <div className="flex flex-col sm:w-full w-[150px] ">
                <label className="font-bold">First Name:</label>
                <input
                  className={`pl-2 sm:py-1 py-0.5  border rounded-md ${
                    errors.firstName
                      ? "border-red-500 border-2 outline-none"
                      : "border-gray-500 border-2"
                  } 
              focus:ring-1 focus:ring-blue-400 focus:outline-none
              `}
                  type="text"
                  {...register("firstName")}
                />
                {/* {errors.firstName && errors.firstName.type === "required" && (
            //error
            <p className="error-msg">First name is required</p>
          )} */}
                {errors.firstName && (
                  <p className=" text-red-500 sm:text-[14px] text-[10px]">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <br />
              {/* ------------LastName----------------- */}
              <div className="flex flex-col sm:w-full w-[150px]">
                <label className="font-bold">Last Name:</label>
                <input
                  type="text"
                  className={`pl-2 sm:py-1 py-0.5 border rounded-md ${
                    errors.lastName
                      ? "border-red-500 border-2 outline-none"
                      : "border-gray-500 border-2"
                  } 
              focus:ring-1 focus:ring-blue-400 focus:outline-none
              `}
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <p className=" text-red-500  sm:text-[14px] text-[10px]">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <br />

            {/* ---------------email------------------------- */}
            <div className="flex flex-col w-full">
              <label className="font-bold">Email:</label>
              <input
                type="email"
                className={`pl-2 sm:py-1 py-0.5  border rounded-md ${
                  errors.email
                    ? "border-red-500 border-2 outline-none"
                    : "border-gray-500 border-2"
                } 
              focus:ring-1 focus:ring-blue-400 focus:outline-none
              `}
                {...register("email")}
              />
              {errors.email && (
                <p className=" text-red-500  sm:text-[14px] text-[10px]">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* -------------------contact------------------------ */}
            <br />
            <div className="flex flex-col w-full">
              <label htmlFor="" className="font-bold">
                Contact:
              </label>
              <input
                type="text"
                className={`pl-2 sm:py-1 py-0.5  border rounded-md ${
                  errors.contact
                    ? "border-red-500 border-2 outline-none"
                    : "border-gray-500 border-2"
                } 
            focus:ring-1 focus:ring-blue-400 focus:outline-none
            `}
                {...register("contact")}
              />
              {errors.contact && (
                <p className=" text-red-500  sm:text-[14px] text-[10px]">
                  {errors.contact.message}
                </p>
              )}
            </div>
            {/* -----------gender------------------- */}
            <br />
            <div className="flex flex-col w-full">
              <label htmlFor="" className="font-bold">
                Gender:{" "}
              </label>
              <select
                {...register("gender")}
                className={`pl-2 sm:py-1 py-0.5 border rounded-md ${
                  errors.gender
                    ? "border-red-500 border-2 outline-none focus:ring-0"
                    : "border-gray-500 border-2"
                }
            }   focus:ring-1 focus:ring-blue-400 focus:outline-none`}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-500  sm:text-[14px] text-[10px]">
                  {errors.gender.message}
                </p>
              )}
            </div>
            {/* ------------text area----------- */}
            <div className="flex flex-col w-full mt-5">
              <label htmlFor="" className="font-bold">
                Your Query:
              </label>
              <textarea
                name=""
                id=""
                {...register("queryField")}
                className={`pl-2 sm:py-1 py-0.5  border rounded-md ${
                  errors.queryField
                    ? "border-red-500 border-2 outline-none"
                    : "border-gray-500 border-2"
                } 
              focus:ring-1 focus:ring-blue-400 focus:outline-none
              `}
              ></textarea>
              {errors.queryField && (
                <p className="text-red-500  sm:text-[14px] text-[10px]">
                  {errors.queryField.message}
                </p>
              )}
            </div>

            {/* ------------submit---------- */}
            <input
              type="submit"
              className=" bg-blue-500 text-white  font-bold px-3 py-2 mt-5 rounded-md hover: cursor-pointer hover:bg-blue-600"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default FormHandle;

//
//         {/* ------------checkbox--------------------- */}
//         <br />
//         <div className="flex flex-col w-full font-medium gap-0.4  mx-auto">
//           <div className="flex gap-2">
//             <label htmlFor="" className="font-bold">
//               Experience:
//             </label>
//             <br />
//             <input
//               type="checkbox"
//               value="fresher"
//               id="fresher"
//               className="appearance-none mt-1 w-[15px] h-[15px] border border-gray-600 rounded-full outline-none cursor-pointer checked:bg-blue-500 checked:border-1 checked:border-pink-300"
//               {...register("profession")}
//             />
//             <label htmlFor="fresher">Fresher</label>
//             <br />
//             <input
//               type="checkbox"
//               value="experienced"
//               id="experienced"
//               className="appearance-none mt-1 w-[15px] h-[15px] border border-gray-600 rounded-full outline-none cursor-pointer checked:bg-blue-500 checked:border-1 checked:border-pink-300"
//               {...register("profession")}
//             />
//             <label htmlFor="experienced">2-3 Years</label>
//             <br />
//           </div>
//           <div>
//             {errors.profession && (
//               <p className="text-red-500 font-normal">
//                 {errors.profession.message}
//               </p>
//             )}
//           </div>
//           {/* ------------------------file Upload-------------------------------- */}

//           <div className="flex flex-col">
//             <label htmlFor="" className="font-bold">
//               File Upload:
//             </label>
//             <input
//               type="file"
//               onChange={(e) => {
//                 const file = e.target.files[0];
//                 setValue("pdf", file || null);
//               }}
//               className="block w-full text-sm text-gray-500
//            file:mr-4 file:py-2 file:px-4
//            file:rounded-md file:border-0
//            file:text-sm file:font-semibold
//            file:bg-blue-50 file:text-blue-700
//            hover:file:bg-blue-100"
//             />
//             {errors.pdf && (
//               <p className="text-red-500 font-normal">{errors.pdf.message}</p>
//             )}
//           </div>
//         </div>
