export default function About() {
  return (
    <div id="about" className="bg-primary p-20 pb-0 w-full">
      <span
        className="text-4xl font-semibold text-primary"
        style={{
          fontFamily: "Inria Serif",
        }}
      >
        About Me
      </span>
      <h1
        className="text-4xl mt-2 uppercase font-medium text-secondary"
        style={{
          fontFamily: "Paprika",
        }}
      >
        Who I am
      </h1>

      <div className="flex items-center">
        <img
          src="https://codeaprogram-portfolio.web.app/assets/person.3319b995.png"
          alt="about"
          className="w-[40%]"
        />
        <div className="flex flex-col gap-7 text-base font-medium">
          <p className="text-justify">
            My name's <b> Amol Godse</b> and i enjoy creating things that live
            on the internet.
          </p>
          <p className="text-justify">
            I'm a <b>Full-Stack Web Developer</b> with the ability to learn and
            collaborate in rapidly changing environments and compositions. I
            have successfully built multiple features from start to finish. I
            also lead teams well, making sure everyone can work effectively.
            Right now, I specialize in
            <b> TypeScript, React, and Node.js for my projects</b>. With over
            <b> 2 years of experience </b> in working with{" "}
            <b> design systems and component libraries.</b> I love making
            products with a keen eye for detail and making sure they're easy for
            users to use.
          </p>

          <p className="text-justify">
            I am passionate about solving technical problems, researching and
            developing new sites and technologies. I undertake and challenge
            myself to always improve, by being proactive, diligent, responsible,
            and committed to finding the perfect solution to any problem.
          </p>
        </div>
      </div>
    </div>
  );
}
