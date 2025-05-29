function CopyEmail() {

  const handleCopy = () => {
    navigator.clipboard.writeText('santos.orlando@gmail17.com')
      .then(() => alert('Copied'))
      .catch(err => console.error('Failed to copy!', err));
  };

  return (
    <button onClick={handleCopy} className="focus:outline-none">
      <img
        src="/images/gmail.png"
        alt="gmail"
        className="h-5 w-5 md:h-10 md:w-10"
      />
    </button>
  );
}

function Icons() {

  return (
    <div>
      <div>
        <div>
          <a href="https://linkedin.com/in/orlandosantos17" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/linkedin.png"
              alt="linkedin"
              className="h-5 w-5 md:h-10 md:w-10"
            />
          </a>
          <a href="https://github.com/Osantos17" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/git.png"
              alt="git"
              className="h-5 w-5 my-5 md:h-10 md:w-10 lg:my-8"
            />
          </a>

          <CopyEmail />

          <a href="https://apps.apple.com/us/app/a-frame-surf-forecast/id6741837362">
            <img
              src="/images/AFrame.png"
              alt="A-Frame"
              className="h-5 w-5 my-5 md:h-10 md:w-10 lg:my-8"
            />
          </a>

          <a href="/Orlando Santos - BIM Resume.pdf" download>
            <img
              src="/images/CV.png"
              alt="Orlandos-Resume"
              className="hover:opacity-80 transition h-6 mb-4 w-max-auto md:h-13 lg:h-14 w-max-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Icons;
