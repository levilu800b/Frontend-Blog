import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'

const RegisterPage = () => {
    const submitHandler = () => {}

  return (
		<MainLayout>
			<section className="container mx-auto px-5 py-10">
				<div className="w-full max-w-sm mx-auto">
					<h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
						Sign Up
					</h1>
					<form onSubmit={submitHandler}>
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
								placeholder="Enter name"
								className="placeholder:text-[#959EAD] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#C3CAD9]"
							/>
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
								placeholder="Enter confirm password"
								className="placeholder:text-[#959EAD] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#C3CAD9]"
							/>
						</div>
					</form>
				</div>
			</section>
		</MainLayout>
	);
}

export default RegisterPage