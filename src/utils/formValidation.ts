export const getValidationErrors = (err) => {
  const validationErrors = {};

  err.inner.forEach(error => {
    if (error.path) {
      validationErrors[error.path] = error.message;
    }
  });

  return validationErrors;
}

export const handleSubmit = async (e, validationSchema, onError, onSuccess) => {
  e.preventDefault()
  const formData = new FormData(e.target)
  const formDataObj = {}
  formData.forEach((value, key) => (formDataObj[key] = value))

  validationSchema.validate(formDataObj, { abortEarly: false }).then(() => {
    onSuccess(formDataObj)
  })
    .catch(function(e) {
      const errs = getValidationErrors(e)
      onError(errs)
    })
}