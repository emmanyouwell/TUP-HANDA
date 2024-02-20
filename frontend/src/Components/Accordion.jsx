import React from 'react'

const Accordion = () => {
    return (
        <div className="space-y-4">
            <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                <summary
                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                >
                    <h2 className="font-medium">What is disaster preparedness training?</h2>

                    <svg
                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>

                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                Disaster preparedness training involves educating individuals and communities on how to prepare for, respond to, and recover from various natural and man-made disasters such as earthquakes, floods, fires, and more.
                </p>
            </details>

            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                >
                    <h2 className="font-medium">Who can benefit from disaster preparedness training?</h2>

                    <svg
                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>

                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                Disaster preparedness training is beneficial for everyone, including individuals, families, businesses, schools, and communities. It equips people with the knowledge and skills needed to protect themselves and others during emergencies.
                </p>
            </details>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                >
                    <h2 className="font-medium">What types of training modules are available on your website?</h2>

                    <svg
                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>

                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                Our website offers a wide range of training modules covering various natural disasters (e.g., earthquakes, floods, hurricanes) and man-made disasters (e.g., fires, chemical spills, terrorism). Each module provides comprehensive information and practical guidance on preparedness, response, and recovery.
                </p>
            </details>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                >
                    <h2 className="font-medium">Are the training modules suitable for beginners?</h2>

                    <svg
                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>

                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                Yes, our training modules are designed to cater to individuals with varying levels of knowledge and experience. Whether you're new to disaster preparedness or seeking to enhance your existing skills, our modules offer valuable insights and actionable tips for everyone.
                </p>
            </details>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                >
                    <h2 className="font-medium">How long does it take to complete a training module?</h2>

                    <svg
                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>

                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                The duration of each training module varies depending on its content and complexity. Some modules may be completed in a single session, while others may span multiple sessions or weeks. Users can progress through the modules at their own pace.
                </p>
            </details>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                >
                    <h2 className="font-medium">Are the training modules accessible to people with disabilities?</h2>

                    <svg
                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>

                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                Yes, we strive to make our training modules accessible to all users, including those with disabilities. Our website is designed to comply with accessibility standards, and we provide alternative formats or accommodations upon request.
                </p>
            </details>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                >
                    <h2 className="font-medium">Is the training content based on current research and best practices?</h2>

                    <svg
                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>

                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                Yes, our training content is developed by experts in disaster preparedness and emergency management. We continuously update our materials to reflect the latest research, industry standards, and best practices in the field.
                </p>
            </details>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                >
                    <h2 className="font-medium">Can I access the training modules on mobile devices?</h2>

                    <svg
                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>

                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                Yes, our website is optimized for mobile devices, allowing users to access the training modules anytime, anywhere. Whether you're using a smartphone, tablet, or computer, you can easily navigate through the modules and track your progress.
                </p>
            </details>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                >
                    <h2 className="font-medium">How can I track my progress in the training modules?</h2>

                    <svg
                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>

                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                Each user has a personalized dashboard where they can track their progress, view completed modules, and access additional resources. Our system also provides feedback and recommendations to help users achieve their learning goals.
                </p>
            </details>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                >
                    <h2 className="font-medium">How do I get started with disaster preparedness training?</h2>

                    <svg
                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>

                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                Getting started is easy! Simply create an account on our website, browse the available training modules, and enroll in the ones that interest you. You can start learning right away and take steps towards better preparedness for emergencies.
                </p>
            </details>
        </div>
    )
}

export default Accordion