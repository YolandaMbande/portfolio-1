const developerBingo = [
  {
    text: "Googled the exact error message",
    checked: true,
  },
  {
    text: "Spent hours debugging... it was a typo",
    checked: true,
  },
  {
    text: '"It works on my machine."',
    checked: true,
  },
  {
    text: "Won against Git merge conflicts",
    checked: true,
  },
  {
    text: "Renamed the same variable five times",
    checked: true,
  },
  {
    text: "Accidentally deployed on a Friday",
    checked: false,
  },
];

const RightNow = () => {
  return (
    <section className="content py-12 md:py-24 px-2">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <p className="section-title mb-5">
            Beyond the Code
          </p>

          <p className="text-[14px] sm:text-lg text-soft-dark max-w-2xl mx-auto">
            A quick snapshot of what I'm building, learning, and the
            little moments every developer can relate to.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* RIGHT NOW */}

          <div className="rounded-3xl border border-white/10 bg-[#111111] p-8 transition duration-300 hover:border-white/20">

            <h3 className="text-2xl text-white font-semibold mb-8">
              Right Now
            </h3>

            <div className="space-y-6">

              <div className="flex justify-between gap-6 border-b border-white/5 pb-4">
                <span className="text-soft-dark">
                  Building
                </span>

                <span className="text-right text-white font-medium">
                  Personal Developer Portfolio
                </span>
              </div>

              <div className="flex justify-between gap-6 border-b border-white/5 pb-4">
                <span className="text-soft-dark">
                  Learning
                </span>

                <span className="text-right text-white font-medium">
                  AI Integrations • React • Docker
                </span>
              </div>

              <div className="flex justify-between gap-6 border-b border-white/5 pb-4">
                <span className="text-soft-dark">
                  Seeking
                </span>

                <span className="text-right text-white font-medium">
                  Junior Software Developer Role
                </span>
              </div>

              <div className="flex justify-between gap-6">
                <span className="text-soft-dark">
                  Next Project
                </span>

                <span className="text-right text-white font-medium">
                  Live Radio Streaming Platform
                </span>
              </div>

            </div>

            <div className="mt-10 pt-6 border-t border-white/10">
              <p className="text-sm text-soft-dark italic">
                Always learning, always building, always open to the next
                challenge.
              </p>
            </div>

          </div>

          {/* DEVELOPER BINGO */}

          <div className="rounded-3xl border border-white bg-[#080808] p-8 transition duration-300 hover:border-white">

            <h3 className="text-2xl text-white font-semibold mb-8">
              Developer Bingo 🤣
            </h3>

            <div className="space-y-5">

              {developerBingo.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-4"
                >
                  <span
                    className={`text-xl ${
                      item.checked
                        ? "text-green-400"
                        : "text-gray-500"
                    }`}
                  >
                    {item.checked ? "☑" : "☐"}
                  </span>

                  <span
                    className={`${
                      item.checked
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                  >
                    {item.text}
                  </span>
                </div>
              ))}

            </div>

            <div className="mt-10 pt-6 border-t border-white/10">
              <p className="text-sm text-soft-dark">
                Current streak:{" "}
                <span className="text-white font-medium">
                  5 / 6 completed
                </span>
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default RightNow;