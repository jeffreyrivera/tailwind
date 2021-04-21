import React from 'react';
import popularDestinations from '../data/popularDestinations';
import DestinationCard from '../components/DestinationCard';

const App = () => {

	const renderDestinations = () => {
		return popularDestinations.map( (destination) => (
			<DestinationCard 
				destination={destination}
				key={destination.city} 
			/>
		));
	};

	return (
	<div className="bg-gray-200">
		<div className="grid lg:grid-cols-2 2xl:grid-cols-4"> 
			<div className="px-6 py-8 max-w-md sm:max-w-xl mx-auto rounded shadow-lg 
			lg:px12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
				<div className="xl:max-w-xl">
					<div className="px-6 py-4">
						<img 
							className="mt-3 w-full rounded-lg shadow-lg sm:mt-8 sm:h-64 sm:object-cover object-center lg:hidden" 
							src="/assets/portrait.jpg"
							alt="Profile"
						/>
					</div>
					<div className="px-6 py-4">
						<h1 className=" font-black font-headline tracking-tight text-brand text-4xl sm:text-5xl lg:text-4xl">
							Jeffrey Rivera
							<br className=""></br>
							<span className="font-medium text-gray-400 text-2xl sm:text-3xl lg:text-2xl">
								Software Engineer
							</span>
						</h1>
						<p className="text-gray-600 text-sm mt-2 sm:mt-4 sm:text-xl">
							When i’m not coding i switch to netflix with my favorite
								dessert while playing colonist on my phone as companion. <span></span>😜
						</p>	
						<div className="mt-4 sm:mt-6">
							<a href="" className="bg-brand inline-block px-5 py-2 rounded-lg
							hover:bg-brand-light hover:-translate-y-0.5 transform transition 
							focus:outline-none focus:ring focus:ring-offset-2 focus:ring-brand
							focus:ring-opacity-50 active:bg-brand-dark
							shadow-lg text-white uppercase tracking-wider font-semibold">Portfolio</a>
						</div>
					</div>
					<div className="px-6 py-4">
						<span className="hashtag">#Software Engineer</span>
						<span className="hashtag">#Sales Consultant</span>
						<span className="hashtag mt-2">#Gaymer</span>
						<span className="hashtag ">#Tennis Player</span>
						<span className="hashtag mt-2">#Car Enthusiast</span>
					</div>
				</div>
			</div>
			<div className="hidden relative rounded lg:block max-w-md mx-auto lg:max-w-full  xl:ml-0 xl:max-w-xl 2xl:col-span-2">
				<img 
					className="w-full h-full shadow-lg object-cover object-center" 
					src="/assets/portrait.jpg" 
					alt="Profile Picture"
				/>
			</div>
		</div>

		<div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
			<h2 className="text-xl text-gray-900">Popular destinations</h2>
			<p className="mt-2 text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>
			<div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
				{renderDestinations()}
			</div>
		</div>
	</div>
  );
}
export default App;
