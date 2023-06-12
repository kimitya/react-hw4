const Header = () => {
    return (
        <header className="bg-green-800 text-white">
            <nav className="container mx-auto flex items-center justify-between py-4">
                <a href="/" className="text-xl font-bold">
                    Harry Potter's Elixirs
                </a>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="hover: text-gray-300">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="about" className="hover: text-gray-300">
                            About
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )


}

export default Header;