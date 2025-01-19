import blur from "/public/blur.png";
import example from "/public/example.png";
import result from "/public/result.png";

export default function ExplainerSection() {
  return (
    <div className="w-full py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transform your selfies into professional headshots in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Step 1 */}
          <div className="relative group">
            <div className="bg-white rounded-2xl shadow-xl p-8 transition-transform duration-300 hover:-translate-y-2">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  1
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Upload your images</h3>
                <p className="text-gray-600 text-center mb-6">
                  Upload 4+ high-quality selfies: front facing, 1 person in frame, no glasses or hats.
                </p>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={example.src}
                    alt="AI Headshot example"
                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="bg-white rounded-2xl shadow-xl p-8 transition-transform duration-300 hover:-translate-y-2">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  2
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Our AI gets to work</h3>
                <p className="text-gray-600 text-center mb-6">
                  The AI magic takes ~20 minutes. You'll get an email when its ready!
                </p>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={blur.src}
                    alt="AI Headshot blur"
                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="bg-white rounded-2xl shadow-xl p-8 transition-transform duration-300 hover:-translate-y-2">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  3
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Get amazing headshots</h3>
                <p className="text-gray-600 text-center mb-6">
                  Once your model is trained, we'll give you amazing headshots!
                </p>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={result.src}
                    alt="AI Headshot result"
                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
