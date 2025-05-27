const Summary = () => {
  return (
    <section className="bg-[#010101] px-4 md:px-[10%] py-16 " id="About">
      <div className="space-y-12 flex justify-center">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed readable">
            I&apos;m a <span className="font-[JockeyOne]">3rd</span>-year
            Computer Science student at{" "}
            <span className="text-[var(--thirdColor)] text-xl font-bold">
              {" "}
              Ain Shams University{" "}
            </span>
            with strong full-stack development experience. Proficient in modern
            web technologies including React.js, Next.js, Node.js, and various
            databases. Demonstrated ability to deliver complex web applications
            and optimize existing systems for improved performance. Skilled in
            both independent development and team collaboration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Summary;
