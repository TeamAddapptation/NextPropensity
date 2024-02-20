"use client";

import { useEffect, useState } from "react";
import { CheckIcon, HandThumbUpIcon, MinusIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
export default function Checklist({ play, adChecks }) {
	const [setupArr, setSetupArr] = useState([]);

	useEffect(() => {
		const steps = adChecks.setup.map((step) => ({
			content: step.name,
			icon: play[step.record] ? CheckIcon : MinusIcon,
			iconBackground: play[step.record] ? "bg-green-500" : "bg-yellow-400",
		}));
		setSetupArr(steps);
		if (adChecks.adType === "facebook") {
			const audience = {
				content: "One or more Buying Circles connected",
				icon: play.buying_circles && play.buying_circles.length ? CheckIcon : MinusIcon,
				iconBackground: play.buying_circles && play.buying_circles.length ? "bg-green-500" : "bg-yellow-400",
			};
			setSetupArr((prevSetupArr) => [...prevSetupArr, audience]);
		}
	}, [adChecks, play]);

	if (setupArr && setupArr.length == 0) {
		return <h2>Loading...</h2>;
	}

	return (
		<div className='flow-root'>
			<ul role='list' className='-mb-8'>
				{setupArr.map((event, eventIdx) => (
					<li key={eventIdx}>
						<div className='relative pb-8'>
							{eventIdx !== setupArr.length - 1 ? <span className='absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200' aria-hidden='true' /> : null}
							<div className='relative flex space-x-3'>
								<div>
									<span className={classNames(event.iconBackground, "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white")}>
										<event.icon className='h-5 w-5 text-white' aria-hidden='true' />
									</span>
								</div>
								<div className='flex min-w-0 flex-1 justify-between space-x-4 pt-1.5'>
									<div>
										<p className='text-sm text-gray-500'>
											{event.content}{" "}
											<a href={event.href} className='font-medium text-gray-900'>
												{event.target}
											</a>
										</p>
									</div>
									<div className='whitespace-nowrap text-right text-sm text-gray-500'>
										<time dateTime={event.datetime}>{event.date}</time>
									</div>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
