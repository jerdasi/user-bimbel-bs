

const validation = (formValues) => {

    let errors = {}

    if (!formValues.nama){
        errors.nama = "Nama tidak boleh kosong."
    }
  return errors
}

export default validation
