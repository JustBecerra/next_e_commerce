"use server"

import { FormState, SignupFormSchema } from "../lib/definitions"

export async function signup(state: FormState, formData: FormData) {
	const validatedFields = SignupFormSchema.safeParse({
		email: formData.get("email"),
		password: formData.get("password"),
		confirmPassword: formData.get("confirmPassword"),
	})

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
		}
	}

	//more logic for db
}

// export async function signin(state: FormState, formData: FormData) {}