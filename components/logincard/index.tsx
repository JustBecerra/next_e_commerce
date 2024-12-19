const LoginCard = () => {
	// const [state, action, pending] = useActionState(signin, undefined)
	return (
		<form>
			<div className="flex flex-col w-[400px] h-fit border-2 gap-8 rounded border-white">
				<h1 className="text-center mt-6">Welcome to Next-E-Commerce</h1>
				<div className="flex flex-col w-full h-1/2 gap-6 justify-center items-center">
					<input className="w-3/4 rounded-full text-black focus-visible:outline-none" />
					<input className="w-3/4 rounded-full text-black focus-visible:outline-none" />
				</div>
				<div className="flex w-full h-1/8 mb-6 gap-6 justify-center items-center">
					<button className="rounded-full px-4 py-2 border-2 border-white">
						Register
					</button>
					<button className="rounded-full px-4 py-2 border-2 border-white">
						Login
					</button>
				</div>
			</div>
		</form>
	)
}

export default LoginCard
