import Logo from "@/assets/Logo.png"
import HText from "@/shared/HText"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>@ Evogym All rights reserved.</p>
        </div>
        <div>
          <HText>Links</HText>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div>
          <HText>Contact Us</HText>
          <p></p>
          <p></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
