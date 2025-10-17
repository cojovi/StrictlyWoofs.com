import Link from 'next/link'
import Image from 'next/image'

export default function LivePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-4">
              <Image
                src="/StrictlyWoof_long_logo_Blue_SVG.svg"
                alt="StrictlyWoofs Logo"
                width={200}
                height={50}
                className="h-8 w-auto"
              />
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/feed" className="text-gray-700 hover:text-blue-600 transition-colors">
                Feed
              </Link>
              <Link href="/live" className="text-blue-600 font-semibold">
                Live
              </Link>
              <Link href="/messages" className="text-gray-700 hover:text-blue-600 transition-colors">
                Messages
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-colors">
                Login
              </Link>
              <Link 
                href="/signup" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Live Content */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Live Streams</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Live Stream Cards */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video bg-red-100 flex items-center justify-center relative">
              <div className="text-center">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse mb-2 mx-auto"></div>
                <p className="text-red-600 font-semibold">LIVE NOW</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Image
                  src="/bb85ecc0-632b-45a1-97af-987fa2d64f28.jpeg"
                  alt="Bella Swims"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">Bella Swims</h3>
                  <p className="text-sm text-gray-500">Pool Training Session</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Join Bella for her daily swimming routine!</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">1,234 viewers</span>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors">
                  Join Live
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Stream Offline</p>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Image
                  src="/7f940b83-ea3f-46da-8761-d26dbc5d778c.jpeg"
                  alt="Bruno Milk"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">Bruno Milk</h3>
                  <p className="text-sm text-gray-500">Next: Evening Playtime</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Bruno will be back at 7 PM EST</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Offline</span>
                <button className="bg-gray-400 text-white px-4 py-2 rounded-lg text-sm font-semibold cursor-not-allowed">
                  Offline
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video bg-red-100 flex items-center justify-center relative">
              <div className="text-center">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse mb-2 mx-auto"></div>
                <p className="text-red-600 font-semibold">LIVE NOW</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Image
                  src="/8292b600-75fe-4c57-a858-4c940e5d7b29.jpeg"
                  alt="Chloe Swims"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">Chloe Swims</h3>
                  <p className="text-sm text-gray-500">Beach Adventure</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Chloe's beach day continues!</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">892 viewers</span>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors">
                  Join Live
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Streams */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Streams</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/c90855c0-341f-4b4c-be8e-336ad29d5a69.jpeg"
                    alt="Diesel Daddy"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">Diesel Daddy</h3>
                    <p className="text-sm text-gray-500">Workout Session</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Today at 6:00 PM EST</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                    Set Reminder
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/68b0317b-a179-4d0d-be79-5acd1397c2c8.jpeg"
                    alt="Luna Luxe"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">Luna Luxe</h3>
                    <p className="text-sm text-gray-500">Evening Walk</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Tomorrow at 8:00 AM EST</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                    Set Reminder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
