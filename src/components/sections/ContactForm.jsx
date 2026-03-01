import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (formData.firstName.trim().length < 2)
      newErrors.firstName = "Minimum 2 characters required.";

    if (formData.lastName.trim().length < 2)
      newErrors.lastName = "Minimum 2 characters required.";

    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Enter a valid email.";

    if (formData.subject.trim().length < 5)
      newErrors.subject = "Subject too short.";

    if (formData.message.trim().length < 10)
      newErrors.message = "Message too short.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitized = value.replace(/<[^>]*>?/gm, "");
    setFormData({ ...formData, [name]: sanitized });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 1200));
    setIsSubmitting(false);
    setSuccess(true);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="bg-[#F7F6F3] min-h-section pt-8 pb-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-semibold text-[#1F1F1F] mb-4 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-lg text-[#6B6B6B]">
            We'd love to hear from you. Send us a message.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-2xl mx-auto bg-white border border-[#E5E5E5] rounded-2xl shadow-sm p-10">

          {success && (
            <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm">
              Message sent successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
              />
              <Input
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
              />
            </div>

            <Input
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />

            <Input
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              error={errors.subject}
            />

            <div>
              <label className="block mb-2 text-sm text-[#6B6B6B]">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-[#E5E5E5] rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black transition"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white py-3 rounded-xl hover:opacity-90 transition disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Input = ({ label, name, value, onChange, error }) => (
  <div>
    <label className="block mb-2 text-sm text-[#6B6B6B]">
      {label}
    </label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-[#E5E5E5] rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black transition"
    />
    {error && (
      <p className="text-red-500 text-sm mt-1">
        {error}
      </p>
    )}
  </div>
);

export default ContactForm;