import Link from 'next/link'
import Image from 'next/image'

export default function FeedPage() {
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
              <Link href="/feed" className="text-blue-600 font-semibold">
                Feed
              </Link>
              <Link href="/live" className="text-gray-700 hover:text-blue-600 transition-colors">
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

      {/* Feed Content */}
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Latest Content</h1>
        
        <div className="space-y-8">
          {/* Sample feed items */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video bg-gray-200 overflow-hidden">
              <Image
                src="/bb85ecc0-632b-45a1-97af-987fa2d64f28.jpeg"
                alt="Bella Swims swimming adventure"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
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
                  <p className="text-sm text-gray-500">@bellaswims</p>
                </div>
              </div>
              <p className="text-gray-700">Check out my latest swimming adventure! 🏊‍♀️🐕</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video bg-gray-200 overflow-hidden">
              <Image
                src="/7f940b83-ea3f-46da-8761-d26dbc5d778c.jpeg"
                alt="Bruno Milk morning routine"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
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
                  <p className="text-sm text-gray-500">@brunomilk</p>
                </div>
              </div>
              <p className="text-gray-700">Morning milk session with the crew! 🥛🐕</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video bg-gray-200 overflow-hidden">
              <Image
                src="/8292b600-75fe-4c57-a858-4c940e5d7b29.jpeg"
                alt="Chloe Swims pool party"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
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
                  <p className="text-sm text-gray-500">@chloeswims</p>
                </div>
              </div>
              <p className="text-gray-700">Pool party time! Who's joining? 🏊‍♀️✨</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
