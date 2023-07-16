const Navbar = ({ setpage, allPages }) => {
    return (
        <nav>
            {allPages.map(page => (
                <button
                    key={page}
                    onClick={() => { setpage(page) }}>
                    {page}
                </button>
            ))}
        </nav>
    )
};

export default Navbar;