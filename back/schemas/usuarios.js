import yup from 'yup'

export const usuarioSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(16)
        .matches(/[0-9]/, "La contraseña debe contener al menos un número")
        .matches(/[A-Z]/, "La contraseña debe contener al menos una mayúscula")
        .matches(/[@!*$#&?]/, "La contraseña debe contener al menos un caracter especial"),
    passwordConfirm: yup.string().oneOf([yup.ref("password")], "Las contraseñas deben coincidir").required(),
    age: yup.number().integer().min(1)
})

export const loginSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(16)
        .matches(/[0-9]/, "La contraseña debe contener al menos un número")
        .matches(/[A-Z]/, "La contraseña debe contener al menos una mayúscula")
        .matches(/[@!*$#&?]/, "La contraseña debe contener al menos un caracter especial")
})