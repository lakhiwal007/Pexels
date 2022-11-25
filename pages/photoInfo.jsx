
export default function photoInfo() {

	return (
		<div className="w-full flex p-16  aspect-w-1 aspect-h-1 overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
			<div className="w-full flex  aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
				<img src="https://images.unsplash.com/photo-1515248027005-c33283ec3fba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fDRrJTIwd2FsbHBhcGVyJTIwY29sb3JmdWwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="w-full h-full object-center object-cover lg:w-full lg:h-full" alt="jdfhgf" />
			</div>
			<div className="w-full h-full flex justify-center items-center" >
				<form className="w-full flex flex-col justify-center items-center m-4">
					<input type="text" name="Title" placeholder="Title" className="w-full p-4 m-2 rounded-md outline-none border border-gray-100 focus:bg-gray-300 " onChange={(event) => handleChange(event)} />
					<input type="text" name="Tags" placeholder="Tags" className="w-full p-4 m-2 rounded-md outline-none border border-gray-100 focus:bg-gray-300 " onChange={(event) => handleChange(event)} />
					<input type="text" name="Location" placeholder="Location" className="w-full p-4 m-2 rounded-md outline-none border border-gray-100 focus:bg-gray-300 " onChange={(event) => handleChange(event)} />
					<button type="button" name="Save" className="w-[60px] p-4 m-2 rounded-md outline-none border border-gray-100 bg-pexels text-white pointer-cursor font-light "> Save</button>
				</form>
			</div>
		</div>
	)
}

