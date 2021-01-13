import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../Button";

// note: must be placed within an AppForm component as a child for context to work
function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
