import { extend } from "vee-validate";
import { required, alpha, email,confirmed } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required"
});

extend("alpha", {
  ...alpha,
  message: "This field must only contain alphabetic characters"
});
extend("email", {
    ...email,
    message: "The Email field must be a valid email"
  });
  extend("confirmed", {
    ...confirmed,
    message: "The Password Confirm field confirmation does not match"
  });
  
  
