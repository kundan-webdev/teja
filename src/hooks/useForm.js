import { useState } from "react";

export const useForm = (schema) => {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (data) => {
    try {
      schema.parse(data);
      setErrors({});
      return true;
    } catch (err) {
      const formatted = {};
      err.errors.forEach(e => {
        formatted[e.path[0]] = e.message;
      });
      setErrors(formatted);
      return false;
    }
  };

  return { errors, validate, isSubmitting, setIsSubmitting };
};