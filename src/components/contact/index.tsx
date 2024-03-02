import { Button, Input, Spinner, Textarea, useToast } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ImGithub } from "react-icons/im";
import { Link } from "react-router-dom";

const initialInput = {
  user_name: "",
  user_email: "",
  message: "",
};

export default function Contact() {
  const toast = useToast();
  const form = useRef<HTMLFormElement>(null);
  const [input, setInput] = useState(initialInput);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (
      input.user_name == "" ||
      input.user_email == "" ||
      input.message == ""
    ) {
      toast({
        title: `input feild is empty`,
        status: "error",
        isClosable: true,
      });
      setLoading(false);
    } else {
      emailjs
        .sendForm(
          "service_ni42gpi",
          "template_vhl15p5",
          form.current,
          "-aEsO9Cy5cXe58Gfw"
        )
        .then((result: { status: number; text: string }) => {
          if (result?.text) {
            toast({
              title: `Message Send Successfully!`,
              status: "success",
              isClosable: true,
            });
          }
          setLoading(false);
          setInput(initialInput);
        });
    }
  };

  return (
    <div id="contact" className="p-20 bg-secondary w-full">
      <span
        className="text-4xl font-semibold text-white"
        style={{
          fontFamily: "Inria Serif",
        }}
      >
        Contect Me
      </span>
      <h1
        className="text-4xl mt-2 uppercase font-medium text-secondary"
        style={{
          fontFamily: "Paprika",
        }}
      >
        GET IN TOUCH
      </h1>
      <div className="flex items-start gap-10 mt-10">
        <form ref={form} onSubmit={sendEmail} className="w-[50%] text-white">
          <Input
            type="text"
            value={input.user_name}
            onChange={handleInputChange}
            placeholder="Full Name"
            name="user_name"
          />

          <Input
            mt={5}
            type="email"
            value={input.user_email}
            onChange={handleInputChange}
            placeholder="Email"
            name="user_email"
            errorBorderColor="crimson"
          />

          <Textarea
            value={input.message}
            onChange={handleInputChange}
            mt={5}
            placeholder="Type Your Message"
            errorBorderColor="crimson"
            name="message"
            minHeight={150}
          />
          <Button
            w="20%"
            type="submit"
            bgColor="white"
            color="#06223f"
            mt={5}
            mb={10}
            style={{
              borderRadius: "8px 2px 20px 8px",
              cursor: "pointer",
              fontWeight: 600,
            }}
            value="Send"
          >
            {loading ? <Spinner /> : "Send"}
          </Button>
        </form>

        <div className="text-white flex flex-col gap-5">
          <Link
            to={"mailto:agodse9@gmail.com"}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3"
          >
            <HiOutlineMail className="size-8" />
            <span>agodse9@gmail.com</span>
          </Link>
          <Link
            to={"https://github.com/agodse21"}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3"
          >
            <ImGithub className="size-8" />
            <span>agodse21</span>
          </Link>

          <Link
            to={
              "https://api.whatsapp.com/send/?phone=919860672023&text=I%27m+interested+to+talk+with+you!&type=phone_number&app_absent=0"
            }
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3"
          >
            <FaWhatsapp className="size-8" />
            <span>09860672023</span>
          </Link>

          <Link
            to={"https://www.linkedin.com/in/amol-godse-patil/"}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3"
          >
            <FaLinkedin className="size-8" />
            <span>amol-godse-patil</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
