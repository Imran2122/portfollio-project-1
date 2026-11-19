
// import { useState } from "react";
// import SectionTitle from "../components/SectionTitle";

// import {
//   GitBranch,
 
//   Mail,
//   MapPin,
//   Send,
// } from "lucide-react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [success, setSuccess] = useState("");

//   // Handle Input Change
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));

//     setErrors((previous) => ({
//       ...previous,
//       [name]: "",
//     }));

//     setSuccess("");
//   };

//   // Form Validation
//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (
//       !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
//     ) {
//       newErrors.email = "Enter a valid email address";
//     }

//     if (!formData.subject.trim()) {
//       newErrors.subject = "Subject is required";
//     }

//     if (formData.message.trim().length < 10) {
//       newErrors.message =
//         "Message must be at least 10 characters";
//     }

//     return newErrors;
//   };

//   // Handle Submit
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const validationErrors = validateForm();

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       setSuccess("");
//       return;
//     }

//     console.log("Contact Form:", formData);

//     setSuccess("Form submitted successfully! Thank you.");

//     setFormData({
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     });

//     setErrors({});
//   };

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-20">
//       <SectionTitle
//         title="Contact Me"
//         subtitle="Feel free to contact me for any project or opportunity."
//       />

//       <div className="grid md:grid-cols-2 gap-12">

//         {/* Contact Information */}
//         <div className="space-y-8">
//           <h2 className="text-2xl font-bold mb-6">
//             Let's Work Together
//           </h2>

//           <p className="text-slate-500 dark:text-slate-400 leading-8">
//             I am always interested in hearing about new projects,
//             internship opportunities and collaborations.
//             Feel free to send me a message.
//           </p>

//           {/* Email */}
//           <div className="flex gap-4 items-center">
//             <div className="bg-blue-100 dark:bg-blue-950 text-blue-600 p-4 rounded-lg">
//               <Mail size={25} />
//             </div>

//             <div>
//               <h3 className="font-bold">Email</h3>
//               <p className="text-slate-500 text-sm">
//                 imranhossain@example.com
//               </p>
//             </div>
//           </div>

//           {/* Location */}
//           <div className="flex gap-4 items-center">
//             <div className="bg-blue-100 dark:bg-blue-950 text-blue-600 p-4 rounded-lg">
//               <MapPin size={25} />
//             </div>

//             <div>
//               <h3 className="font-bold">Location</h3>
//               <p className="text-slate-500 text-sm">
//                 Bangladesh
//               </p>
//             </div>
//           </div>

//           {/* Social Links */}
//           <div className="flex gap-5 pt-5">
//             <a
//               href="https://github.com/Imran2122"
//               target="_blank"
//               rel="noreferrer"
//               aria-label="GitHub"
//               className="hover:text-blue-600 transition"
//             >
//               <GitBranch size={27} />
//             </a>

//             <a
//               href="https://www.linkedin.com/in/imran-hossain-web-developer"
//               target="_blank"
//               rel="noreferrer"
//               aria-label="LinkedIn"
//               className="hover:text-blue-600 transition"
//             >
//               {/* <Linkedin size={27} /> */}
//             </a>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <form
//           onSubmit={handleSubmit}
//           noValidate
//           className="border border-slate-200 dark:border-slate-800 p-7 rounded-xl shadow-sm space-y-5"
//         >
//           {/* Success Message */}
//           {success && (
//             <p className="bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 p-3 rounded-lg">
//               {success}
//             </p>
//           )}

//           {/* Name */}
//           <div>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-transparent outline-none focus:border-blue-600"
//             />

//             {errors.name && (
//               <p className="text-red-500 text-sm mt-2">
//                 {errors.name}
//               </p>
//             )}
//           </div>

//           {/* Email */}
//           <div>
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-transparent outline-none focus:border-blue-600"
//             />

//             {errors.email && (
//               <p className="text-red-500 text-sm mt-2">
//                 {errors.email}
//               </p>
//             )}
//           </div>

//           {/* Subject */}
//           <div>
//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               value={formData.subject}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-transparent outline-none focus:border-blue-600"
//             />

//             {errors.subject && (
//               <p className="text-red-500 text-sm mt-2">
//                 {errors.subject}
//               </p>
//             )}
//           </div>

//           {/* Message */}
//           <div>
//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-transparent outline-none focus:border-blue-600 resize-none"
//             />

//             {errors.message && (
//               <p className="text-red-500 text-sm mt-2">
//                 {errors.message}
//               </p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex justify-center items-center gap-2"
//           >
//             Send Message
//             <Send size={18} />
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

import { AlertCircle, CheckCircle2, Mail, MapPin, Send } from "lucide-react";

/* Brand icons are inline SVG so they never depend on the lucide version */
const GithubIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

const MESSAGE_MIN = 10;
const MESSAGE_MAX = 600;

const inputBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 " +
  "outline-none transition focus:ring-4 dark:bg-slate-900/60 dark:text-slate-100 dark:placeholder:text-slate-500";

const inputOk =
  "border-slate-300 focus:border-blue-600 focus:ring-blue-600/15 dark:border-slate-700 dark:focus:border-blue-500 dark:focus:ring-blue-500/20";

const inputError =
  "border-red-400 focus:border-red-500 focus:ring-red-500/15 dark:border-red-500/70";

/* Label + control + error, kept together so every field behaves the same */
const Field = ({ id, label, error, children, hint }) => (
  <div>
    <div className="mb-2 flex items-baseline justify-between">
      <label htmlFor={id} className="text-sm font-semibold text-slate-700 dark:text-slate-200">
        {label}
      </label>
      {hint}
    </div>

    {children}

    {error && (
      <p
        id={`${id}-error`}
        className="mt-2 flex items-center gap-1.5 text-sm text-red-600 dark:text-red-400"
      >
        <AlertCircle size={15} className="shrink-0" />
        {error}
      </p>
    )}
  </div>
);

const ContactRow = ({ icon: Icon, label, value, href }) => {
  const content = (
    <>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/25">
        <Icon size={22} />
      </div>
      <div className="min-w-0">
        <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
        <p className="truncate font-semibold text-slate-900 dark:text-slate-100">{value}</p>
      </div>
    </>
  );

  const classes =
    "flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/60";

  return href ? (
    <a
      href={href}
      className={`${classes} transition hover:border-blue-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/20 dark:hover:border-blue-500`}
    >
      {content}
    </a>
  ) : (
    <div className={classes}>{content}</div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSuccess("");
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (formData.message.trim().length < MESSAGE_MIN) {
      newErrors.message = `Message must be at least ${MESSAGE_MIN} characters`;
    }

    return newErrors;
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }

    console.log("Contact Form:", formData);

    setSuccess("Message sent. Thank you, I'll reply soon.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setErrors({});
  };

  // Shared props for every control
  const controlProps = (name) => ({
    id: name,
    name,
    value: formData[name],
    onChange: handleChange,
    "aria-invalid": errors[name] ? "true" : "false",
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
    className: `${inputBase} ${errors[name] ? inputError : inputOk}`,
  });

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        title="Contact Me"
        subtitle="Feel free to contact me for any project or opportunity."
      />

      <div className="grid items-start gap-12 md:grid-cols-2 lg:gap-16">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Let's work together
            </h2>

            <p className="max-w-md leading-8 text-slate-600 dark:text-slate-400">
              I am always interested in hearing about new projects, internship
              opportunities and collaborations. Send me a message and I will get
              back to you.
            </p>
          </div>

          {/* The one animated element: availability */}
          <p className="inline-flex items-center gap-2.5 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 dark:bg-green-950 dark:text-green-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            Open to internships and projects
          </p>

          <div className="space-y-4">
            <ContactRow
              icon={Mail}
              label="Email"
              value="imranhossain@example.com"
              href="mailto:imranhossain@example.com"
            />
            <ContactRow icon={MapPin} label="Location" value="Bangladesh" />
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            <a
              href="https://github.com/Imran2122"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/20 dark:border-slate-800 dark:text-slate-300 dark:hover:border-blue-600"
            >
              <GithubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/imran-hossain-web-developer"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/20 dark:border-slate-800 dark:text-slate-300 dark:hover:border-blue-600"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-5 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/40 dark:shadow-none sm:p-8"
        >
          {/* Success Message */}
          {success && (
            <p
              role="status"
              className="flex items-start gap-3 rounded-xl bg-green-100 p-4 text-sm font-medium text-green-800 dark:bg-green-950 dark:text-green-300"
            >
              <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
              {success}
            </p>
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Name" error={errors.name}>
              <input type="text" placeholder="Your name" autoComplete="name" {...controlProps("name")} />
            </Field>

            <Field id="email" label="Email" error={errors.email}>
              <input type="email" placeholder="you@example.com" autoComplete="email" {...controlProps("email")} />
            </Field>
          </div>

          <Field id="subject" label="Subject" error={errors.subject}>
            <input type="text" placeholder="What is this about?" {...controlProps("subject")} />
          </Field>

          <Field
            id="message"
            label="Message"
            error={errors.message}
            hint={
              <span className="text-xs tabular-nums text-slate-400">
                {formData.message.length}/{MESSAGE_MAX}
              </span>
            }
          >
            <textarea
              rows="5"
              maxLength={MESSAGE_MAX}
              placeholder="Tell me about your project or opportunity"
              {...controlProps("message")}
              className={`${controlProps("message").className} resize-none`}
            />
          </Field>

          {/* Submit Button */}
          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/30 active:scale-[0.99]"
          >
            Send message
            <Send
              size={18}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
            />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
