export const validation = (form, errors, setErrors, target) => {
  const regexURL = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;

  if (target === "title") {
    if (form.title.length > 30) {
      setErrors({
        ...errors,
        title: "The title can't contain more than 30 characters",
      });
    }
    if (!form.title) {
      setErrors({ ...errors, title: "Empty title is invalid" });
    } else {
      setErrors({ ...errors, title: "" });
    }
  }
  if (target === "summary") {
    if (form.summary.length > 100) {
      setErrors({
        ...errors,
        summary: "Summary can't contain more than 100 characters",
      });
    }
    if (!form.summary) {
      setErrors({ ...errors, summary: "Empty summary is invalid" });
    } else {
      setErrors({
        ...errors,
        summary: "",
      });
    }
  }
  if (target === "instructions") {
    if (!form.instructions.length) {
      setErrors({ ...errors, instructions: "Empty instructions are invalid" });
    } else {
      setErrors({ ...errors, instructions: "" });
    }
  }
  if (target === "healthScore") {
    if (form.healthScore > 100) {
      setErrors({ ...errors, healthScore: "Health score limit is 100" });
    } else {
      setErrors({ ...errors, healthScore: "" });
    }
  }
  if (target === "image") {
    if (!regexURL.test(form.image)) {
      setErrors({
        ...errors,
        image:
          "Invalid URL, try an ULR like: https://github.com/martinellilucas",
      });
    } else {
      setErrors({ ...errors, image: "" });
    }
  }
};
