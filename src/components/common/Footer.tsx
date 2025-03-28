function Footer() {
    return (
        <footer className="bg-[#266464] text-white py-8 px-4  xl:h-[25vh]">
            <div className="container mx-auto flex flex-col md:flex-row xl:items-center xl:justify-between">
                {/* Logo Placeholder */}
                <div className="">
                <img
              src="/images/logo.jpg"
              alt="Image"
              className=" w-[12vh] xl:ml-20"
            />
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-wrap gap-6 text-lg font-medium mt-4 md:mt-0 ">
                    <span className="cursor-pointer hover:text-gray-300">Home</span>
                    <span className="cursor-pointer hover:text-gray-300">About Us</span>
                    <span className="cursor-pointer hover:text-gray-300">Contact Us</span>
                </nav>
            </div>
            
            {/* Copyright */}
            <div className="text-center mt-6 text-sm text-gray-200">
                &copy; {new Date().getFullYear()} All Rights Reserved
            </div>
        </footer>
    );
}

export default Footer;
