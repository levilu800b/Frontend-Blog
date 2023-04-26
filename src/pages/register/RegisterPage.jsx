import React from 'react'
import { useForm } from 'react-hook-form';
import MainLayout from '../../components/MainLayout/MainLayout'
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const {
			register,
			handleSubmit,
			formState: { errors, isValid },
			watch,
		} = useForm({
			defaultValues: {
				name: '',
				email: '',
				password: '',
				confirmPassword: '',
			},
            mode: 'onChange',
		});

    const submitHandler = () => {}

  return (
		<MainLayout>
			<section className="container mx-auto px-5 py-10">
				<div className="w-full max-w-sm mx-auto">
					<h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
						Sign Up
					</h1>
					<form onSubmit={handleSubmit(submitHandler)}>
						<div className="flex flex-col mb-6 w-full">
							<label
								htmlFor="name"
								className="text-[#5A7184] font-semibold block"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								{...register('name', {
                                    minLength: {
                                        value: 1,
                                        message: 'Name length must be at least 1 character',
                                    },
                                    required: {
                                        value: true,
                                        message: 'Name is required',
                                    }
                                })}
								placeholder="Enter name"
								className="placeholder:text-[#959EAD] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#C3CAD9]"
							/>
                            {errors.name?.message && (
                                <p className="text-red-500 text-xs mt-1">{errors.name?.message}</p>
                            )}
						</div>
						<div className="flex flex-col mb-6 w-full">
							<label
								htmlFor="email"
								className="text-[#5A7184] font-semibold block"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								{...register('email')}
								placeholder="Enter email"
								className="placeholder:text-[#959EAD] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#C3CAD9]"
							/>
						</div>
						<div className="flex flex-col mb-6 w-full">
							<label
								htmlFor="password"
								className="text-[#5A7184] font-semibold block"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								{...register('password')}
								placeholder="Enter password"
								className="placeholder:text-[#959EAD] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#C3CAD9]"
							/>
						</div>
						<div className="flex flex-col mb-6 w-full">
							<label
								htmlFor="confirmPassword"
								className="text-[#5A7184] font-semibold block"
							>
								Confirm Password
							</label>
							<input
								type="password"
								id="confirmPassword"
								{...register('confirmPassword')}
								placeholder="Enter confirm password"
								className="placeholder:text-[#959EAD] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#C3CAD9]"
							/>
						</div>
						<Link
							to="/forgot-password"
							className="text-sm font-semibold text-primary"
						>
							Forgot password
						</Link>
						<button
							type="submit"
							className="bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6"
						>
							Register
						</button>
						<p className="text-sm font-semibold text-[#5A7184]">
							You have an account?
							<Link to="/login" className="text-primary font-bold">
								{' '}
								Login now
							</Link>
						</p>
					</form>
				</div>
			</section>
		</MainLayout>
	);
}

export default RegisterPage