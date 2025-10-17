import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

// Creator data - in a real app, this would come from a database
const creators = {
  bellaswims: {
    name: 'Bella Swims',
    username: 'bellaswims',
    image: '/bb85ecc0-632b-45a1-97af-987fa2d64f28.jpeg',
    bio: 'Swimming enthusiast and water lover. Join me for daily pool adventures!',
    followers: '125K',
    posts: '342',
    verified: true,
    specialties: ['Swimming', 'Water Sports', 'Pool Training'],
    recentPosts: [
      { id: 1, title: 'Morning Pool Session', thumbnail: '/bb85ecc0-632b-45a1-97af-987fa2d64f28.jpeg' },
      { id: 2, title: 'Underwater Adventure', thumbnail: '/bb85ecc0-632b-45a1-97af-987fa2d64f28.jpeg' },
      { id: 3, title: 'Pool Party Time', thumbnail: '/bb85ecc0-632b-45a1-97af-987fa2d64f28.jpeg' },
    ]
  },
  brunomilk: {
    name: 'Bruno Milk',
    username: 'brunomilk',
    image: '/7f940b83-ea3f-46da-8761-d26dbc5d778c.jpeg',
    bio: 'Milk connoisseur and morning routine specialist. Fresh content daily!',
    followers: '89K',
    posts: '256',
    verified: true,
    specialties: ['Morning Routines', 'Milk Reviews', 'Daily Vlogs'],
    recentPosts: [
      { id: 1, title: 'Morning Milk Ritual', thumbnail: '/7f940b83-ea3f-46da-8761-d26dbc5d778c.jpeg' },
      { id: 2, title: 'Milk Taste Test', thumbnail: '/7f940b83-ea3f-46da-8761-d26dbc5d778c.jpeg' },
      { id: 3, title: 'Fresh Start Monday', thumbnail: '/7f940b83-ea3f-46da-8761-d26dbc5d778c.jpeg' },
    ]
  },
  chloeswims: {
    name: 'Chloe Swims',
    username: 'chloeswims',
    image: '/8292b600-75fe-4c57-a858-4c940e5d7b29.jpeg',
    bio: 'Beach lover and ocean explorer. Follow my coastal adventures!',
    followers: '203K',
    posts: '478',
    verified: true,
    specialties: ['Beach Adventures', 'Ocean Swimming', 'Coastal Living'],
    recentPosts: [
      { id: 1, title: 'Beach Day Bliss', thumbnail: '/8292b600-75fe-4c57-a858-4c940e5d7b29.jpeg' },
      { id: 2, title: 'Ocean Waves', thumbnail: '/8292b600-75fe-4c57-a858-4c940e5d7b29.jpeg' },
      { id: 3, title: 'Sunset Swim', thumbnail: '/8292b600-75fe-4c57-a858-4c940e5d7b29.jpeg' },
    ]
  },
  dieseldaddy: {
    name: 'Diesel Daddy',
    username: 'dieseldaddy',
    image: '/c90855c0-341f-4b4c-be8e-336ad29d5a69.jpeg',
    bio: 'Fitness enthusiast and strength trainer. Get strong with Diesel!',
    followers: '156K',
    posts: '289',
    verified: true,
    specialties: ['Fitness', 'Strength Training', 'Workout Routines'],
    recentPosts: [
      { id: 1, title: 'Power Workout', thumbnail: '/c90855c0-341f-4b4c-be8e-336ad29d5a69.jpeg' },
      { id: 2, title: 'Strength Training', thumbnail: '/c90855c0-341f-4b4c-be8e-336ad29d5a69.jpeg' },
      { id: 3, title: 'Morning Pump', thumbnail: '/c90855c0-341f-4b4c-be8e-336ad29d5a69.jpeg' },
    ]
  },
  lunaluxe: {
    name: 'Luna Luxe',
    username: 'lunaluxe',
    image: '/68b0317b-a179-4d0d-be79-5acd1397c2c8.jpeg',
    bio: 'Elegant lifestyle and luxury content. Sophisticated canine living.',
    followers: '178K',
    posts: '312',
    verified: true,
    specialties: ['Luxury Lifestyle', 'Elegant Living', 'Premium Content'],
    recentPosts: [
      { id: 1, title: 'Luxury Evening', thumbnail: '/68b0317b-a179-4d0d-be79-5acd1397c2c8.jpeg' },
      { id: 2, title: 'Elegant Living', thumbnail: '/68b0317b-a179-4d0d-be79-5acd1397c2c8.jpeg' },
      { id: 3, title: 'Premium Lifestyle', thumbnail: '/68b0317b-a179-4d0d-be79-5acd1397c2c8.jpeg' },
    ]
  },
  maxmuscles: {
    name: 'Max Muscles',
    username: 'maxmuscles',
    image: '/unnamed.png',
    bio: 'Bodybuilding champion and muscle building expert. Train like Max!',
    followers: '234K',
    posts: '445',
    verified: true,
    specialties: ['Bodybuilding', 'Muscle Building', 'Competition Prep'],
    recentPosts: [
      { id: 1, title: 'Chest Day', thumbnail: '/unnamed.png' },
      { id: 2, title: 'Leg Workout', thumbnail: '/unnamed.png' },
      { id: 3, title: 'Arm Pump', thumbnail: '/unnamed.png' },
    ]
  }
}

interface PageProps {
  params: Promise<{
    username: string
  }>
}

export default async function CreatorPage({ params }: PageProps) {
  const { username } = await params
  const creator = creators[username as keyof typeof creators]

  if (!creator) {
    notFound()
  }

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

      {/* Creator Profile */}
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
            <Image
              src={creator.image}
              alt={creator.name}
              width={120}
              height={120}
              className="rounded-full"
            />
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{creator.name}</h1>
                {creator.verified && (
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <p className="text-gray-600 mb-4">@{creator.username}</p>
              <p className="text-gray-700 mb-6">{creator.bio}</p>
              
              {/* Stats */}
              <div className="flex justify-center md:justify-start space-x-8 mb-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{creator.followers}</p>
                  <p className="text-gray-600">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{creator.posts}</p>
                  <p className="text-gray-600">Posts</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center md:justify-start space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Follow
                </button>
                <Link
                  href="/messages"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Message
                </Link>
              </div>
            </div>
          </div>

          {/* Specialties */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Specialties</h3>
            <div className="flex flex-wrap gap-2">
              {creator.specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creator.recentPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-3">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

// Generate static params for the creators we know about
export async function generateStaticParams() {
  return Object.keys(creators).map((username) => ({
    username,
  }))
}
