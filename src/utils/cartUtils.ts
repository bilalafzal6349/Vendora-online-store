export const SHIPPING_CHARGES = 200;

export const validateForm = (formData: {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
}) => {
  const errors: Record<string, string> = {};

  if (!formData.name.trim()) {
    errors.name = "Name is required";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email is invalid";
  }

  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^[0-9]{11}$/.test(formData.phone)) {
    errors.phone = "Phone number must be 11 digits";
  }

  if (!formData.address.trim()) {
    errors.address = "Address is required";
  }

  if (!formData.city.trim()) {
    errors.city = "City is required";
  }

  return errors;
};
