import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <div>
            <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0" y="0" width="100" height="100" fill="#ffffff" />
                            <path d="M50 20 L25 40 L30 45 L50 25 L70 45 L75 40 Z" fill="#ffcc00" />
                            <path d="M50 20 L25 40 L30 45 L50 25 L70 45 L75 40 Z" stroke="#000000" stroke-width="3" fill="none" />
                            <circle cx="50" cy="65" r="15" fill="#7f00ff" />
                            <circle cx="50" cy="65" r="15" stroke="#000000" stroke-width="3" fill="none" />
                            <path d="M50 75 L50 90 Q60 85 65 75 Q60 70 50 75 Z" fill="#7f00ff" />
                            <path d="M50 75 L50 90 Q60 85 65 75 Q60 70 50 75 Z" stroke="#000000" stroke-width="3" fill="none" />
                            <path d="M38 40 Q42 45 42 50 Q42 55 38 60 L30 60 L32 58 L38 58 Q40 58 40 55 Q40 52 38 50 Q35 45 32 45 L30 43 Q33 42 38 40 Z" fill="#ffffff" />
                            <path d="M38 40 Q42 45 42 50 Q42 55 38 60 L30 60 L32 58 L38 58 Q40 58 40 55 Q40 52 38 50 Q35 45 32 45 L30 43 Q33 42 38 40 Z" stroke="#000000" stroke-width="3" fill="none" />
                        </svg>

                        <span class="ml-3 text-xl">AdMonster - BETA</span>
                    </a>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/" >Home</Link>
                    </nav>
                    
                </div>
            </header>
        </div>
    )
}

export default Header