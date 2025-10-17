import Link from 'next/link'
import Image from 'next/image'

export default function MessagesPage() {
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
              <Link href="/live" className="text-gray-700 hover:text-blue-600 transition-colors">
                Live
              </Link>
              <Link href="/messages" className="text-blue-600 font-semibold">
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

      {/* Messages Content */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
            <p className="text-gray-600 mt-1">Connect with your favorite creators</p>
          </div>

          <div className="divide-y divide-gray-200">
            {/* Message Threads */}
            <div className="p-6 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-4">
                <Image
                  src="/bb85ecc0-632b-45a1-97af-987fa2d64f28.jpeg"
                  alt="Bella Swims"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Bella Swims</h3>
                    <span className="text-sm text-gray-500">2 min ago</span>
                  </div>
                  <p className="text-gray-600 truncate">Thanks for the support! How did you like the swimming video?</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="p-6 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-4">
                <Image
                  src="/7f940b83-ea3f-46da-8761-d26dbc5d778c.jpeg"
                  alt="Bruno Milk"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Bruno Milk</h3>
                    <span className="text-sm text-gray-500">1 hour ago</span>
                  </div>
                  <p className="text-gray-600 truncate">Check out my new milk video! What do you think?</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="p-6 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-4">
                <Image
                  src="/8292b600-75fe-4c57-a858-4c940e5d7b29.jpeg"
                  alt="Chloe Swims"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Chloe Swims</h3>
                    <span className="text-sm text-gray-500">3 hours ago</span>
                  </div>
                  <p className="text-gray-600 truncate">Beach day was amazing! Thanks for watching the live stream 🌊</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="p-6 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-4">
                <Image
                  src="/c90855c0-341f-4b4c-be8e-336ad29d5a69.jpeg"
                  alt="Diesel Daddy"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Diesel Daddy</h3>
                    <span className="text-sm text-gray-500">Yesterday</span>
                  </div>
                  <p className="text-gray-600 truncate">Workout session tomorrow at 6 PM. Don't miss it!</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="p-6 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-4">
                <Image
                  src="/68b0317b-a179-4d0d-be79-5acd1397c2c8.jpeg"
                  alt="Luna Luxe"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Luna Luxe</h3>
                    <span className="text-sm text-gray-500">2 days ago</span>
                  </div>
                  <p className="text-gray-600 truncate">Evening walk was peaceful. Hope you enjoyed the sunset views!</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Empty State for Premium Users */}
          <div className="p-8 text-center">
            <div className="max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Upgrade to Premium</h3>
              <p className="text-gray-600 mb-4">
                Get unlimited messaging with your favorite creators and access to exclusive content.
              </p>
              <Link
                href="/signup?plan=premium"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Upgrade Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
