const { z } = require("zod")

const signupSchema = z.object({
    username: z.string({ required_error: "Name is Required" }).trim().min(3, { message: "Name must be at least of 3 char. " }).max(255, { message: "Name must not be more than 255 char " }),
    email: z.string({ required_error: "Email is Required" }).trim().email({ message: "Invalid email address" }).min(3, { message: "Email must be at least of 3 char. " }).max(255, { message: "Email must not be more than 255 char " }),
    phone: z.string({ required_error: "Phone is Required" }).trim().min(10, { message: "Phone must be at least of 10 char. " }).max(20, { message: "Phone must not be more than 20 char " }),
    password: z.string({ required_error: "Password is Required" }).min(8, { message: "Password must be at least of 8 char. " }).max(1024, { message: "Password must not be more than 20 char " }),
})

module.exports = signupSchema