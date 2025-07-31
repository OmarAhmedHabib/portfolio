export default function AboutPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4  py-5 bg-[#0f0c29] relative overflow-hidden text-white">
      {/* الخلفية */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><defs><pattern id='stars' patternUnits='userSpaceOnUse' width='100' height='100'><circle cx='5' cy='5' r='0.5' fill='white' opacity='0.8'/><circle cx='25' cy='35' r='0.3' fill='white' opacity='0.6'/><circle cx='75' cy='25' r='0.4' fill='white' opacity='0.7'/><circle cx='90' cy='10' r='0.2' fill='white' opacity='0.5'/><circle cx='50' cy='70' r='0.3' fill='white' opacity='0.6'/></pattern></defs><rect width='100%' height='100%' fill='url(%23stars)'/></svg>")`,
          backgroundSize: 'cover',
        }}
      ></div>

      {/* المحتوى */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* صورة البروفايل */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <img
              src="/img/omar.jpg"
              alt="Omar Habib"
              className="w-full h-full object-cover rounded-xl border-4 border-cyan-600 shadow-xl transform hover:scale-105 transition duration-500"
            />
            {/* الأيقونات */}
            <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg shadow-lg animate-pulse">
              <i className="fab fa-react"></i>
            </div>
            <div className="absolute -bottom-5 -right-4 w-11 h-11 flex items-center justify-center rounded-full bg-yellow-400 text-black text-lg shadow-lg animate-ping">
              <i className="fab fa-js"></i>
            </div>
            <div className="absolute top-10 -right-5 w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white text-lg shadow-lg animate-bounce">
              <i className="fab fa-css3-alt"></i>
            </div>
          </div>
        </div>

        {/* النصوص والمحتوى */}
        <div className="w-full lg:w-1/2 px-2 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-cyan-400 mr-2">[//]</span>About Me
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            I’m a <strong className="text-white">creative frontend architect</strong> with a passion for crafting immersive digital experiences. With over 5 years in the web development arena, I've mastered the art of blending aesthetics with functionality.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            My philosophy centers on <strong className="text-white">clean code</strong>, <strong className="text-white">intuitive interfaces</strong>, and <strong className="text-white">performance optimization</strong>. I don't just build websites — I create digital environments that users love to interact with.
          </p>

          {/* المهارات */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
            {[
              { icon: 'react', text: 'React Ecosystem', color: 'text-cyan-400' },
              { icon: 'js', text: 'JavaScript ES6+', color: 'text-yellow-400' },
              { icon: 'css3-alt', text: 'CSS3/Sass', color: 'text-blue-400' },
              { icon: 'paint-brush', text: 'UI/UX Design', color: 'text-pink-400' },
              { icon: 'mobile-alt', text: 'Responsive Design', color: 'text-green-400' },
              { icon: 'film', text: 'Web Animation', color: 'text-purple-400' },
            ].map(({ icon, text, color }) => (
              <div
                key={text}
                className="flex flex-col items-center p-4 rounded-xl bg-gray-800"
              >
                <i className={`fas fa-${icon} ${color} text-2xl mb-2`}></i>
                <span className="text-sm text-center">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
